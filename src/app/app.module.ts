import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { Routes, RouterModule } from '@angular/router';
import {SessionItemListComponent} from './session-item-list/session-item-list.component';
import {FakeSessionItemService} from './fake-session-item.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FakeSessionItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
