import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageComponent } from './Modules/Cage/cage/cage.component';
import { UserComponent } from './Modules/User/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/Cages', pathMatch: 'full'},
  { path: 'Cages', component: CageComponent },
  { path: 'Users/:cageId', component: UserComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
