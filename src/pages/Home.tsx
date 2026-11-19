import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight">Biblioteca</h1>
            <p className="text-[#94A3B8] text-sm mt-1 m-0">Seu conhecimento começa aqui.</p>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <a
              href="/login"
              className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              Entrar
            </a>
            <a
              href="/register"
              className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors"
            >
              Criar conta
            </a>
            <a
              href="/chat"
              className="bg-transparent text-[#10B981] border border-[#10B981] py-2.5 px-4 rounded-lg text-sm font-semibold no-underline hover:bg-[#10B981]/10 transition-colors flex items-center gap-2"
            >
              Chat
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
        {/* História / Reflexão do Dia */}
        <section className="bg-gradient-to-br from-[#1C1C1C] to-[#3A3A3A] p-8 rounded-2xl mb-10 shadow-sm border-l-4 border-[#B0B0B0]">
          <div className="bg-[#B0B0B0] text-[#1C1C1C] text-[11px] font-bold uppercase py-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
            conhecimento do dia
          </div>
          <p className="text-lg leading-7 text-[#E5E5E5] italic font-medium mb-3 mt-0">
            "Só se vê bem com o coração"
          </p>
          <span className="text-[#A3A3A3] text-[13px] font-semibold block">
           -O Pequeno Príncipe
          </span>
        </section>

        {/* Seção de Boas-Vindas */}
        <section className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            Bem-vindo à nossa biblioteca
          </h2>
          <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
            Estamos construindo um espaço para você explorar e descobrir novos livros.
            Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxima leitura favorita!
          </p>
        </section>

        {/* Menu principal / Atalhos */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-[#0F172A] mb-5">Navegação Rápida</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
           
            <Link to={"/desenvolvedor"} className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border no-underline hover:border-[#2563EB] transition-colors cursor-pointer">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                📖
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Desenvolvedor</h4>
                <p className="text-[13px] text-[#64748B] m-0">Informações sobre o desenvolvedor</p>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ★
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Recomendações</h4>
                <p className="text-[13px] text-[#64748B] m-0">Descubra novos livros</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ▣
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Acervo</h4>
                <p className="text-[13px] text-[#64748B] m-0">Explore nossa coleção</p>
              </div>
            </div>

            <Link to="/aulas" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors cursor-pointer">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ▸
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Aulas Mobile</h4>
                <p className="text-[13px] text-[#64748B] m-0">Aprenda desenvolvimento</p>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                💻
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Aulas Web</h4>
                <p className="text-[13px] text-[#64748B] m-0">React, HTML e JavaScript</p>
              </div>
            </div>
          </div>
        </section>

        {/* Livros em Destaque */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-bold text-[#0F172A] m-0">Livros em destaque</h3>
            <a href="/acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            <CardLivros titulo="Dom Casmurro" autor="Machado de Assis" categoria="Romance" />
            <CardLivros titulo="O Cortiço" autor="Aluísio Azevedo" categoria="Romance" />
            <CardLivros titulo="O Pequeno Príncipe" autor="Antoine de Saint-Exupéry" categoria="Literatura" />
          </div>
        </section>
      </main>
    </>
  );
}

interface CardLivrosProps {
  titulo: string;
  autor: string;
  categoria: string;
}

function CardLivros({ titulo, autor, categoria }: CardLivrosProps) {
  return (
    <article className="flex gap-6 border-b border-gray-300 py-6">
      <div className="h-32 w-24 shrink-0 border-2 border-black"></div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{titulo}</h3>
        <p className="mt-2 text-gray-600">{autor}</p>
        <p className="mt-2 text-sm text-gray-500">{categoria}</p>
      </div>
    </article>
  );
}