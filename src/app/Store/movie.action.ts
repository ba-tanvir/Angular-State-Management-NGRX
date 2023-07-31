import {createAction,props} from "@ngrx/store";
import {Update,EntityMap,EntityMapOne,Predicate} from "@ngrx/entity";
import {Movie} from '../movie';

export const loadMovies=createAction(
    "[Movie/Api] Load Movies",
)

export const loadedMovies=createAction(
    "[Movie/Api] Movies Loaded",
    props<{movies:Movie[]}>()
)

export const createMovie=createAction(
    "[Movie/Api] Create Movies",
    props<{movie:Movie}>()
)

export const deleteMovie=createAction(
    "[Movie/Api] Delete Movies",
    props<{id:string}>()

)

export const updateMovie=createAction(
    "[Movie/Api] Update movie",
    props<{update:Update<Movie>}>()
)

export const selectMovie=createAction(
    "[Movie/Api] select movie id",
    props<{id:string}>()
)

export const selectMovie_chooosen=createAction(
    "[Movie/Api] selected movie",
    props<{movie:Movie}>()
)

export const nullSelectedMovie=createAction(
    "[Movie/Api] Null Selected Movie",
)