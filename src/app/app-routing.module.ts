import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TweetsComponent } from './tweets/tweets.component';


const routes: Routes = [{path:'',component:LoginComponent},{path:'tweets',component:TweetsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
