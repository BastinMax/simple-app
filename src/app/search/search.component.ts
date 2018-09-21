import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Article} from "../article";
import {ArticleService} from "../article.service";

type Articles = Article[];

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {


  articleForm: FormGroup;
  articleList: Articles;
  @Output()
  searchEvent: EventEmitter<Articles> = new EventEmitter();


  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      search: [""],
    });
  }

  ngOnInit() {

  }

  searchBar(searchText: {search: string}) {
    this.articleService.search(searchText.search)
      .subscribe(data => this.searchEvent.emit(data));
  }

}
