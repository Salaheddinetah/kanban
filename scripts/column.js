class Column {
    #columnName;
    #tickets;

    constructor(columnName, ticket) {
        this.#columnName = columnName;
        this.#tickets = [];
    }

    get columnName() {
        return this.#columnName;    
    }
    get ticket() {
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
       let ticketIndex = this.#tickets.findIndex(ticket => ticket.id === ticketId);
    }

    moveTicketTo(ticket, targetColumn) {
    }


// end of class
}
