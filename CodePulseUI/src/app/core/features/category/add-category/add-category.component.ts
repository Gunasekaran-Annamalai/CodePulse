import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  
  // we created this model in "add-category-request.model.ts" to use this in html form 
  //and get back the data from there using onSubmit() method

  model: AddCategoryRequest;
  // we are creating a property of type Subscription and '?' says that it can be null or subscription
  private addCategorySubscription?: Subscription;

  // we are injecting the service here
  constructor(private categoryService: CategoryService, 
    private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit() {
    // we used "Observable<void>" type as return type in "CategoryServices"
    // whenever we use Observable we need to subscribe it like below
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log("this was successful");
        this.router.navigateByUrl('/admin/categories');
      }
    });
  }

  // we are unsupscribing to make the resource stop from using the api
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}
