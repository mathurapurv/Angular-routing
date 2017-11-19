import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {RouterModule, Routes} from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {MovieService} from './movie/movie.service';
import {AuthGuardService} from './auth-guard.service';



const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'movies'  , component: MovieComponent, canActivate: [AuthGuardService] ,  children: [
    {path: ':id' , component: MovieDetailsComponent},
  ]},
  {path: 'users' , component: UsersComponent},
  {path: 'users/:id/:name' , component: UserComponent},
  {path: 'servers' , component: ServersComponent , children: [
    {path: ':id/edit' , component: EditServerComponent },
    {path: ':id' , component: ServerComponent }
  ] },
];

//  , canActivate: [AuthGuardService]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService , MovieService , AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
