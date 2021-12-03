import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Router} from "@angular/router";
import {AlertModalService} from "../shared/alert-modal.service";
import {PrestadorService} from "../../services/prestador.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  logado:boolean = false;
  nome:string | null;

  constructor(   private usuarioService:UsuarioService,
                 private router:Router,
                 private alertService:AlertModalService,
                 private prestadorService:PrestadorService) { }

  ngOnInit(): void {
    this.logado = false
    if (localStorage.getItem("usuario")){
      this.nome  = localStorage.getItem("nome");
      this.logado = true
    }

  }
  excluirUsuario(){
    if(window.confirm('Você tem certeza que deseja excluir sua conta do sistema?' )){

      console.log(localStorage.getItem("usuario"))
      if (localStorage.getItem("tipo") == 'PRESTADOR') {
        this.prestadorService.delete( parseInt(<string>localStorage.getItem("usuario"))  ).pipe(take(1)).subscribe(x=>{
          this.alertService.showAlertSuccess('Excluido com sucesso');
          this.logout();
        })

      } else {
        this.usuarioService.delete( parseInt(<string>localStorage.getItem("usuario"))  ).pipe(take(1)).subscribe(x=>{
          this.alertService.showAlertSuccess('Excluido com sucesso');
          this.logout();
        })
      }
    }
  }
  perfil() {
    if (localStorage.getItem("tipo") == 'PRESTADOR') {
      this.router.navigateByUrl("prestador/" + localStorage.getItem("usuario"))
    } else {
      this.router.navigateByUrl("usuario/" + localStorage.getItem("usuario"))
    }
  }

  logout(){
    localStorage.removeItem("tipo")
    localStorage.removeItem("usuario")
    localStorage.removeItem("nome")
    this.ngOnInit();
  }

}
