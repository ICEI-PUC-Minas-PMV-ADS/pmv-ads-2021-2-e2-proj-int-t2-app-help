import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.findAll().pipe(take(1)).subscribe(x=>console.log(x));
  }

}
