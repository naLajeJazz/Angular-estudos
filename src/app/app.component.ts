import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public valor:Boolean=false
  public valor2:Boolean=true
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}

  }

