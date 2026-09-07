class User {
    // 1. Static properties.
    public static usersCounter: number = 0;

    // 2. Private properties.
    private id: string;
    private role: string;

    // 3. Public properties.
    public realName: string;
    public userName: string;
    public email: string;

    // 4. Static constructors.
    static createNormalizedUser( realName: string ){
        return new User(realName, realName, `${realName}@gmail.com`)
    }

    // 5. Constructor
    constructor( realName: string, userName: string, email: string){
        this.id = crypto.randomUUID();
        this.role = 'admin';

        this.realName = realName;
        this.userName = userName;
        this.email = email;

        User.usersCounter++;
    }

    // 6. Static methods
    // 7. Private methods
    // 8. Public methods?
    // 9. Instance methods from most to less important.
    // 10. Getters and Setters at the end.

    setRole(): string {
        const roles = {
            user: 'user',
            admin: 'admin',
        };

        if ( this.realName !== 'Carlos' ) return roles.user;
        
        return roles.admin;
    }

    getId(): string {
        return this.id;
    }
}