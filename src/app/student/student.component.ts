import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?: NgForm) {

    if (form != null)
      form.reset();
    this.service.fromdta =
      {
        name: null,
        id:null,
        age:null,
        emailId:null

      }

      this.service.studentList();
  }

  onSubmit(form: NgForm) {

    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
   
    this.resetform();
    this.resetform();
    window.location.reload();
  }

  insertRecord(form: NgForm) {
    this.service.postStudent(form.value);
  }
  updateRecord(form: NgForm) {
   
    if (form.value.id != null){
      this.service.putStudent(form.value); 
    }
  }

}
