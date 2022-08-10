import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() product: Product;
  amount = 0;

  constructor(
    public productService: ProductService,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
    
  }

  handleOk(): void {
    if (this.amount != 0){
      this.msg.success('Se ha agregado este producto!');
      this.productService.listaProductosAgregados.unshift(this.productService.productSelected);
      this.productService.isVisibleModal = false;
    }

  }

  handleCancel(): void {
    this.productService.isVisibleModal = false;
  }

  showModal(): void {
  }

}
