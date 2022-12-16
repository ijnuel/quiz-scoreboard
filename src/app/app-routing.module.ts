import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'election',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/vote/vote.module').then((m) => m.VoteModule),
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
