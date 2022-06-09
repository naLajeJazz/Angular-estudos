import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-class',
  templateUrl: './component-ng-class.component.html',
  styleUrls: ['./component-ng-class.component.css']
})
export class ComponentNgClassComponent implements OnInit {

  public valor:Boolean=false
  public valor2:Boolean=true
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}

  constructor() { }

  ngOnInit(): void {
  }

}
