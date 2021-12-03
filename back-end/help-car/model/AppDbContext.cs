using Microsoft.EntityFrameworkCore;
using help_car.model;

namespace help_car.model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
              : base(options)
        { }

        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Prestador> Prestador { get; set; }
        public DbSet<Solicitacao> Solicitacao { get; set; }
    }
}
