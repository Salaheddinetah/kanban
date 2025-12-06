import express from "express";
import livereload from "connect-livereload";
import connectLivereload from "connect-livereload";

app.use(express.static("../Client"));

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'Client', 'Server'));

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

// monkey patch every served HTML so they know of changes
app.use(connectLivereload());
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


