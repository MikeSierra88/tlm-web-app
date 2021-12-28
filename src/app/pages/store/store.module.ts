import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {SharedComponentsModule} from '../../components/components.shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { MerchPromoComponent } from './merch-promo/merch-promo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductsListItemComponent } from './products-list/products-list-item/products-list-item.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { AddToCartModalComponent } from './products-list/add-to-cart-modal/add-to-cart-modal.component';
import {FormsModule} from '@angular/forms';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderErrorComponent } from './order-error/order-error.component';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    StoreComponent,
    ProductsListComponent,
    OrderFormComponent,
    MerchPromoComponent,
    ProductsListItemComponent,
    CartDisplayComponent,
    AddToCartModalComponent,
    OrderConfirmationComponent,
    OrderSuccessComponent,
    OrderErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FontAwesomeModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbPopoverModule,
    RouterModule,
  ],
})
export class StoreModule { }
