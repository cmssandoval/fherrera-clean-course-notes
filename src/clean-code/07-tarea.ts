(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProperties {
        value: string;
        placeholder: string;
        id: string;
        type: HtmlType;
    }

    class InputElement {
        
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;
        
        //* Personal Solution (expecting props as a destructured object
        //* at constructor parameters)
        constructor({
            value,
            placeholder,
            id,
            type
        }: InputElementProperties){
            this.htmlElement = new HtmlElement( id, type);
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }

        //* Ideal solution to avoid modifications on the class's constructor
        // constructor(value: string, placeholder: string, id: string, type: HtmlType) {
        //     this.htmlElement = new HtmlElement( id, type);
        //     this.inputAttributes = new InputAttributes(value, placeholder);
        //     this.inputEvents = new InputEvents();
        // }
    }

    //? Idea para la nueva clase InputElement

    //* Personal Solution (passing props as an object at class call arguments)
    const nameField = new InputElement({
        value:'Fernando',
        placeholder:'Enter first name',
        id:'txtName',
        type: 'input',
    });

    //* Ideal solution to avoid modifications on the class's call
    // const nameField = new InputElement('Fernando', 'Enter first name', 'txtName', 'input' );

    console.log({ nameField, isActive: nameField.inputEvents.isActive() });

})();