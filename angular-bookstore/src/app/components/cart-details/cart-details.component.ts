import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartDetails();
  }

  cartDetails() {
    this.cartItems = this._cartService.cartItems;

    // subscribe to the events
    this._cartService.totalPrice.subscribe(
      (data) => this.totalPrice = data
    );
    this._cartService.totalQuantity.subscribe(
      (data) => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }

  // Increament quantity
  increamentQuantity(cartItem: CartItem) {
   // console.log('Increament quantity', cartItem);
    this._cartService.addToCart(cartItem);
  }

  // Decreament quantity
  decreamentQuantity(cartItem: CartItem){
    //console.log('Decreament quantity', cartItem);
    this._cartService.decreamentQuantity(cartItem);
  }

  // remove item
  remove(cartItem: CartItem){
    // console.log('remove item', cartItem);
    this._cartService.remove(cartItem);
  }

}
