import { Order } from './order.entity';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
export declare class OrderService extends AbstractService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
}
