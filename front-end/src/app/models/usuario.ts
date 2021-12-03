export class Usuario {

  id: number ;
  nome: string ;
  data_nascimento: Date ;
  cpf: string ;
  email: string ;
  senha: string ;
  chassi: string ;
  endereco: string ;
  numero: string ;
  bairro: string ;
  cidade: string ;
  estado: string ;



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

