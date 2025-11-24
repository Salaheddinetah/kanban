import { Ticket } from "./ticket.js";

export class Column {
    #columnName;
    #tickets;

    constructor(columnName, tickets) {
        this.#columnName = columnName;
        this.#tickets = [];
    }

    get columnName() {
        return this.#columnName;    
    }
    get tickets() {
        return this.#tickets;    
        }

    canAddTicket() {
        if (this.#tickets.length > 10) {
            return false
        }
        return true
    }

    addTicket(ticket) {
        if (!this.canAddTicket()) {
            throw new Error('Cannot add more tickets to this column');
        }
        if (ticket.column) {
            throw new Error('Ticket already belongs to a column');
        }
        
       
     this.#tickets.push(ticket);
     return ticket;
    }

  removeTicket(ticketId) {
   let index = this.#tickets.findIndex(ticket => ticket.id === ticketId);
    if (index === -1) {
        throw new Error('Ticket not found in this column');
    }
    
    let removedTicket = this.#tickets.splice(index, 1);
    removedTicket.column = null;
    return removedTicket;
}

renderOnConsole() {
    console.log(`Column: ${this.#columnName}`); 
    this.#tickets.forEach(ticket => {
        ticket.renderOnConsole();
    });
}

renderHtml(columnContainer) {
    let columnDiv = document.createElement('div');
    columnDiv.className = 'grid-column'; 
    columnDiv.innerHTML = `<h2>${this.#columnName}</h2>`;
    this.#tickets.forEach(ticket => {
        ticket.renderInHTML(columnDiv);
    });
    columnContainer.appendChild(columnDiv);
}



// end of class
}
