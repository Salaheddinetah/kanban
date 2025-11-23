let board = new Board('To Do', 'In Progress', 'Done');

let persons = [
    new Person('Alice',''),
    new Person('Bob',''),
    new Person('Charlie','')
];

for (let i = 1; i <= 15; i++) {
    let ticket = new Ticket(`Ticket id: # ${i}`);
    ticket.setTicketDescription(`this ticket was automatically generated`);

    board.addTicket(ticket);

   

    let randomColumnIndex = Math.floor(Math.random() * 3);
    
    switch (randomColumnIndex) {
        case 0:
            board.moveTicket(ticket.id, 'To Do');
            break;
        case 1:
            board.moveTicket(ticket.id, 'In Progress');
            break;
        case 2:
            board.moveTicket(ticket.id, 'Done');
            break;
    }

    let randomPersonIndex = Math.floor(Math.random() * persons.length);
    ticket.setPerson(persons[randomPersonIndex].getPerson()); 
}

board.renderOnConsole();