export class MovieService {


  private movieList = [
    {id: 1 , name: 'Thor' , censored: false , year: 2011} ,
    {id: 2 , name: 'Lala Land' , censored: false , year: 2012} ,
    {id: 3 , name: 'Stargate' , censored: false , year: 1997} ,
    {id: 4 , name: 'Udta Punjab' , censored: true , year: 2017}
  ];


  public getMovieList() {
    return this.movieList.slice();
  }

  public findMovieById(id: number) {
    return    this.movieList.find(
      (movie) => {
        return movie.id === id;
      }
    );
  }

}
