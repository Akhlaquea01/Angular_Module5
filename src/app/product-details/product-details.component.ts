import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }
  products = [{ name: 'Product 1', price: 100, id: 1,desc:"hi" }, { name: 'Product 2', price: 200, id: 2 ,desc:"hi"}, { name: 'Product 3', price: 300, id: 3,desc:"hi" }];
  selectedProduct: any
  productId: undefined
  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params.id;
    // this._activatedRoute.paramMap.subscribe(params => {
    //   console.log(this.productId);
    //   this.productId=params.get('id');
    // })
    this.selectedProduct = this.products.find(o => o.id == this.productId);
    this.products=[]
    this.products.push(this.selectedProduct);
    console.log(this.products);
  }

}
