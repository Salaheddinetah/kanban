class Ticket {
    static #lastId = 0;
    #id;
    #title;
    #description;
    constructor(title, description) {
        this.#title = title;
        this.#description = description;
        this.#id = Ticket.#lastId + 1;
    }

    getTicket() {
        return `Ticket: ${this.#title} with TicketId : ${this.#id}`;    
    }

    getTicketDescription() {
        return `Description: ${this.#description}`;    
    }

    getTicketId() { 
        return this.#id;
    }

    setTicketTitle(newTitle) {
        this.#title = newTitle;
    }   
    setTicketDescription(newDescription) {
        this.#description = newDescription;
    }

    renderOnConsole() {
        console.log(`Ticket Info: ${this.getTicket()} - ${this.getTicketDescription()}`);
    }




//end of class
}