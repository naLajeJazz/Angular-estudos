import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-class',
  templateUrl: './component-ng-class.component.html',
  styleUrls: ['./component-ng-class.component.css']
})
export class ComponentNgClassComponent implements OnInit {

  public valor:Boolean=false
  public valor2:Boolean=true
  public info:Boolean=false
  public danger:Boolean=false
  public warning:Boolean=false
  public success:Boolean=false
  public card:Boolean=false;
  
  public activeCard=()=>{if(!this.card){this.card=true}else{this.card=false}}
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}
  public infOver=()=>{this.info=true}
  public infOut=()=>{this.info=false}
  public dangOver=()=>{this.danger=true}
  public dangOut=()=>{this.danger=false}
  public warnOver=()=>{this.warning=true}
  public warnOut=()=>{this.warning=false}
  public succOver=()=>{this.success=true}
  public succOut=()=>{this.success=false}

  constructor() { }

  ngOnInit(): void {
  }

}
