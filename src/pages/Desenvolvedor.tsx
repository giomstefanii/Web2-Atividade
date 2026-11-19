import { Link } from 'react-router-dom';

export default function Desenvolvedor() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Barra superior de navegação */}
      <header className="bg-[#0F172A] py-4 px-8 shadow-sm">
        <div className="max-w-[1000px] mx-auto flex justify-between items-center">
          <span className="text-white font-bold text-lg">Biblioteca</span>
          <Link
            to="/"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors no-underline bg-[#1E293B] py-2 px-4 rounded-lg border border-[#334155]"
          >
            ← Voltar para a Home
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-[1000px] w-full mx-auto py-12 px-6 flex-1">
        
        {/* Seção de Apresentação (Perfil com Foto) */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] mb-8 flex flex-col md:flex-row items-center gap-8">
          
    
              
        <img src="../../fotoooo.jpg" alt="Giovanna" className="w-32 h-32 rounded-full object-cover shadow-md shrink-0 border-2 border-[#2563EB]" />
          
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#9333EA] flex items-center justify-center text-white text-3xl font-extrabold shadow-md shrink-0 overflow-hidden">
            <span>GMS</span>
          </div>
          
          <div className="text-center md:text-left">
            <span className="bg-[#EFF6FF] text-[#2563EB] text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-2">
              Desenvolvedora & Professora
            </span>
            <h1 className="text-3xl font-extrabold text-[#0F172A] m-0 mb-1">
              Giovanna Mendonça Stefani
            </h1>
            <p className="text-[#64748B] text-sm font-semibold mb-3">
              26 anos
            </p>
            <p className="text-[#64748B] text-base leading-relaxed m-0">
              Professora de ciências e estudante de desenvolvimento de software multiplataforma na FATEC Votorantim.
            </p>
          </div>
        </section>

        {/* Grid de Informações: Experiência e Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Experiência / Projeto Integrador */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-[#E2E8F0]">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              Experiência
            </h3>
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
              <h4 className="text-base font-bold text-[#1E293B] m-0 mb-1">Projeto Integrador</h4>
              <p className="text-[#64748B] text-sm m-0 leading-relaxed">
                Desenvolvendo o <strong>PongoEdu</strong> — Sistema de gerenciamento de Laboratório didático.
              </p>
            </div>
          </div>

          {/* Habilidades / Tecnologias */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-[#E2E8F0]">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
             Tecnologias & Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Vite'].map((tech) => (
                <span key={tech} className="bg-[#F1F5F9] text-[#334155] text-sm font-semibold py-1.5 px-3 rounded-lg border border-[#E2E8F0]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}