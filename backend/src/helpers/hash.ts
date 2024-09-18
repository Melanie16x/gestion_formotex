import bcryptjs from 'bcryptjs'

export class Hashing {
    private saltRounds: number;

    constructor(saltRounds: number = 10) { 
        this.saltRounds = saltRounds;
    }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcryptjs.genSalt(this.saltRounds);
        const hashedPassword = await bcryptjs.hash(password, salt);
        return hashedPassword;
    }
}