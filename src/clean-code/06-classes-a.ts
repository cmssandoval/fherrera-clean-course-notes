(() =>{

    type Gender = 'M'|'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date
        ) {
            // this.name = name
            // this.gender = gender
            // this.birthDate = birthDate
        }
    }

    const newPerson = new Person('Carlos', 'F', new Date('1994-09-04'));
    console.log(newPerson);

})();