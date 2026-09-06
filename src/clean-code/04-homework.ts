(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);

    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores

    // Extra en typescript para declarar valores limitados estrictos.
    type FruitColor = 'red'|'yellow'|'purple';

    function getFruitsByColor( color: FruitColor ): string[] {

        //* Mi solución:
        const redFruits     = ['manzana','fresa'];
        const yellowFruits  = ['piña','banana'];
        const purpleFruits  = ['moras','uvas'];

        if ( color === 'red' )      return redFruits;
        if ( color === 'yellow' )   return yellowFruits;
        if ( color === 'purple' )   return purpleFruits;

        throw Error('the color must be: red, yellow, purple');


        //* Solución de Fernando:
        // const fruitByColor = {
        //     red:    ['manzana','fresa'],
        //     yellow: ['piña','banana'],
        //     purple: ['moras','uvas'],
        // }

        // if ( !Object.keys( fruitByColor ).includes(color) ) {
        //     throw Error('the color must be: red, yellow, purple');
        // }

        // return fruitByColor[color];
    }

    // Simplificar esta función
    const   isFirstStepWorking  = true,
            isSecondStepWorking = true,
            isThirdStepWorking  = true,
            isFourthStepWorking = true;

    function workingSteps() {
        
        if( !isFirstStepWorking )   return 'First step broken.';
        if( !isSecondStepWorking )  return 'Second step broken.';
        if( !isThirdStepWorking )   return 'Third step broken.';
        if( !isFourthStepWorking )  return 'Fourth step broken.'

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();