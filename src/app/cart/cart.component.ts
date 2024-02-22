import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public product : any = [];
  public grandTotal !: number ;
  // public tax =0;
  constructor(private cartservice : CartserviceService){}

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.product=res;
      // this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartservice.removeCartItem(item);
  }
  emptycart(){
    this.cartservice.removeAllCart();
  }

}
