import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ArticleService} from "../article.service";
import {Article} from "../article";


@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {

  public articleList: Article[];
  @Output()
  articleAd: EventEmitter<Article> = new EventEmitter();


  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(data => this.articleList = data);

  }

  public deleteArticle(article: Article): void {
    this.articleService.deleteArticleService(article.id)
      .subscribe(() => {
        this.articleList = this.articleList.filter(art => art.id !== article.id);
      });
  }



}
