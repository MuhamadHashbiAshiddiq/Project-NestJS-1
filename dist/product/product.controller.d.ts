import { ProductCreateDto } from './models/product-create.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(page?: number): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: ProductCreateDto): Promise<any>;
}
