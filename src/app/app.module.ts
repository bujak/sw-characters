import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';
import {StarWarsService} from './star-wars.service';
import {LogService} from './log.service';
import {CreateCharacterComponent} from './create-character/create-character.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "@angular/http";

const routes = [
  {
    path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]
  },
  {path: 'add', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
