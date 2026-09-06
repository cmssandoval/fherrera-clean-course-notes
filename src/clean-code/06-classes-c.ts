(() =>{

    // Aplying the single responsibility principle
    // Priorize composition aganist inheritance!

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

        constructor({
            name,
            gender,
            birthDate
        }: PersonProperties ) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    };

    interface UserProperties {
        email: string;
        role: string;
        lastAccess: Date;
    };

    class User {
        public email: string;
        public role: string;
        private lastAccess: Date;

        constructor({
            email,
            role,
            lastAccess
        }: UserProperties ) {

            this.email = email;
            this.role = role;
            this.lastAccess = lastAccess;

        }
        
        checkCredentials(){
            return true;
        }      
    };

    interface SettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;      
    };

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProperties) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        // Compostition class.

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,
            gender,
            birthDate,
            email,
            role,
            lastAccess,
            workingDirectory,
            lastOpenFolder
        }: UserSettingsProperties ) {

            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ email, role, lastAccess });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });

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
        areCredentialsValid: newUserSettings.user.checkCredentials(),
    });

})();