import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  userModel = new User();
  msgError = '';
  receberDados() {
    this.loginService.login(this.userModel).subscribe((response) => {
      // console.log(response);
      this.router.navigateByUrl('/');
    }, (error) => {
      switch (error.error) {
        case "Email and password are required":
          this.msgError = "Email e senha são obrigatórios";
          break;
          case "Email format is invalid":
            this.msgError = "Formato de email inválido";
            break;
          case "Cannot find user":
            this.msgError = "Usuário não encontrado";
            break;
          case "Incorrect password":
            this.msgError = "Senha incorreta";
            break;

        default:
          this.msgError = error.error
      }
    });
    // console.log(this.userModel);
  }

}
