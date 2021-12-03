import { Component, OnInit } from '@angular/core';
import {BaseFormComponent} from "../../shared/base-form.directive";
import {PrestadorService} from "../../../services/prestador.service";
import {ActivatedRoute} from "@angular/router";
import {AlertModalService} from "../../shared/alert-modal.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {FormValidations} from "../../shared/form-validations";
import {take} from "rxjs/operators";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent  extends BaseFormComponent implements  OnInit  {

  constructor(private service:UsuarioService,
              private routeActive: ActivatedRoute,
              private alertService:AlertModalService,
              private formBuilder: FormBuilder) { super()}

  ngOnInit(): void {
    this.button = 'Salvar';
    const usuario = this.routeActive.snapshot.data['usuario'];

    if (usuario.id === 0) {
      usuario.id = null;
      this.cabecalho = "Novo Usuario"
    } else {
      this.cabecalho = "Editar Usuario"
    }

    this.formulario = this.formBuilder.group({
      id: [usuario.id],
      nome: [usuario.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      cpf: [usuario.cpf,Validators.required],
      email: [usuario.email, [Validators.required,Validators.email]],
      senha: [usuario.senha,Validators.required],
      senha1: [usuario.senha, [Validators.required,FormValidations.equalsTo('senha')]],
      data_nascimento:  [ usuario.data_nascimento, Validators.required],
      chassi: [usuario.chassi,Validators.required],
      endereco: [usuario.endereco,Validators.required],
      numero: [usuario.numero,Validators.required],
      bairro: [usuario.bairro,Validators.required],
      cidade: [usuario.cidade,Validators.required],
      estado: [usuario.estado,Validators.required]

    })

  }

  submit(): any {
    let valueSubmit = Object.assign({}, this.formulario.value);
    if (valueSubmit.id) {
      this.service.update(valueSubmit,valueSubmit.id).pipe(take(1)).subscribe(
        success => {

          this.alertService.showAlertSuccess('Sucesso ao atualizar usuario ');
          // this.redirecionar(success.id);
          this.terminarSpinner()
        },
        error => {
          this.alertService.showAlertDanger('Erro ao atualizar usuario. Tente novamente mais tarde.');
          this.terminarSpinner()
        }
      );
    } else {
      this.service.save(valueSubmit).subscribe(
        success => {

          this.alertService.showAlertSuccess('Sucesso ao cadastrar prestador ');
          // this.redirecionar(success.id);
          this.terminarSpinner()
        },
        error => {
          this.alertService.showAlertDanger('Erro ao atualizar prestador. Tente novamente mais tarde.');
          this.terminarSpinner()
        }
      );
    }
  }

}
