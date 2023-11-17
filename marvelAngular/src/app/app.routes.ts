import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
   // {path:'bitacora',component:BitacoraComponent},
    {path:'inicio',component:InicioComponent},
    {path:'',pathMatch:'full',redirectTo:'inicio'},
    {path:'**',pathMatch:'full',redirectTo:'inicio'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
