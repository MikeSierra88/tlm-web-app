import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MerchStoreService } from '../../../services/merch-store.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: Observable<Product[]>;

  constructor(private readonly merchStoreService: MerchStoreService) {
    this.products = this.merchStoreService.getProducts();
  }
}
