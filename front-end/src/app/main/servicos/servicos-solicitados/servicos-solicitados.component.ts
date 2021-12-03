import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";
import {Router} from "@angular/router";
import {AlertModalService} from "../../shared/alert-modal.service";
import {SolicitacaoService} from "../../../services/solicitacao.service";
import {PrestadorService} from "../../../services/prestador.service";
import {Solicitacao} from "../../../models/solicitacao";
import {take} from "rxjs/operators";
import {Prestador} from "../../../models/prestador";

@Component({
  selector: 'app-servicos-solicitados',
  templateUrl: './servicos-solicitados.component.html',
  styleUrls: ['./servicos-solicitados.component.scss']
})
export class ServicosSolicitadosComponent implements OnInit {
  solicitacoes:Solicitacao[];
  prestador:boolean = false;

  logado:boolean = false;
  nome:string | null;
  busca:string;


  constructor( private usuarioService:UsuarioService,
               private solicitacaoService:SolicitacaoService,
               private prestadorService:PrestadorService,
               private router:Router,
               private alertService:AlertModalService) { }

  ngOnInit(): void {
    this.logado = false
    if (localStorage.getItem("usuario")){
      this.nome  = localStorage.getItem("nome");
      this.logado = true

    }else{
      this.router.navigateByUrl("/login");
    }

    if (localStorage.getItem("tipo") == 'PRESTADOR') {
      this.prestador = true;
      this.solicitacaoService.findbyPrestador(parseInt(<string>localStorage.getItem("usuario")) ).pipe(take(1)).subscribe(x =>{
        this.solicitacoes = x;
        this.carregarDados();

      })
    } else {
      this.prestador = false;
      this.solicitacaoService.findbyUsuario(parseInt(<string>localStorage.getItem("usuario")) ).pipe(take(1)).subscribe(x =>{
        this.solicitacoes = x;
        this.carregarDados();

      })
    }

  }

  carregarDados(){
    console.log(this.solicitacoes)
    this.solicitacoes.forEach(data=>{
      this.usuarioService.findOne(data.usuarioID).pipe(take(1)).subscribe(user=>{
       data.usuario = user;
      })
      this.prestadorService.findOne(data.prestadorID).pipe(take(1)).subscribe(prestador=>{
       data.prestador = prestador;
      })
    })
  }
  verificarDisabled(solicitacao:Solicitacao){
    return solicitacao.status == "REALIZADO" || solicitacao.status == "CANCELADO";
  }
  onRealizado(solicitacao:Solicitacao){
    solicitacao.status = "REALIZADO";
    if(window.confirm('Você tem certeza que deseja marcar esse serviço como realizado?' )){
      this.solicitacaoService.update( solicitacao,solicitacao.id ).pipe(take(1)).subscribe(x=>{
        this.alertService.showAlertSuccess('Realizado com sucesso');

      })
    }
  }
  onCancelado(solicitacao:Solicitacao){
    solicitacao.status = "CANCELADO";
    if(window.confirm('Você tem certeza que deseja cancelar essa solitação serviço?' )){
      this.solicitacaoService.update( solicitacao,solicitacao.id ).pipe(take(1)).subscribe(x=>{
        this.alertService.showAlertSuccess('Cancelado com sucesso');

      })
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
