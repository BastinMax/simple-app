import {Injectable} from "@angular/core";
import {Article} from "./article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RawArticle} from "./rawArticle";

@Injectable({
  providedIn: "root"
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticleService(idDelete: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/articles/" + idDelete);
  }

  public postArticle(article: RawArticle): Observable<number> {
    return this.http.post<number>("http://localhost:3000/articles", article);
  }
  public getArticleById(idDetails: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + idDetails);
  }


}
