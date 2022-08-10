import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  @Input() item: any;
  @Output() isVisibleModal = new EventEmitter();
  // @Output()  = new EventEmitter<any>();

  constructor(
    private msg: NzMessageService,
    public productService: ProductService
  ) { }

  ngOnInit() {
  }
  edit(product: Product): void {
    this.productService.isVisibleModal = true;
    this.productService.productSelected = product;
  }

}
