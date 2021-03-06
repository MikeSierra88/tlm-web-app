import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.html',
  styleUrls: ['./add-to-cart-modal.component.scss'],
})
export class AddToCartModalComponent {
  @Input() product!: Product;

  signatureRequested = {
    requested: false,
    toWhom: '',
  };

  constructor(public activeModal: NgbActiveModal) {}

  handleAddToCart() {
    this.activeModal.close(this.signatureRequested);
  }
}
