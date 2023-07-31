import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from '../../movie';
import { ActivatedRoute } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { selectMovie, updateMovie } from 'src/app/Store/movie.action';
import { selectCurrentMovie } from 'src/app/Store/index';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  all_movie?: Movie[];
  movie?: Movie;
  movie_details !: Movie | null;
  id?: string;
  update_active: boolean = false;
  movie_update: Movie = new Movie();
  before_update?: Movie | null = new Movie();
  movie_details$?: Observable<Movie | null>;


  constructor(private movieService: MovieService, private route: ActivatedRoute,
    private store: Store<Movie>, private router: Router,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);

    console.log("Details component", typeof (this.id), this.id);
    if (this.id) {
      this.store.dispatch(selectMovie({ id: this.id }))
      this.movie_details$ = this.store.select(selectCurrentMovie).pipe(
        tap(data => this.movie_details=data)
      );
    }
    
  }


  onSubmit_update() {
    if (this.before_update) {
      const new_id: any = this.before_update.id?.toString();
      const update: Update<Movie> = {
        id: new_id,
        changes: {
          ...this.before_update,
          ...this.movie_update
        }
      };

      console.log("Updated info", { update });
      this.store.dispatch(updateMovie({ update }));
      this.update_active = false;
      this.router.navigate(['/Movies']);
    }

  }

  update_button() {
    //Selector returns a readonly version of the object
    this.before_update = {...this.movie_details}; //Makes a copy to make it Mutable from readonly.
    
    console.log(typeof(this.before_update));
    this.update_active = true;
    console.log("update Clicked");
  }
  
  
}
