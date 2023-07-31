//import { selectAllMovies} from './index';
import { tap } from 'rxjs/operators';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from '../movie';
import * as MovieActions from './movie.action';

export interface State extends EntityState<Movie>{
    //selectedUserId: string|number|null;
    selectedMovie:Movie|null,
}

export const adapter:EntityAdapter<Movie>=createEntityAdapter<Movie>();

export let initialState:State=adapter.getInitialState({
    selectedMovie:null
})

initialState=adapter.addMany([
  //Comes to db, nothing needed here.
],initialState)

export const movieReducer=createReducer(
    initialState,
    on(MovieActions.loadedMovies, (state, action) => {
        console.log("Loaded Movie",action.movies);
        return adapter.setAll(                          //addAll adds to the end of the list
          action.movies,                                //setAll adds and replaces current list
          {...state}
        );
      }),
      on(MovieActions.createMovie,(state,action)=>{
        return adapter.addOne(action.movie,state);
      }),
      on(MovieActions.deleteMovie, (state, action ) => {
        return adapter.removeOne(action.id, state);
      }),
      on(MovieActions.updateMovie,(state,action)=>{
        return adapter.updateOne(action.update,state)
      }),
      on(MovieActions.selectMovie_chooosen, (state, action) => {
        console.log("Action.movie",action.movie)
         return {...state,selectedMovie:action.movie}
      }),
    );


// export const getSelectedMovieId = (state: State) => state.selectedMovieId;

const {selectAll,selectEntities}=adapter.getSelectors();

export const selectAllMovies=selectAll;
//export const selectUserEntities = selectUserEntities;

export const selectAllEntities=selectEntities;

// export const selectCurrentMovie=(state:State)=>state.selectedMovie;