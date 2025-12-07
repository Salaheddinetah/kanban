import { Board } from "./board.js";
import { getAllPersons } from "./person-database.js";
import { Ticket } from "./ticket.js";
import './pie-chart.js';


// Aanmaken van een board met 3 kolommen.
let board = new Board("To do", "Doing", "Done");

// Aanmaken van de 4 personen. De familienaam laten we leeg.
let persons = await getAllPersons();

// Nu dat alles aangemaakt werd ... het resultaat tonen.
board.renderOnConsole();
await board.renderOnPage(document.getElementById("board"));