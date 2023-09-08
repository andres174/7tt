import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'game-mode',
    loadChildren: () => import('./shared/game-mode/game-mode.module').then( m => m.GameModePageModule)
  },
  {
    path: 'siete-toma-todo',
    loadChildren: () => import('./games/siete-toma-todo/siete-toma-todo.module').then( m => m.SieteTomaTodoPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./shared/players/players.module').then( m => m.PlayersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
