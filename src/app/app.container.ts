import { container } from 'inversify-props';
import { UserService, IUserService } from '~/demo/user';

export function containerBuilder() {
    container.addSingleton<IUserService>(UserService);
}