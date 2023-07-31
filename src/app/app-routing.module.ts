import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { DetailsComponent } from './components/details/details.component';

const routes:Routes=[
  {path: "Movies", component:MovieComponent},
  {path:"create_movie",component:CreateMovieComponent},
  {path:'',redirectTo:'Movies',pathMatch:'full'},
  {path:"details/:id",component:DetailsComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
