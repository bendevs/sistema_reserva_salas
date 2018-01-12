import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorMessage: string;


  constructor(private router: Router) { }

  ngOnInit() {
    this.showApp ();
  }

  showApp (): void{
     this.router.navigate(['/home', {outlets: {'firstchild': ['usuarios']}}]);
  }

}
