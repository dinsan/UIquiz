import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/shared/question.service';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import {PossibleChoiceListComponent} from 'src/app/questions/question/possible-choice-list/possible-choice-list.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?: NgForm) {

    if (form != null)
      form.reset();
    this.service.fromdta =
      {
        question: null,
        id:null,
        possibleChoice:null,

      }

      this.service.questionList();
  }

  onSubmit(form: NgForm) {

    var choies = localStorage.getItem('chioce');
    var choiesobj = JSON.parse(choies);
     console.log(choiesobj);

     form.value.possibleChoice = choiesobj;
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
   

   
    localStorage.removeItem('chioce');

    let chioce = new PossibleChoiceListComponent();
    chioce.clerarPossibleChoice();
    this.resetform();
    this.resetform();
    window.location.reload();
  }

  insertRecord(form: NgForm) {
    this.service.postQuestion(form.value);
  }
  updateRecord(form: NgForm) {
   
    if (form.value.id != null){
      this.service.putQuestion(form.value); 
    }
  }

}
