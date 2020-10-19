import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { UserRegistrationModule } from './user-registration/user-registration.module';

const routes: Routes = [
  
      {
        path:'',redirectTo:'userregistration',pathMatch:'full'
      },
      {
        path:'userregistration',loadChildren:()=>import('./user-registration/user-registration.module').then(m=>UserRegistrationModule)
      },
      {
        path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>AdminModule)
      }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
