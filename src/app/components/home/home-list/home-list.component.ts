import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  visibleModal: boolean;
  item: Product = new Product();

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    
  }

  handleModal(res: any) {
    console.log(res);
    this.visibleModal = true;
    this.item = res.product;

  }


  

}
