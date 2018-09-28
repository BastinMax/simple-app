import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Article} from "../article";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { switchMap} from "rxjs/operators";
import {ArticleService} from "../article.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {

  @Input()article: Article;
  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();
  articles$: Observable<Article>;

  search = new EventEmitter();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService
  ) {
  }



  delete() {
    this.deletedArticle.emit(this.article);
  }


  public title(): string {
    return this.article.title;
  }

  public  author(): string {
    return this.article.author;
  }

  public content(): string {
    return this.article.content;
  }

  public id(): number {
    return this.article.id;
  }



  ngOnInit() {
    if (!this.article) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          return this.service.getArticleById(parseInt(params.get("id")));
        })
      ).subscribe(article => this.article = article);
    }
  }
}
