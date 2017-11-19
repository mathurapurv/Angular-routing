import { Component, OnInit } from '@angular/core';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  movieList: {id: number , name: string , censored: boolean , year: number}[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieList = this.movieService.getMovieList();
  }

}
