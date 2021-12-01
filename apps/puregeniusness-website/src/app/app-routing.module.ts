import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: 'wasm',
    loadChildren: () =>
      import('./features/console-log-wasm/console-log-wasm.module').then((m) => m.ConsoleLogWasmModule)
  },
  {
    path: 'queens',
    loadChildren: () =>
      import('./features/eight-queens/eight-queens.module').then((m) => m.EightQueensModule)
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
