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

    getColumn() {
        return this.#column;
    }   

    setColumn(newColumn) {
        this.#column = newColumn;
    }

    getPerson() {
        return this.#person;
    }   

    setPerson(newPerson) {
        this.#person = newPerson;
    }

    setTicketTitle(newTitle) {
        this.#title = newTitle;
    }   
    setTicketDescription(newDescription) {
        this.#description = newDescription;
    }

    renderOnConsole() {
        console.log(`Ticket Info: ${this.getTicket()} - ${this.getTicketDescription()}`);
        if (this.#person) { 
            console.log(`Assigned to: ${this.#person.getPerson()}`);
        } else {
            console.log(`Assigned to: No one`);
        }   
    }




//end of class
}