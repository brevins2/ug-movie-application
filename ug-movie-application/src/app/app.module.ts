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
import { ProducerComponent } from './security/producer/producer.component';
import { MoviesComponent } from './categories/movies/movies.component';
import { SeriesComponent } from './categories/series/series.component';
import { AllComponent } from './categories/all/all.component';
import { PayComponent } from './pay/pay.component';

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

import { SubscriptionComponent } from './security/subscription/subscription.component';
import { MainComponent } from './developer/main/main.component';
import { ProducersComponent } from './developer/producers/producers.component';
import { CustomersComponent } from './developer/customers/customers.component';
import { MoviesbackComponent } from './developer/moviesback/moviesback.component';
import { TestComponent } from './security/test/test.component';
import { PlayMovieComponent } from './categories/play-movie/play-movie.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { NgxCarouselModule } from 'ngx-carousel';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MovieComponent,
    BrowseComponent,
    ProducerComponent,
    MoviesComponent,
    SeriesComponent,
    AllComponent,
    PayComponent,
    SubscriptionComponent,
    MainComponent,
    ProducersComponent,
    CustomersComponent,
    MoviesbackComponent,
    TestComponent,
    PlayMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // NgxCarouselModule,
    // CarouselModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
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
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
