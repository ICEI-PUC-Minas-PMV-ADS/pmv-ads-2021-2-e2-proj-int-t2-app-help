using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using help_car.model;

namespace help_car.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrestadorController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PrestadorController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Prestador
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prestador>>> GetPrestador()
        {
            return await _context.Prestador.ToListAsync();
        }

        [HttpGet("login")]
        public async Task<ActionResult<Prestador>> GetPrestadorLogin([FromQuery(Name = "email")] string email, [FromQuery(Name = "senha")] string senha)
        {

            var query = _context.Prestador
                   .Where(b => b.email == email).Where(b => b.senha == senha)
                   .FirstOrDefaultAsync<Prestador>();

            return await query;
        }

        [HttpGet("busca")]
        public async Task<ActionResult<IEnumerable<Prestador>>> GetBusca([FromQuery(Name = "texto")] string texto)
        {

            var query = _context.Prestador
                   .Where(b => b.nome.Contains(texto) || b.servico_do_comercio.Contains(texto) || b.nome_do_comercio.Contains(texto)  )
                       .ToListAsync<Prestador>() ;

            return await query;
        }

        // GET: api/Prestador/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Prestador>> GetPrestador(int? id)
        {
            var prestador = await _context.Prestador.FindAsync(id);

            if (prestador == null)
            {
                return NotFound();
            }

            return prestador;
        }

        // PUT: api/Prestador/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrestador(int? id, Prestador prestador)
        {
            if (id != prestador.id)
            {
                return BadRequest();
            }

            _context.Entry(prestador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrestadorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Prestador
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Prestador>> PostPrestador(Prestador prestador)
        {
            _context.Prestador.Add(prestador);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrestador", new { id = prestador.id }, prestador);
        }

        // DELETE: api/Prestador/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrestador(int? id)
        {
            var prestador = await _context.Prestador.FindAsync(id);
            if (prestador == null)
            {
                return NotFound();
            }

            _context.Prestador.Remove(prestador);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PrestadorExists(int? id)
        {
            return _context.Prestador.Any(e => e.id == id);
        }
    }
}
