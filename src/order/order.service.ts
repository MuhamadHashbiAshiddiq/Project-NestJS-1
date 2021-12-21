import { Order } from './order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends AbstractService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>
  ) {
    super(orderRepository);
  }
}
