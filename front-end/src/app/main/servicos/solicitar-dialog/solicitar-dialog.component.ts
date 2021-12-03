import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Prestador} from "../../../models/prestador";
import {Usuario} from "../../../models/usuario";
import {Solicitacao} from "../../../models/solicitacao";
import {SolicitacaoService} from "../../../services/solicitacao.service";
import {AlertModalService} from "../../shared/alert-modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-solicitar-dialog',
  templateUrl: './solicitar-dialog.component.html',
  styleUrls: ['./solicitar-dialog.component.scss']
})
export class SolicitarDialogComponent implements OnInit {
  prestador:Prestador
  usuario:Usuario
  constructor( private service:SolicitacaoService,
               private alertService:AlertModalService,
              private route:Router,
    public dialogRef: MatDialogRef<SolicitarDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.prestador = this.data.prestador
    this.usuario = this.data.usuario
  }
  solicitar(){
   let   solicitacao:Solicitacao = new Solicitacao(null);
   solicitacao.status = "SOLICITADO"
    solicitacao.data_utilizacao = new Date();
    solicitacao.prestadorID = this.prestador.id;
    solicitacao.usuarioID = this.usuario.id;
    solicitacao.valor_final = this.prestador.valor_servico;
    this.service.save(solicitacao).subscribe(
      success => {

        this.alertService.showAlertSuccess('Sucesso ao realizar a solicitaçao ');
        this.route.navigateByUrl("meus-servicos")
        this.dialogRef.close();

      },
      error => {
        this.alertService.showAlertDanger('Erro ao atualizar prestador. Tente novamente mais tarde.');

      }
    );
  }
}
