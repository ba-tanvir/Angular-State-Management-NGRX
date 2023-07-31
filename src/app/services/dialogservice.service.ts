import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../components/movie-dialog/movie-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(MovieDialogComponent,{
      width:'400px',
      disableClose:true
    });
  }
}
