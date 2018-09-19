import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { ArticlesComponent } from "./articles/articles.component";
import {ArticleService} from "./article.service";
import { ArticleCreationComponent } from "./article-creation/article-creation.component";


const appRoutes: Routes = [
  {path: "create", component: ArticleCreationComponent},
  {path: "articles", component: ArticlesComponent},
  {path: "", component: ArticlesComponent},
  {path: "article/:id", component: ArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
