import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  selectedMovie: {id: number , name: string , censored: boolean , year: number} ;

  constructor(private activatedRoutes: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {

    this.activatedRoutes.params.subscribe(
      (params: Params) => {
        if ( params['id']) {
          const selectedMovieId = parseInt(params['id'], 10 ) ;
          this.selectedMovie =   this.movieService.findMovieById(selectedMovieId) ;
        }
      }
    ) ;


  }

}
