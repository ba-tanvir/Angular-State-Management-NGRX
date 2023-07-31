import { reducers } from './../../Store/index';
//import { getSelectedMovieId } from './../../Store/movie.reducer';
import { Router, RouterModule } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllMovies, selectCurrentMovie } from '../../Store/index';
import { deleteMovie, loadMovies, updateMovie, selectMovie } from 'src/app/Store/movie.action';
import { Update } from '@ngrx/entity';
import { DialogserviceService } from 'src/app/services/dialogservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  movie_data$?: Observable<Movie[]>;
  update_active: boolean = false;
  movie_update: Movie = new Movie();
  before_update: Movie = new Movie();
  movie_details$?: Observable<Movie | null>;


  constructor(private movieservice: MovieService,
    private store: Store<Movie>, private router: Router,
    private dialogservice: DialogserviceService) { }

  ngOnInit(): void {
    // this.movie_data$=this.movieservice.getallmovies();
    this.store.dispatch(loadMovies());
    this.movie_data$ = this.store.select(selectAllMovies).pipe(
      tap(data => console.log("Movie data", data))
    );
    console.log("Done from movie-list", this.movie_data$)
  }

  delete_button(new_id?: number) {
    this.dialogservice.openConfirmDialog()
      .afterClosed().subscribe(res => {
        console.log(res);
        if (res === true) {
          const id = new_id?.toString();
          if (id) {
            this.store.dispatch(deleteMovie({ id }));
          }
        }
      })
  }

  details_movie(movie: Movie) {
    console.log(movie);
    let id = movie.id?.toString();
    if (id) {
      console.log(id);
      this.router.navigate(['/details', id]);
      //this.store.dispatch(selectMovie({ id }))
      // //this.movie_details$=this.store.select(selectCurrentMovie).pipe(
      //   tap(data=>console.log("Details data",data))
      // );


      // this.movie_details$=this.store.select(selectCurrentMovie).pipe(
      //   tap(data=>console.log("Data",data))
      // )

    }
    
  }

}