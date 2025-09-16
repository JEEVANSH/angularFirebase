import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FireBaseService } from './fire-base.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  reviews: any[] = [];

  constructor(private firebaseService: FireBaseService) { }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit fired'); 
    this.firebaseService.getItems().subscribe((data) => {
      this.reviews = data;
    });
  }

}
