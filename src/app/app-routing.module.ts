import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'roupas',
    loadChildren: () => import('./pages/roupas/roupas.module').then( m => m.RoupasPageModule)
  },
  {
    path: 'faleconosco',
    loadChildren: () => import('./pages/faleconosco/faleconosco.module').then( m => m.FaleconoscoPageModule)
  },
  {
    path: 'roupafem',
    loadChildren: () => import('./pages/roupafem/roupafem.module').then( m => m.RoupafemPageModule)
  },
  {
    path: 'roupamasc',
    loadChildren: () => import('./pages/roupamasc/roupamasc.module').then( m => m.RoupamascPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
