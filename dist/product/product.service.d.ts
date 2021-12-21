import { Product } from './models/product.entity';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
export declare class ProductService extends AbstractService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
}
