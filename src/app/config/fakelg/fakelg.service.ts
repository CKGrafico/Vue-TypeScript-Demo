import { IFakelgService } from './ifakelg.service';
import { User } from '~/demo/user';
import { injectable } from 'inversify-props';

@injectable()
export class FakelgService implements IFakelgService {
    push(user: User, message: string): void {
        // Super complex fetch to api...
        console.log(`User: ${user.name}, Message: ${message}`);
    }
}