import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {path: "home" , component:HomeComponent},
  {path: "customer/:custId" , component:CustomerComponent},
  {path: "cat" , component:CatComponent},
  {path: "dog" , component:DogComponent},
  {path: "**" , redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
