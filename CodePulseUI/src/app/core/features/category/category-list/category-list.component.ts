import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
// categories?: Category[]; -> this is for observable method

  // '$' naming convention specifies this is an Observable array
  categories$?: Observable<Category[]>;// -> this is for the Async pipe method

  constructor(private categoryService: CategoryService) {

  }
  ngOnInit(): void {

    // !important Note: When we use a form to display or change data we must use Subscription method
    // !important Note: When we just need to display the data we may use async pipe method

    // the following is to getAllCategories using Async pipe method
    // after 
    this.categories$ = this.categoryService.getAllCategories();// -> we can do the next step in the html file

    // the below code is to getAllCategories using subcription method
    // in which we will subscribe to an Observable
    // this.categoryService.getAllCategories()
    // .subscribe({
    //   next: (response) => {
    //     this.categories = response;
    //   }
    // })
  }
}
