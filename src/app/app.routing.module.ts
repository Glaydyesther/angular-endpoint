import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {CardViewUsersComponent} from 'src/app/components/card-view-users/card-view-users.component'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { AppComponent } from "./app.component";
import { DataUserComponent } from "./Modals/data-user/data-user.component";
const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'users', component: CardViewUsersComponent},    
    {path:'home', component:HeaderComponent},
    {path:'users/:id', component: DataUserComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}