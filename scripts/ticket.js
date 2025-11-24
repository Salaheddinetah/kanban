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

    get ticket() {
        return `${this.#title}`;    
    }

    get description() {
        return `Description: ${this.#description}`;    
    }

     get id() { 
        return this.#id;
    }

    set id(newId) {
        this.#id = newId;
    }   

    get column() {
        return this.#column;
    }   

    set column(newColumn) {
        this.#column = newColumn;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }  

    set description (newDescription) {
        this.#description = newDescription;
    }

    get person() {
        return this.#person;
    }

    set person(newPerson) {
        this.#person = newPerson;
    }

    renderOnConsole() {
        console.log(`${this.#id} - ${this.#description} - Assigned to: ${this.#person ? this.#person.person : 'Unassigned'}`);           
}

renderInHTML(ticketsContainer) {
    let liHtml = document.createElement('li');
    liHtml.className = 'ticket';

    liHtml.innerHTML = `
        <h3 class="ticket-id">${this.#id}</h3>
        <h3>${this.#title}</h3>
        <p>${this.#description}</p>
        <p class="ticket-person">Assigned to: ${this.#person ? this.#person.person : 'Unassigned'}</p>
    `;
    ticketsContainer.appendChild(liHtml);
    }




//end of class
}