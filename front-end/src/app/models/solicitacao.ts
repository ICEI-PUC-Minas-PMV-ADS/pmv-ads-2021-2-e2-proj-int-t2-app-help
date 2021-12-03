import {Prestador} from "./prestador";
import {Usuario} from "./usuario";

export class Solicitacao {

  id: number ;
  prestadorID: number ;
  prestador:Prestador;
  usuario:Usuario;
  usuarioID: number ;
  data_utilizacao: Date ;
  status: string ;
  valor_final:number






  public constructor(data:any) {
    if (data) {
      this.id = Number(data.id);


    }else{
      this.id = 0;


    }
  }
}

