(() =>{

    type Gender = 'M'|'F';

    class Person {

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date
        ) {}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super(name, gender, birthDate)
        }
        
        checkCredentials(){
            return true;
        }      
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super( email, role, lastAccess, name, gender, birthDate )
        }
    }

    const newUserSettings = new UserSettings(
        '/user/home',
        '/home',
        'crlos@gmail...',
        'Admin',
        new Date('2026-09-06'),
        'Carlos',
        'F',
        new Date('1994-09-04'),
    );
    console.log({
        newUserSettings,
        areCredentialsValid: newUserSettings.checkCredentials()
    });
    

})();