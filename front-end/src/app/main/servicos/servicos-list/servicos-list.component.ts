import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";
import {Router} from "@angular/router";
import {AlertModalService} from "../../shared/alert-modal.service";
import {PrestadorService} from "../../../services/prestador.service";
import {take} from "rxjs/operators";
import {Prestador} from "../../../models/prestador";
import {MatDialog} from "@angular/material/dialog";
import {SolicitarDialogComponent} from "../solicitar-dialog/solicitar-dialog.component";

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.scss']
})
export class ServicosListComponent implements OnInit {

  logado:boolean = false;
  nome:string | null;
  busca:string;
  prestadores:Prestador[];

  constructor(   private usuarioService:UsuarioService,
                 private router:Router,
                 private alertService:AlertModalService,
                 private dialog: MatDialog,
                 private prestadorService:PrestadorService) { }

  ngOnInit(): void {
    this.logado = false
    if (localStorage.getItem("tipo") == 'PRESTADOR') {
      this.router.navigateByUrl("/meus-servicos")
    }
    if (localStorage.getItem("usuario")){
      this.nome  = localStorage.getItem("nome");
      this.logado = true
    }
    this.prestadorService.findAll().pipe(take(1)).subscribe(x=>{
      this.prestadores  = x;
    })

  }
  solicitar(prestador:Prestador){
    if (this.logado){
      this.usuarioService.findOne(parseInt(<string>localStorage.getItem("usuario"))).subscribe(x=>{
        const dialogRef = this.dialog.open(SolicitarDialogComponent, {
          data: {prestador: prestador,
                usuario:x
          }
        });
      })

    }else {
      this.alertService.showAlertSuccess('Faça o login para solicitar um serviço ');
      this.router.navigateByUrl("login")
    }
  }
  buscar(){
    console.log(this.busca)
    if (this.busca){
      this.prestadorService.busca(this.busca).pipe(take(1)).subscribe(x=>{
        this.prestadores  = x;
      })
    }else {
      this.ngOnInit()
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
