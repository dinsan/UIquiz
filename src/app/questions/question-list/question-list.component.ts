import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/question.service';
import { Question } from 'src/app/shared/question.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.service.questionList();
  }

  populate(element, que:Question){
     this.service.fromdta = que;
  }

  delete(id:number){
    this.service.deleteQuestion(id);
    this.service.questionList();
 }

}
