
//* Same as interface but with abstract class
// abstract class Bird {

//     abstract fly(): void;
//     abstract eat(): void;
//     abstract run(): void;
//     abstract swim(): void;

// }

interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

//* Implementation with abstract class needs
//* extends reserved word instead of implements.
//* implements is for interfaces.
// class Tucan extends Bird {
class Tucan implements Bird {

    public fly(){}
    public eat(){}
    public run(){}

}

// class Hummingbird extends Bird {
class Hummingbird implements Bird {

    public fly(){}
    public eat(){}
    public run(){}
    
}

// class Ostrich extends Bird {
class Ostrich implements Bird {
    
    public eat(){}
    public run(){}

}

// class Penguin extends Bird {
class Penguin implements Bird {

    public eat(){}
    public run(){}
    public swim(){}
}