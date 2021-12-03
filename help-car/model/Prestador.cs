using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace help_car.model
{
    [Table("tbprestador")]
    public class Prestador
    {

        [Column("id")]
        public int? id { get; set; }
        public string? nome { get; set; }
        public string? cnpj { get; set; }
        public DateTime? data_nascimento { get; set; }
        public string? email { get; set; }
        public string? senha { get; set; }
        public string? nome_do_comercio { get; set; }
        public string? servico_do_comercio { get; set; }
     
        public double? valor_servico { get; set; }


}
}
