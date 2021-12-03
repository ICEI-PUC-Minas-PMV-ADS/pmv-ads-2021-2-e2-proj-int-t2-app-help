export class Prestador {
  id: number ;
  nome: string ;
  cnpj: string ;
  email: string ;
  senha: string ;
  nome_do_comercio: string ;
  servico_do_comercio: string ;
  valor_servico: number ;



  public constructor(data:any) {
    if (data) {
      this.id = Number(data.id);
      this.nome = String(data.nome);

    }else{
      this.id = 0;
      this.nome =  '';

    }
  }
}
