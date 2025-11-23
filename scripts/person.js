class Person {
  
    #firstName;
    #lastName;
    static #lastId = 1000;
    #id;


    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName; 
        this.#id = Person.#lastId + 1;
    }

    //Person Getter 

    getPerson() {
        return `User: ${this.#firstName} ${this.#lastName} with UserId : ${this.#id}`;
    }


  


    //End of class
    }