import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    AddBlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // this is what we imported -> it is used to work with forms in Angular
    // form submition won't work without the above import "FormsModule"
    HttpClientModule,
    // Markdown is to live preview markdown text as html in the web page
    // this is used in add blog post compenent
    // MarkdownModule.forRoot() -> this is default import but, if you get sanitization warning then use the below code
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
