import {Directive, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidations} from "./form-validations";


@Directive()
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;
  cabecalho: String;
  button:String;
  isLoading = false;
  control: AbstractControl | null | undefined;

  constructor() {

  }

  ngOnInit() {

  }

  abstract submit():any;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      console.log(this.formulario)
      console.log(this.formulario.get('dataExpedicao'))
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)?.valid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErroCampo(campo: string) {


    if (this.formulario.get(campo)?.touched && this.formulario.get(campo)?.errors){
      return {
        'is-invalid': this.formulario.get(campo)?.errors,

      }
    }else {
      return {'': true,  }
    }
  }

  aplicarCssIndicacaoRequired(campo: string){

   if ( !this.formulario.get(campo)?.hasValidator(Validators.required)){
     return {'hide': true  }
   }else{
     return {'': true  }
   }
  }
  get  errorMessage():String {

    for (const propertyName in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
        return FormValidations.getErrorMsg(propertyName.toUpperCase(), propertyName, this.control.errors[propertyName]);
      }
    }

    return ``;
  }

  terminarSpinner(){
    this.isLoading = false;
    this.button = 'Salvar';
  }
  comparar(obj1:any, obj2:any) {
    return obj1 && obj2 ? (obj1.id === obj2.id && obj1.nome === obj2.nome) : obj1 === obj2;
  }

}
