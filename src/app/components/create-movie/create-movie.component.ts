import { Router, RouterModule } from '@angular/router';
import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import {Store} from "@ngrx/store";
import { loadMovies,createMovie } from './../../Store/movie.action';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie:Movie=new Movie();
  id?:number;
  constructor(private movieservice:MovieService,
              private router:Router,private store:Store<Movie>
              ) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.id=this.movie.id;
    const movie = this.movie;
    this.store.dispatch(createMovie({
      movie: this.movie
    }));
    this.gettomoviedetails();
  }

  gettomoviedetails(){
    this.router.navigate(['/details',this.id]);
  }

  onSubmit(){
    this.saveMovie();
  }
}
