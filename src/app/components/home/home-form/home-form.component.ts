import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  validateForm!: FormGroup;
  data: any[] = [];
  isLoadingOne: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.createForm();
    this.loadProducts();
  }

  createForm(): void {
    this.validateForm = this.fb.group({
      itemProduct: [null, [Validators.required]],
    });
  }

  loadProducts(): void {
    this.productService.getAll().subscribe((res: any) => {
      this.productService.dataProducts = res;
    })
  }

  submitForm(): void {
    this.isLoadingOne = true;
    if(!this.validateForm.controls.itemProduct.value) {
      this.productService.listProduct = [];
      this.isLoadingOne = false;
      return;
    }
    let dataFilter = this.productService.dataProducts.filter((product: Product) => {
     if(
        product.title.toUpperCase().includes(this.validateForm.controls.itemProduct.value.toUpperCase()) ||
        product.id.toString().toUpperCase().includes(this.validateForm.controls.itemProduct.value.toUpperCase())
      ) {
        return product;
     }
    })

    this.productService.listProduct = dataFilter;
    this.isLoadingOne = false;

  }

  changeForm(): void {

  }
}
