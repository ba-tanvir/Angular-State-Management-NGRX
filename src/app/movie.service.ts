import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url="http://localhost:8900/movie/get_all";
  private url2="http://localhost:8900/movie/create";
  private url3="http://localhost:8900/movie/delete/";
  private url4="http://localhost:8900/movie/update/";
  private url5="http://localhost:8900/movie/get_one/";
  
  constructor(private http:HttpClient) { }

  getallmovies(): Observable<Movie[]>{
    console.log( this.http.get<Movie[]>(`${this.url}`));
    return this.http.get<Movie[]>(`${this.url}`);
  }

  getonemovie(id:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.url5}`+id);
  }

  createmovie(movie:Movie): Observable<Object>{
    return this.http.post(`${this.url2}`,movie);
  }

  deletemovie(id:string):Observable<any>{
    return this.http.delete(`${this.url3}` + id);
  }

  updatemovie(courseId: string |number, changes: Partial<Movie>): Observable<any> {
    return this.http.put(`${this.url4}`+courseId , changes);
  }




}
