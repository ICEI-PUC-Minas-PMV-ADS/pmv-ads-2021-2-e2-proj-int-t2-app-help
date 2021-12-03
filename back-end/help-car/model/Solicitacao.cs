using System.ComponentModel.DataAnnotations.Schema;

namespace help_car.model
{
    [Table("tbsolicitacao")]
    public class Solicitacao
    {
        [Column("id")]
        public int? id { get; set; }
        public DateTime? data_utilizacao { get; set; }
        public Double? valor_final { get; set; }
        

        public int? usuarioID { get; set; }   
        public int? prestadorID { get; set; }
  
        public string? status { get; set; }
    }
}
