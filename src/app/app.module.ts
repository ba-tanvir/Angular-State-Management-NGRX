import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import {reducers} from './Store';
import { MovieEffects } from './Store/movie.effect';
import { EffectsModule } from '@ngrx/effects';
import { MovieService } from './movie.service';
import { DetailsComponent } from './components/details/details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from "@angular/material/dialog";
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CreateMovieComponent,
    DetailsComponent,
    MovieDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MovieEffects]),
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [MovieService],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
