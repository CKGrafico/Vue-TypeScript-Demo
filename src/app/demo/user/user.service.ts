import { IUserService } from './iuser.service';
import { User } from './user.model';
import { injectable } from 'inversify-props';

@injectable()
export class UserService implements IUserService {
    currentUser(): User {
        return {
            name: 'Quique'
        };
    }
}