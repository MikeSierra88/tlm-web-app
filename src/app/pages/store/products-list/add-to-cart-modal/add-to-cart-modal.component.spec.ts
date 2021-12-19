import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartModalComponent } from './add-to-cart-modal.component';

describe('ModalDialogComponent', () => {
  let component: AddToCartModalComponent;
  let fixture: ComponentFixture<AddToCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});