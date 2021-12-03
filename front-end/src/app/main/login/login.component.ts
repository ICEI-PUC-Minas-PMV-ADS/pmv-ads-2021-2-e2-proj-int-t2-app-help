import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {PrestadorService} from "../../services/prestador.service";
import {BaseFormComponent} from "../shared/base-form.directive";
import {FormBuilder, Validators} from "@angular/forms";
import {FormValidations} from "../shared/form-validations";
import {take} from "rxjs/operators";
import {AlertModalService} from "../shared/alert-modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
               private usuarioService:UsuarioService,
               private router:Router,
               private alertService:AlertModalService,
              private prestadorService:PrestadorService) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      email: [null, [Validators.required, Validators.email]],
      senha: [null,Validators.required],
      tipo: [null, Validators.required],

    })
  }

  submit(): any {

    let valueSubmit = Object.assign({}, this.formulario.value);
    if (valueSubmit.tipo == 'PRESTADOR') {
      this.prestadorService.login(valueSubmit.email, valueSubmit.senha).pipe(take(1)).subscribe(x => {
        if (x){
          localStorage.setItem("tipo",'PRESTADOR')
          localStorage.setItem("usuario",x.id.toString())
          localStorage.setItem("nome",x.nome)
          this.router.navigateByUrl('/');

        }else {
          this.alertService.showAlertDanger('Usuario ou senha invalidos');
        }


      });
    }else {
      this.usuarioService.login(valueSubmit.email, valueSubmit.senha).pipe(take(1)).subscribe(x => {
        if (x){
          localStorage.setItem("tipo",'USUARIO')
          localStorage.setItem("usuario",x.id.toString())
          localStorage.setItem("nome",x.nome)
          this.router.navigateByUrl('/');


        }else {
          this.alertService.showAlertDanger('Usuario ou senha invalidos');
        }

      });
    }
  }

}
