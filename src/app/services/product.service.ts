import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any[] = [];
  listProduct: Array<Product> = [];
  dataProducts: Array<Product> = [];
  items: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ) {}

  getAll() {
    return this.items = this.db.collection('productos').valueChanges();
  }

  getByFilter(key) {
    return this.db.collection('productos', ref => ref.where('title', '==', key)).get();
  }
  
}
