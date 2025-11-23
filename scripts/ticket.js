class Ticket {
    static #lastId = 0;
    #id;
    #title;
    #description;
    #column; 
    #person; 

    constructor(title, description) {
        this.#title = title;
        this.#description = description;
        this.#id = Ticket.#lastId + 1;
        this.#person;
    }

    getTicket() {
        return `${this.#title}`;    
    }

    getTicketDescription() {
        return `Description: ${this.#description}`;    
    }

    getTicketId() { 
        return this.#id;
    }

    getColumn() {
        return this.#column;
    }   

    setColumn(newColumn) {
        this.#column = newColumn;
    }

    setTicketTitle(newTitle) {
        this.#title = newTitle;
    }   
    setTicketDescription(newDescription) {
        this.#description = newDescription;
    }

    getPerson() {
        return this.#person;
    }

    setPerson(newPerson) {
        this.#person = newPerson;
    }

    renderOnConsole() {
        console.log(`${this.getTicket()} - ${this.getTicketDescription()} - Assigned to: ${this.getPerson()}`);           
}




//end of class
}