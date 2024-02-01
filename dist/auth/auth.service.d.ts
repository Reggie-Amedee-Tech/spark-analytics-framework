import { EmailService } from './../email/email.service';
import { User } from './../user/user.entity';
export declare class AuthService {
    private emailService;
    constructor(emailService: EmailService);
    signUp(user: User): Promise<void>;
}
