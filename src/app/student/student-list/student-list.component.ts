import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.studentList();
  }

  populate(element, que:  Student){
     this.service.fromdta = que;
  }

  delete(id:number){
    this.service.deleteStudent(id);
    this.service.studentList();
 }

}
