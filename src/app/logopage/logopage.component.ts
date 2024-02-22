import { Component } from '@angular/core';

@Component({
  selector: 'app-logopage',
  templateUrl: './logopage.component.html',
  styleUrls: ['./logopage.component.css']
})
export class LogopageComponent {
 showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  buyNow() {
    // Handle buy now action here
  }
}



// function digitNum(num: number): number {     ---used to add number into single digit---
//   if (num < 10) {
//     return num;
// }
//   let numStr: string = num.toString();
//   let sum: number =0;

//   for (let digit of numStr) {
//     sum += parseInt(digit);
// }
//   return digitNum(sum);
// }
// console.log(digitNum(12345));