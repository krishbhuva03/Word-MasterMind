const fastify = require("fastify")({ logger: true });
const fastifyStatic = require("fastify-static");
const path = require("path");

const { Game } = require("./game");
const { Dictionary } = require("./dictionary");

// --- MODIFICATION START ---
// Variables are declared at the top level to persist across function invocations.
let dictionaries;
let defaultDictionary;
let isInitialized = false;
// --- MODIFICATION END ---

const gameOptions = {
  totalAttempts: Number(process.env.TOTAL_ATTEMPTS) || 7,
};

const gamesById = new Map();

// Serve static assets from the ../assets directory
// NOTE: Vercel handles static assets differently. For this to work, your 'assets'
// folder should be renamed to 'public' and placed in the project's root directory.
// Fastify will still serve them locally, and Vercel will serve them automatically in production.
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../public/"), // Changed from ../assets/
});

// Root route: show status or load index.html if it exists
fastify.get("/", async (req, reply) => {
  // Vercel's routes in vercel.json will handle serving index.html directly.
  // This route will now primarily act as a health check for the API.
  return { status: "Server is running", routes: ["/game/start", "/game/submit"] };
});

// Start a new game
fastify.post("/game/start", (req, res) => {
  const { dictName } = req.body;
  const dictionary = dictionaries.get(dictName) || defaultDictionary;
  const game = new Game(dictionary, gameOptions);
  const id = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
  gamesById.set(id, game);
  return {
    id,
    ...game.start(),
  };
});

// Submit a guess to an existing game
fastify.post("/game/submit", (req, res) => {
  const { id, guess } = req.body;
  const game = gamesById.get(String(id));
  if (game === undefined) {
    res.callNotFound();
    return;
  }

  const result = game.submitGuess(guess);
  if (result.won) {
    gamesById.delete(id); // Clean up after win
  }

  return result;
});


// --- MODIFICATION START ---
// This function handles the one-time asynchronous setup (loading dictionaries).
// The isInitialized flag ensures it only runs once per serverless instance.
const initializeServer = async () => {
  if (isInitialized) {
    return;
  }
  try {
    dictionaries = await Dictionary.getAllAvailableDictionaries();
    defaultDictionary = dictionaries.get("en-us-5");
    console.log("Dictionaries initialized: " + [...dictionaries.keys()]);
    isInitialized = true;
  } catch (err) {
    fastify.log.error("Initialization failed:", err);
    // Throwing an error here will cause the serverless function invocation to fail.
    throw new Error("Could not initialize dictionaries.");
  }
};

// The original start() function and its call are removed.
// They are replaced with this export, which is Vercel's entry point.
module.exports = async (req, res) => {
  // Ensure the server is initialized before handling any request.
  await initializeServer();

  // Wait for all Fastify plugins to be ready.
  await fastify.ready();

  // Pass the incoming request to the Fastify server.
  fastify.server.emit('request', req, res);
};
// --- MODIFICATION END ---