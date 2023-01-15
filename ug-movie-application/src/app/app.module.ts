import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './security/login/login.component';
import { MovieComponent } from './security/Movie/movie.component';
import { BrowseComponent } from './browse/browse.component';
import { RegisterproducerComponent } from './security/registerproducer/registerproducer.component';

import { MoviesComponent } from './categories/movies/movies.component';
import { ProducerComponent } from './categories/producer/producer.component';
import { AllComponent } from './categories/all/all.component';
import { PlayMovieComponent } from './categories/play-movie/play-movie.component';

import { AddLibraryComponent } from './Add-library/Add-library.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from "@angular/material/menu";

import { SubscriptionComponent } from './security/subscription/subscription.component';

import { MainComponent } from './developer/main/main.component';
import { ProducersComponent } from './developer/producers/producers.component';
import { CustomersComponent } from './developer/customers/customers.component';
import { MoviesbackComponent } from './developer/moviesback/moviesback.component';

import { HomeComponent } from './developer/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { DownloadsComponent } from './categories/views/downloads/downloads.component';
import { RecentComponent } from './categories/views/recent/recent.component';
import { FavouretsComponent } from './categories/views/favourets/favourets.component';
import { MainsComponent } from './categories/views/mains/mains.component';
import { EditMovieComponent } from './developer/edit-movie/edit-movie.component';
import { EditCustomerComponent } from './developer/edit-customer/edit-customer.component';
import { EditProducerComponent } from './developer/edit-producer/edit-producer.component';
import { MessageComponent } from './developer/message/message.component';
import { DeleteMessageComponent } from './developer/delete-message/delete-message.component';
import { SeriesComponent } from './categories/series/series.component';
import { MovieOnlyComponent } from './categories/movie-only/movie-only.component';
import { PlaySerieComponent } from './categories/play-serie/play-serie.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MovieComponent,
    BrowseComponent,
    ProducerComponent,
    RegisterproducerComponent,
    MoviesComponent,
    AllComponent,
    AddLibraryComponent,
    SubscriptionComponent,
    MainComponent,
    ProducersComponent,
    CustomersComponent,
    MoviesbackComponent,
    HomeComponent,
    PlayMovieComponent,
    DownloadsComponent,
    RecentComponent,
    FavouretsComponent,
    MainsComponent,
    EditMovieComponent,
    EditCustomerComponent,
    EditProducerComponent,
    MessageComponent,
    DeleteMessageComponent,
    SeriesComponent,
    MovieOnlyComponent,
    PlaySerieComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCmuc2M1cwtQD23cfMjTfPjheTEA0g-ljY",
      authDomain: "lutimbefilmz-6878c.firebaseapp.com",
      databaseURL: "https://lutimbefilmz-6878c-default-rtdb.firebaseio.com",
      projectId: "lutimbefilmz-6878c",
      storageBucket: "lutimbefilmz-6878c.appspot.com",
      messagingSenderId: "387520150986",
      appId: "1:387520150986:web:6a67c15c7e16662790a333"

    }),
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
