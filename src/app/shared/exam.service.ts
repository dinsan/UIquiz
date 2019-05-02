import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  fromdta: Question;
  constructor(private http: HttpClient) { }
  listQuestion= [];


  questionList() {
    this.http.get('http://localhost:8080/question').subscribe((res: any[]) => {
      console.log(res);
      this.listQuestion = res;
    });

  }
}
