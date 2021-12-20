import { User } from './models/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    all(): Promise<User[]>;
    pageinate(page?: number): Promise<any>;
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
