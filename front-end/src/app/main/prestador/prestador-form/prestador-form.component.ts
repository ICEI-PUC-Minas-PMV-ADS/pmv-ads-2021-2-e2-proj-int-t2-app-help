import { Component, OnInit } from '@angular/core';
import {PrestadorService} from "../../../services/prestador.service";
import {FormBuilder, Validators} from "@angular/forms";
import {BaseFormComponent} from "../../shared/base-form.directive";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Prestador} from "../../../models/prestador";
import {take} from "rxjs/operators";
import {FormValidations} from "../../shared/form-validations";
import {AlertModalService} from "../../shared/alert-modal.service";

@Component({
  selector: 'app-prestador-form',
  templateUrl: './prestador-form.component.html',
  styleUrls: ['./prestador-form.component.scss']
})
export class PrestadorFormComponent extends BaseFormComponent implements  OnInit {

  constructor(private service:PrestadorService,
              private routeActive: ActivatedRoute,
              private alertService:AlertModalService,
              private formBuilder: FormBuilder) { super() }

  ngOnInit(): void {
    this.button = 'Salvar';
    const prestador = this.routeActive.snapshot.data['prestador'];

    if (prestador.id === 0) {
      prestador.id = null;
      this.cabecalho = "Novo Prestador"
    } else {
      this.cabecalho = "Editar Prestador"
    }

    this.formulario = this.formBuilder.group({
      id: [prestador.id],
      nome: [prestador.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      cnpj: [prestador.cnpj],
      email: [prestador.email, [Validators.required,Validators.email]],
      senha: [prestador.senha,Validators.required],
      senha1: [prestador.senha, [Validators.required,FormValidations.equalsTo('senha')]],
      nome_do_comercio: [prestador.nome_do_comercio,Validators.required],
      servico_do_comercio: [prestador.servico_do_comercio,Validators.required],
      valor_servico: [prestador.valor_servico, Validators.required,],



    })



  }
  initForm(){

  }
  submit(): any {
    let valueSubmit = Object.assign({}, this.formulario.value);
    if (valueSubmit.id) {
      this.service.update(valueSubmit,valueSubmit.id).pipe(take(1)).subscribe(
        success => {

          this.alertService.showAlertSuccess('Sucesso ao atualizar prestador ');
          // this.redirecionar(success.id);
          this.terminarSpinner()
        },
        error => {
          this.alertService.showAlertDanger('Erro ao atualizar prestador. Tente novamente mais tarde.');
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
