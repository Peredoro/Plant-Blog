import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagePlantsComponent } from './pages/page-plants/page-plants.component';
const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'content/:id',
  component:PagePlantsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
