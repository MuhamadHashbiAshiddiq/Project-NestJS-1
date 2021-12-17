import { User } from './models/user.entity';
import { UserService } from './user.service';
import { UserCreateDto } from './models/user-create.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    all(): Promise<User[]>;
    create(body: UserCreateDto): Promise<User>;
    get(id: number): Promise<User>;
}
