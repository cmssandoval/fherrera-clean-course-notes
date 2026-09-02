(() => {

    function getMovieDataById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }

    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    //* Demostración sobre responsabilidad única de las funciones
    async function checkFullName(fullName: string): Promise<boolean> {
        console.log({fullName});
        return true;
    }
 
    async function createActor( fullName: string, birthdate: Date ): Promise<boolean> {
        
        // tarea asincrona para verificar nombre
        const response = await checkFullName(fullName);
        // ...

        // la verificación no es la responsabilidad
        // de esta función (createActor).

        if ( fullName === 'fernando' ) return false;
        if ( !birthdate ) return false;

        console.log('Crear actor');
        return response;
    }

    // Función compleja
    const getPaymentAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : Number => {

        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        if ( isRetired ) return 3000;
        return 4000;

        //* Ejemplo de la última condición con operador ternario
        return ( isRetired ) ? 3000 : 4000;
    }

})();