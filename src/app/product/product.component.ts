import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [{ name: 'Product 1', price: 100, id: 1 }, { name: 'Product 2', price: 200, id: 2 }, { name: 'Product 3', price: 300, id: 3 }];
  constructor() { }

  ngOnInit(): void {
  }
  openDetails(event: any) {
    console.log(event);
  }
}
