import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  fromdta: Student;
  constructor(private http: HttpClient) { }
  listStudent= [];

  //this is post method for Student
  postStudent(que: Student) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.post('http://localhost:8080/student', JSON.stringify(que),
      options)
      .subscribe(data => {
        console.log(data);
      });

  }


  putStudent(que: Student) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.put('http://localhost:8080/student', JSON.stringify(que),
      options)
      .subscribe(data => {
        console.log(data);
      });

     

  }

  deleteStudent(id: number) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }

    this.http.delete('http://localhost:8080/student/'+id,
      options)
      .subscribe(data => {
        console.log(data);
      });

  }

  studentList() {
    this.http.get('http://localhost:8080/student').subscribe((res: any[]) => {
      console.log(res);
      this.listStudent = res;
    });

  }
}


