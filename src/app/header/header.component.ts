import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number =0;
  constructor(private cartservice:CartserviceService){}

    ngOnInit(): void {
   this.cartservice.getProducts().subscribe(res=>{
    this.totalItem=res.length;
   })
  }

}
