import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent }      from './questions/questions.component';
import { StudentComponent }      from './student/student.component';
import { ResultComponent }      from './result/result.component';
import { ExamComponent }      from './exam/exam.component';

const routes: Routes = [
  { path: 'question', component: QuestionsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
