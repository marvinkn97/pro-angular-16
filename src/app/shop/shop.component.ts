import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
  categories = signal<any[]>([]);
  CATEGORY_URL = 'http://localhost:8080/api/v1/categories';
  private subscriptions: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getAllCategories() {
    this.subscriptions.add(
      this.apiService.getAll(this.CATEGORY_URL).subscribe({
        next: (response) => {
          console.log(response);
          this.categories.set(response);
        },
        error: (err) => console.error(err),
      })
    );
  }
}
