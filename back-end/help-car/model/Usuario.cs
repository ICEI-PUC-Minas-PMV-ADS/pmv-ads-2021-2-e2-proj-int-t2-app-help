using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace help_car.model
{
    [Table("tbusuario")]
    public class Usuario
    {
   
        [Column("id")]
        public int? id { get; set; }
        public string? nome { get; set; }
        public string? cpf { get; set; }
        public DateTime? data_nascimento { get; set; }
        public string? email { get; set; }
        public string? senha { get; set; }
        public string? chassi { get; set; }
        public string? endereco { get; set; }
        public string? numero { get; set; }
        public string? bairro { get; set; }
        public string? cidade { get; set; }
        public string? estado { get; set; }
    }
}
