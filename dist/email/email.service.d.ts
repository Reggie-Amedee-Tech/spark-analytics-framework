import { MailerService } from '@nestjs-modules/mailer';
import { User } from './../user/user.entity';
export declare class EmailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserWelcome(user: User, token: string): Promise<void>;
}
