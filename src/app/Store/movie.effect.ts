import { Router } from '@angular/router';
import { deleteMovie } from 'src/app/Store/movie.action';
import { MovieService } from './../movie.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as MovieActions from './movie.action';

@Injectable()
export class MovieEffects {

constructor(private movieService: MovieService, private actions$: Actions,private router:Router) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      concatMap(() => this.movieService.getallmovies()),
      //map((movies)=>console.log(movies)),
      tap(movies=>console.log("Movies load effect",movies)),
      map(movies => MovieActions.loadedMovies({movies})),
    ),
  );

  selectMovie$ = createEffect(() =>
  this.actions$.pipe(
    ofType(MovieActions.selectMovie),
    concatMap((action) => this.movieService.getonemovie(action.id)),
    //map((movies)=>console.log(movies)),
    tap(movies=>console.log("Movies load effect",movies)),
    map(movie => MovieActions.selectMovie_chooosen({movie})),
  ),
);

    //concatMap((action)=>this.movieService.getonemovie(action.id)),
    //tap((movie)=>MovieActions.selectMovie_chooosen({movie})),
    //tap(movie=>console.log("Effect Movie",movie)),
  createMovies$=createEffect(()=>
        this.actions$.pipe(
            ofType(MovieActions.createMovie),
            concatMap((action)=>this.movieService.createmovie(action.movie)),
            //tap(() => this.router.navigateByUrl('/Movies'))
        ),
        {dispatch:false}
  );

  deleteMovie$=createEffect(()=>
    this.actions$.pipe(
        ofType(MovieActions.deleteMovie),
        concatMap((action) => this.movieService.deletemovie(action.id))
        ),
        {dispatch:false}       
  );

  updateMovie$=createEffect(()=>
    this.actions$.pipe(
        ofType(MovieActions.updateMovie),
        concatMap((action)=>this.movieService.updatemovie(action.update.id,action.update.changes)))
  ,{
    dispatch:false
  }
  );

 }