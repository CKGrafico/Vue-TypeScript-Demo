import { User } from '~/demo/user';

export interface IFakelgService {
    push(user: User, message: string): void;
}