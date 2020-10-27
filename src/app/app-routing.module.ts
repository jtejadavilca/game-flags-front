import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('./@admin/pages/countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'countries',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        scrollPositionRestoration: 'enabled'
      }
    ),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
