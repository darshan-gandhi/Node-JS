import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{path:'home',component:StoreComponent},
  {path:'employee',component:StoreComponent},
  {path:'dashboard',component:CartComponent},
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }