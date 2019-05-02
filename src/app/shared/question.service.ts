import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  fromdta: Question;
  constructor(private http: HttpClient) { }
  listQuestion = [];

  //this is post method for questioins
  postQuestion(que: Question) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.post('http://localhost:8080/question', JSON.stringify(que),
      options)
      .subscribe(data => {
        console.log(data);
      });

  }


  putQuestion(que: Question) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.put('http://localhost:8080/question', JSON.stringify(que),
      options)
      .subscribe(data => {
        console.log(data);
      });

     

  }

  deleteQuestion(id: number) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.delete('http://localhost:8080/question/'+id,
      options)
      .subscribe(data => {
        console.log(data);
      });

  }

  questionList() {
    this.http.get('http://localhost:8080/question').subscribe((res: any[]) => {
      console.log(res);
      this.listQuestion = res;
    });

  }
}


