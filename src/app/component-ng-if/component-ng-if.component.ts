import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-if',
  templateUrl: './component-ng-if.component.html',
  styleUrls: ['./component-ng-if.component.css']
})
export class ComponentNgIfComponent implements OnInit {

  public valor:Boolean=false;
  public valor2:Boolean=true;
  public condition:boolean=false;
  public card:Boolean=false;
  
  public activeCard=()=>{if(!this.card){this.card=true}else{this.card=false}}
  public conditionBol=()=>{if(!this.condition) {this.condition=true}else{this.condition=false}};
  public active=()=>{this.valor=true;this.valor2=false};
  public disable=()=>{this.valor=false;this.valor2=true};

  constructor() { }

  ngOnInit(): void {
  }

}
