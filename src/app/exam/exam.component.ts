import { Component, OnInit } from '@angular/core';
import { exam } from './exam';
import { Question } from '../shared/question.model';
import { ExamService } from '../shared/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

 

  constructor(private service: ExamService) { }


  ngOnInit() {
    this.service.questionList();
  }

  populate(element, que:Question){
     this.service.fromdta = que;
     console.log(this.service.fromdta);
  }

  selectAction(id: string) {
    console.log(id);
  }

  log() { console.log(1); }


}
