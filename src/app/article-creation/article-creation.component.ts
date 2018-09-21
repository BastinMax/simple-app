import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../article.service";
import {Article} from "../article";
import {RawArticle} from "../rawArticle";

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html",
  styleUrls: ["./article-creation.component.css"]
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;
  @Output()
  addArticle: EventEmitter<Article> = new EventEmitter();


  constructor(private fb: FormBuilder, private articleService: ArticleService) {

    this.articleForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      author: ["", Validators.required],
    });

  }

  ngOnInit() {

  }

  createArticle(rawArticle: RawArticle) {
    this.articleService.postArticle(rawArticle)
      .subscribe(idArticleCreated => {
        this.addedArticle({ title : rawArticle.title, author: rawArticle.author, content: rawArticle.content, hashtag: rawArticle.hashtag, id: idArticleCreated});
     });
  }

  addedArticle(article: Article) {
    this.addArticle.emit(article);
  }



}
