import { NgModule } from "@angular/core";
import {Routes, RouterModule}     from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

 const appRoutes:Routes=[
   {path:'',component:HomeComponent, data:{ state:''}},
   {path:'about',component:AboutComponent, data:{state:'about'}},
   {path:'contact',component:ContactComponent, data:{state:'contact'}}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
    exports:[RouterModule]
})

export class AppRoutingModule{}