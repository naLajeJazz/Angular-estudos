import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-if',
  templateUrl: './component-ng-if.component.html',
  styleUrls: ['./component-ng-if.component.css']
})
export class ComponentNgIfComponent implements OnInit {

  public valor:Boolean=false
  public valor2:Boolean=true
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}

  constructor() { }

  ngOnInit(): void {
  }

}
