import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-possible-choice-list',
  templateUrl: './possible-choice-list.component.html',
  styleUrls: ['./possible-choice-list.component.css']
})
export class PossibleChoiceListComponent implements OnInit {

  possibleChoice :any [] = [];
  constructor() { }


  
  addPossibleChoice(value) {
    this.possibleChoice.push(value);
    localStorage.setItem('chioce', JSON.stringify(this.possibleChoice));
  }

  clerarPossibleChoice(){
    this.possibleChoice =  [];
  }

  ngOnInit() {
  }

}
