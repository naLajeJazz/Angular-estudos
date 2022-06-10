import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { JumpBallComponent } from './jump-ball/jump-ball.component';
import { HeaderComponent } from './header/header.component';
import { ComponentNgClassComponent } from './component-ng-class/component-ng-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentNgIfComponent } from './component-ng-if/component-ng-if.component';



@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    JumpBallComponent,
    HeaderComponent,
    ComponentNgClassComponent,
    ComponentNgIfComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
