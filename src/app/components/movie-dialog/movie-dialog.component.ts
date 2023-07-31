import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from 'src/app/movie';


@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<MovieDialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
    console.log("Delete clicked");
  }
  delete(){
    
  }

}
// export function openEditMovieDialog(dialog:MatDialog){
//   const config=new MatDialogConfig();
  
//   config.disableClose=true;
//   config.autoFocus=true;

//   const dialogRef=dialog.open(MovieDialogComponent,config);
//   return dialogRef.afterClosed();

  
// }