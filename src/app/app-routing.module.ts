import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AddJobComponent } from './components/add-job/add-job.component';

const routes: Routes = [
  {path: '', component:AddPersonComponent},
  {path: 'addJob', component:AddJobComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
