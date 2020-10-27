import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/@admin/components/components.module';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';


@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
