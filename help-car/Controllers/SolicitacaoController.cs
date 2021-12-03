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
    public class SolicitacaoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SolicitacaoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Solicitacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Solicitacao>>> GetSolicitacao()
        {
            return await _context.Solicitacao.ToListAsync();
        }
        // GET: api/Solicitacao
        [HttpGet("prestador/{id}")]
        public async Task<ActionResult<IEnumerable<Solicitacao>>> getSolicitacoesPrestador(int? id)
        {
            var query = _context.Solicitacao
               .Where(b => b.prestadorID == id)
                   .ToListAsync<Solicitacao>();

            return await query;
        }
        [HttpGet("usuario/{id}")]
        public async Task<ActionResult<IEnumerable<Solicitacao>>> getSolicitacoesUsuario(int? id)
        {
            var query = _context.Solicitacao
               .Where(b => b.usuarioID == id)
                   .ToListAsync<Solicitacao>();

            return await query;
        }

        // GET: api/Solicitacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Solicitacao>> GetSolicitacao(int? id)
        {
            var solicitacao = await _context.Solicitacao.FindAsync(id);

            if (solicitacao == null)
            {
                return NotFound();
            }

            return solicitacao;
        }

        // PUT: api/Solicitacao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSolicitacao(int? id, Solicitacao solicitacao)
        {
            if (id != solicitacao.id)
            {
                return BadRequest();
            }

            _context.Entry(solicitacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SolicitacaoExists(id))
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

        // POST: api/Solicitacao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Solicitacao>> PostSolicitacao(Solicitacao solicitacao)
        {
            _context.Solicitacao.Add(solicitacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSolicitacao", new { id = solicitacao.id }, solicitacao);
        }

        // DELETE: api/Solicitacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSolicitacao(int? id)
        {
            var solicitacao = await _context.Solicitacao.FindAsync(id);
            if (solicitacao == null)
            {
                return NotFound();
            }

            _context.Solicitacao.Remove(solicitacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SolicitacaoExists(int? id)
        {
            return _context.Solicitacao.Any(e => e.id == id);
        }
    }
}
