import { User } from './user.model';

export interface IUserService {
    currentUser(): User;
}