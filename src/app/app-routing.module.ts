import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ScrollerComponent } from './component/scroller/scroller.component';

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "scroll", component: ScrollerComponent },
    { path: "main", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
