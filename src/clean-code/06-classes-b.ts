(() =>{

    type Gender = 'M'|'F';

    interface PersonProperties {
        name: string;
        gender: Gender;
        birthDate: Date;
    };

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate }: PersonProperties ) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    };

    interface UserProperties {
        email: string;
        role: string;
        lastAccess: Date;
        name: string;
        gender: Gender;
        birthDate: Date;
    };

    class User extends Person {
        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({email, role, lastAccess, name, gender, birthDate}: UserProperties ) {
            super({name, gender, birthDate})
            this.email = email;
            this.role = role;
            this.lastAccess = lastAccess;
        }
        
        checkCredentials(){
            return true;
        }      
    };

    interface UserSettingsProperties {
        email: string;
        role: string;
        lastAccess: Date;
        name: string;
        gender: Gender;
        birthDate: Date;
        workingDirectory: string;
        lastOpenFolder: string;      
    };

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder, email, role, lastAccess, name, gender, birthDate }: UserSettingsProperties) {
            super({ email, role, lastAccess, name, gender, birthDate })
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    };

    const newUserSettings = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        email: 'crlos@gmail...',
        role: 'Admin',
        lastAccess: new Date('2026-09-06'),
        name: 'Carlos',
        gender: 'F',
        birthDate: new Date('1994-09-04'),
    });
    
    console.log({
        newUserSettings,
        areCredentialsValid: newUserSettings.checkCredentials()
    });
    

})();