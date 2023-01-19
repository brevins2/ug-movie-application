import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { MovieComponent } from './security/Movie/movie.component';
import { RegisterproducerComponent } from './security/registerproducer/registerproducer.component';
import { HomeComponent } from './developer/home/home.component';
import { SubscriptionComponent } from './security/subscription/subscription.component';

import { BrowseComponent } from './browse/browse.component';
import { AddLibraryComponent } from './developer/Add-library/Add-library.component';

import { AllComponent } from './categories/all/all.component';
import { MoviesComponent } from './categories/movies/movies.component';
import { ProducerComponent } from './categories/producer/producer.component';
import { PlayMovieComponent } from './categories/play-movie/play-movie.component';

import { DownloadsComponent } from './categories/views/downloads/downloads.component';
import { FavouretsComponent } from './categories/views/favourets/favourets.component';
import { RecentComponent } from './categories/views/recent/recent.component';
import { MainsComponent } from './categories/views/mains/mains.component';

import { MainComponent } from './developer/main/main.component';
import { MoviesbackComponent } from './developer/moviesback/moviesback.component';
import { CustomersComponent } from './developer/customers/customers.component';
import { ProducersComponent } from './developer/producers/producers.component';
import { MessageComponent } from './developer/message/message.component';

import { EditMovieComponent } from './developer/edit-movie/edit-movie.component';
import { EditCustomerComponent } from './developer/edit-customer/edit-customer.component';
import { EditProducerComponent } from './developer/edit-producer/edit-producer.component';
import { DeleteMessageComponent } from './developer/delete-message/delete-message.component';
import { EditLibraryComponent } from './developer/edit-library/edit-library.component';

import { SeriesComponent } from './categories/series/series.component';
import { MovieOnlyComponent } from './categories/movie-only/movie-only.component';
import { PlaySerieComponent } from './categories/play-serie/play-serie.component';

const routes: Routes = [
  { path:'', redirectTo: 'cinema/browse', pathMatch: 'full' },
  { path:'cinema/browse', component: BrowseComponent },

  { path:'login', component: LoginComponent },
  { path:'register/movie', component: MovieComponent },
  { path:'register/producer', component: RegisterproducerComponent },

  { path:'subscribe', component: SubscriptionComponent },

  { path:'cinema/all', component: AllComponent, children: [
    { path:'', redirectTo: 'all', pathMatch: 'full' },
    { path:'all', component: MoviesComponent },
    { path:'series', component: SeriesComponent },
    { path:'movies', component: MovieOnlyComponent }
  ]},

  { path:'cinema/all/views', component: MainsComponent, children: [
    { path:'', redirectTo: 'downloads', pathMatch: 'full' },
    { path:'producers/:id', component: ProducerComponent }
  ]},

  { path: 'developer/edits', component: MainComponent, children: [
    { path: '', redirectTo: 'moviesedits', pathMatch: 'full' },
    { path: 'moviesedits', component: MoviesbackComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'producers', component: ProducersComponent },
    { path: 'messages', component: MessageComponent },
    { path: 'add-library', component: AddLibraryComponent },
    { path: 'admin', component: HomeComponent }
  ]},

  { path: 'edit/movie/:id', component: EditMovieComponent },
  { path: 'edit/library/:id', component: EditLibraryComponent },
  { path: 'edit/producer/:id', component: EditProducerComponent },
  { path: 'edit/customer/:id', component: EditCustomerComponent },
  { path: 'delete/message/:id', component: DeleteMessageComponent },

  { path: 'play/:id', component: PlayMovieComponent },
  { path: 'play/:id', component: PlaySerieComponent },
  
  { path: 'search/movies', component: FavouretsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
