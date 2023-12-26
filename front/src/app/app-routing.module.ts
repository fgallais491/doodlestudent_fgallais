import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreatePollComponentComponent } from './create-poll-component/create-poll-component.component';
import { AnswerPollComponent } from './answer-poll/answer-poll.component';
import { AdminPollComponent } from './admin-poll/admin-poll.component';
import { BoredComponentComponent } from './bored-component/bored-component.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  { path: 'bored',
    component: BoredComponentComponent
  },
  {
    path: 'create',
    component: CreatePollComponentComponent
  },
  {
    path: 'update/:slugadminid',
    component: CreatePollComponentComponent
  },
  {
    path: 'answer/:slugid',
    component: AnswerPollComponent
  },
  {
    path: 'admin/:slugadminid',
    component: AdminPollComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
