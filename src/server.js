const fastify = require("fastify")({ logger: true });
const fastifyStatic = require("fastify-static");
const path = require("path");

const { Game } = require("./game");
const { Dictionary } = require("./dictionary");

let dictionaries;
let defaultDictionary;
let isInitialized = false;

const gameOptions = {
  totalAttempts: Number(process.env.TOTAL_ATTEMPTS) || 7,
};

const gamesById = new Map();

// This plugin is for local development. Vercel will serve the public directory automatically.
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../public/"),
});

// --- ROUTES UPDATED WITH /api PREFIX ---

// API health check route
fastify.get("/api", async (req, reply) => {
  return { status: "API Server is running", routes: ["/api/game/start", "/api/game/submit"] };
});

// Start a new game
fastify.post("/api/game/start", (req, res) => {
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
fastify.post("/api/game/submit", (req, res) => {
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


// --- SERVER INITIALIZATION AND EXPORT (No changes needed here) ---

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
    throw new Error("Could not initialize dictionaries.");
  }
};

module.exports = async (req, res) => {
  await initializeServer();
  await fastify.ready();
  fastify.server.emit('request', req, res);
};