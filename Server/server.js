
import express from "express";
import path from "path";
import livereload from "livereload";
import connectLivereload from "connect-livereload";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

// LiveReload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "Client"));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Inject livereload script into served HTML
app.use(connectLivereload());

// Serve static files
app.use(express.static(path.join(__dirname, "Client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Client/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
