import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
//{ user: 'hola1', pw: 'hola2' }


  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoLogin ():void{
  	this.router.navigate(['/login']);
  }

}
