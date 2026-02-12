import videoBg from '../assets/video falaon.mp4'; 
import logoImg from '../assets/logo.png'; // Importação da logo

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm md:px-12 relative z-10">
        {/* Substituição do texto Logo por Imagem */}
        <img 
          src={logoImg} 
          alt="Logo" 
          className="h-20 md:h-28 w-auto cursor-pointer" 
        />
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-medium text-gray-6/00">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Aprenda</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">Ensine</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Entrar</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
            <span>icon 1</span>
            <span>icon 2</span>
          </div>
        </div>
      </header>

      {/* Seção do Vídeo */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
        <video 
          src={videoBg} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Seu navegador não suporta vídeos.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Seção de Cards Superiores - Fundo #010020 */}
      <section className="bg-[#010020] px-6 py-24 flex flex-wrap justify-center gap-10">
        {[
          { title: "Consultoria", text: "Consulte um especialista e tenha orientações nas questões que precisa." },
          { title: "Mentoria", text: "Tenha um mentor em diversos assuntos para desenvolvimento pessoal e profissional." },
          { title: "Aulas", text: "Tenha uma aula avulsa ou recorrente para aprender algum assunto específico." },
          { title: "Gratuito", text: "Eventos gratuitos. Um presente para você." }
        ].map((card, index) => (
          <div key={index} className="relative flex-1 min-w-[250px] max-w-[280px] bg-[#010f29] p-8 shadow-2xl border border-white/5 flex flex-col items-center text-center">
            <h2 className="text-white text-xl font-bold mb-4 uppercase">{card.title}</h2>
            <p className="text-white/80 mb-10 leading-relaxed">{card.text}</p>
            <button className="absolute bottom-0 translate-y-1/2 bg-[#f67225] text-white px-8 py-3 rounded-full font-bold uppercase tracking-tighter hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg whitespace-nowrap">
              Conectar
            </button>
          </div>
        ))}
      </section>

      {/* Seção Quem Somos */}
      <section className="bg-[#010020] px-6 md:px-20 py-24 text-white">
        <h1 className="text-4xl font-bold mb-12 text-left">Quem Somos?</h1>
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xl md:text-2xl font-light leading-relaxed">Nosso principal objetivo é divulgar e propagar o conhecimento.</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed">Acreditamos na forma transformadora da informação na construção do ser e de um mundo melhor.</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed pt-8">Este projeto é um convite para formadores do saber de qualquer área, compartilharem o seu conhecimento.</p>
          <p className="text-xl md:text-2xl font-semibold">Se você tem conhecimento em qualquer área,</p>
          <p className="text-xl md:text-2xl font-semibold">Compartilhe</p>
          <div className="flex justify-center pt-8">
            <button className="bg-[#f67225] text-white px-12 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg">
              Conectar
            </button>
          </div>
        </div>
      </section>

      {/* ÚLTIMA SEÇÃO - EM DESTAQUE E PERFIL */}
      <section>
        <div className="h-16 bg-[#010020]" />

        <div className="bg-white py-12">
          <div className="flex flex-col items-center">
            <h2 className="text-black text-3xl font-bold uppercase relative pb-4">
              EM DESTAQUE
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#f67225]"></span>
            </h2>
          </div>
        </div>

        <div className="bg-[#010020] py-20 px-6 md:px-20 text-white">
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-64 bg-[#010f29] border border-white/10 rounded-lg overflow-hidden shadow-xl flex flex-col items-center pb-6">
                <div className="w-full h-40 bg-gray-300 mb-6"></div>
                <h3 className="text-white font-bold text-lg uppercase mb-2">Título</h3>
                <div className="px-4 text-center">
                  <p className="text-white/60 text-sm leading-relaxed">
                    texto, texto, texto, texto, texto, texto, texto, texto, texto.
                    texto, texto, texto, texto, texto, texto, texto, texto, texto.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full">
            <h3 className="text-4xl font-bold mb-12 text-left">Crie um perfil profissional</h3>
            
            <div className="max-w-4xl mx-auto text-center space-y-3">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Se você tem conhecimento em qualquer área.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Crie um perfil, anuncie seu trabalho
              </p>
              <p className="text-xl md:text-2xl font-semibold">
                e se conecte com seu público!
              </p>

              <div className="flex justify-center pt-8">
                <button className="bg-[#f67225] text-white px-12 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-[#d55e1d] transition-all hover:scale-105 shadow-lg">
                  Conectar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010020] text-white py-12 px-6 md:px-20 border-t border-white/10 flex flex-wrap justify-between items-start gap-10">
        {/* Substituição do Logo no Footer */}


        <div className="flex flex-col gap-4">
            <div className="flex">
                <input 
                  type="email" 
                  placeholder='Seu e-mail' 
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-[#f67225] px-4 py-2 rounded-r-md font-bold text-sm">CADASTRAR</button>
            </div>
            <p className="hover:underline cursor-pointer text-sm text-white/60">Central de ajuda</p>
        </div>
            
        <div className="flex flex-col gap-2">
            <p className="font-bold">Nossas redes sociais</p>
            <div className="flex gap-4">
              {/* Espaço para ícones sociais futuramente */}
              <span className="text-white/60 hover:text-white cursor-pointer">FB</span>
              <span className="text-white/60 hover:text-white cursor-pointer">IG</span>
              <span className="text-white/60 hover:text-white cursor-pointer">LN</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;