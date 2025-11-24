class Board {
    #columns; 

    constructor(...columnNames) 
    {
        this.#columns = [];

        columnNames.forEach(columnName => {
            this.#columns.push(new Column(columnName));
            
        });
    }

      addTicket(ticket) {
        this.#columns[0].addTicket(ticket);
        return ticket;
    }

    moveTicket(ticketId, columnName) {
   
   let ticket;
   let sourceColumn;
   let targetColumn;

    for (let i = 0; i < this.#columns.length; i++) { 
      let tickets = this.#columns[i].tickets.filter(t => t.id === ticketId);
        if (tickets.length > 0) {  
            ticket = tickets[0];
            sourceColumn = this.#columns[i];
            break;
        }
    }

    if (!ticket) {
        throw new Error('Ticket not found on the board');
    }   

    targetColumn = this.#columns.find(col => col.columnName === columnName);
    if (!targetColumn) {
        throw new Error('Target column not found on the board');
    }   

    if (!targetColumn.canAddTicket()) {
        throw new Error('Cannot move ticket to target column, it is full');
    }

    if(targetColumn.canAddTicket()) {

    sourceColumn.removeTicket(ticketId);
    targetColumn.addTicket(ticket);
    return ticket;
    }


}

renderOnConsole() {
    console.log('Board State:'); 
    this.#columns.forEach(column => {
        column.renderOnConsole();
    });
}

renderInHTML(boardContainer) {
    this.#columns.forEach(column => {
        column.renderHtml(boardContainer);
    });
}



    //end of class
}
