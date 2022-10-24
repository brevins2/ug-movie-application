import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { ProducerComponent } from './security/producer/producer.component';
import { BrowseComponent } from './browse/browse.component';
import { PayComponent } from './pay/pay.component';
import { SubscriptionComponent } from './security/subscription/subscription.component';

import { AllComponent } from './categories/all/all.component';
import { MoviesComponent } from './categories/movies/movies.component';
import { SeriesComponent } from './categories/series/series.component';

import { MainComponent } from './developer/main/main.component';
import { MoviesbackComponent } from './developer/moviesback/moviesback.component';
import { CustomersComponent } from './developer/customers/customers.component';
import { ProducersComponent } from './developer/producers/producers.component';

const routes: Routes = [
  { path:'', redirectTo: 'cinema/browse', pathMatch: 'full' },
  { path:'cinema/browse', component: BrowseComponent },
  { path:'login', component: LoginComponent },
  { path:'register/user', component: RegisterComponent },
  { path:'register/producer', component: ProducerComponent },
  { path:'pay', component: PayComponent },
  { path:'subscribe', component: SubscriptionComponent },

  { path:'cinema/all', component: AllComponent, children: [
    { path:'', redirectTo: 'movies', pathMatch: 'full' },
    { path:'movies', component: MoviesComponent },
    { path:'series', component: SeriesComponent }
  ]},

  { path: 'developer/edits', component: MainComponent, children: [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesbackComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'producers', component: ProducersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
