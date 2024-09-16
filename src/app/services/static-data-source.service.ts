import { Injectable, signal, Signal } from '@angular/core';
import { ProductClass } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class StaticDataSourceService {
  private data: ProductClass[] = [
   new ProductClass(1, "Product 1", "Category 1", "Product 1  (Category 1)", 100),
   new ProductClass(2, "Product 2", "Category 2", "Product 2  (Category 2)", 100),
   new ProductClass(3, "Product 3", "Category 3", "Product 3  (Category 3)", 100),
   new ProductClass(4, "Product 4", "Category 4", "Product 4  (Category 4)", 100),
   new ProductClass(5, "Product 5", "Category 5", "Product 5  (Category 5)", 100),
   new ProductClass(6, "Product 6", "Category 6", "Product 6  (Category 6)", 100),
   new ProductClass(7, "Product 7", "Category 7", "Product 7  (Category 7)", 100),
   new ProductClass(8, "Product 8", "Category 8", "Product 8  (Category 8)", 100),
   new ProductClass(9, "Product 9", "Category 9", "Product 9  (Category 9)", 100),
   new ProductClass(10, "Product 10", "Category 10", "Product 10  (Category 10)", 100),
  ];

  products: Signal<ProductClass[]> = signal<ProductClass[]>(this.data);

  constructor() {}
}
