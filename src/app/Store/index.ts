import { selectMovie } from 'src/app/Store/movie.action';
import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromMovie from './movie.reducer';
import { tap } from 'rxjs';


export interface State {
    movies: fromMovie.State;
}

export const reducers: ActionReducerMap<State> = {
    movies: fromMovie.movieReducer,
}


export const selectmovieState = createFeatureSelector<fromMovie.State>('movies');

export const selectAllMovies = createSelector(
    selectmovieState,
    fromMovie.selectAllMovies
);

export const selectCurrentMovie = createSelector(
    selectmovieState,
    state => state.selectedMovie
);
