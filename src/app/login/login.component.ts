import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

import { User } from '../modelos/user';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    v1 = '--';
    v2 = '--';
 
    constructor(
        private router: Router,
        private userService: UserService) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        
        this.userService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log('Conexion exitosa!');
                    this.router.navigate(['/home', {user: this.model.username, pw: this.model.password}]);
                } else {
                    // login failed
                    this.error = 'Usuario o Contraseña Incorrecta';
                    this.loading = false;
                }
            });
        
    }
}