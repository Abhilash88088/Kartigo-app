import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductservicesService } from '../productservices.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  addtocart(item :any){
    this.cartservice.addtoCart(item);
  }
     public  productList: any ;
  constructor(private data:ProductservicesService, private cartservice:CartserviceService){
    
  }
  ngOnInit(): void {
    this.data.getProduct().subscribe((result: any)=>{this.productList=result});

    this.productList.forEach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price});
      
    });
    }
      
    };
  
  


  
