import React, { useState } from "react";
import {
  ArrowRight, Code2, Cpu, Layers3, Menu, MessageCircle, Monitor,
  Rocket, ShieldCheck, Table2, Target, TrendingUp, X
} from "lucide-react";
import "./App.css";

const WHATSAPP = "5511988301555";

const services = [
  {
    icon: Code2,
    title: "CriaÃ§Ã£o de Sistemas",
    description: "Sistemas personalizados para organizar processos e administrar sua empresa."
  },
  {
    icon: Table2,
    title: "Planilhas Profissionais",
    description: "Planilhas inteligentes, automaÃ§Ãµes e controles feitos sob medida."
  },
  {
    icon: Monitor,
    title: "Montagem de PCs",
    description: "Computadores personalizados para trabalho, estudo, criaÃ§Ã£o e jogos."
  },
  {
    icon: Layers3,
    title: "SoluÃ§Ãµes Digitais",
    description: "Sites, ferramentas e projetos tecnolÃ³gicos para impulsionar seu negÃ³cio."
  }
];

const initialForm = {
  nome: "",
  telefone: "",
  empresa: "",
  servico: "",
  descricao: ""
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  function openQuote(service = "") {
    setFormData({ ...initialForm, servico: service });
    setMenuOpen(false);
    setFormOpen(true);
  }

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function submitQuote(event) {
    event.preventDefault();

    const message = [
      "*NOVA SOLICITAÃ‡ÃƒO DE ORÃ‡AMENTO*",
      "*NEXUS DIGITAL ECOM*",
      "",
      `*Nome:* ${formData.nome}`,
      `*WhatsApp:* ${formData.telefone}`,
      `*Empresa:* ${formData.empresa || "NÃ£o informado"}`,
      `*ServiÃ§o desejado:* ${formData.servico}`,
      "",
      "*DescriÃ§Ã£o do projeto:*",
      formData.descricao,
      "",
      "SolicitaÃ§Ã£o enviada pelo site oficial da NEXUS."
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setFormOpen(false);
  }

  function directWhatsApp() {
    const message = "OlÃ¡! Vim pelo site da Nexus Digital Ecom e gostaria de conhecer os serviÃ§os.";
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Nexus Digital Ecom - inÃ­cio">
          <img className="brand-logo" src="/images/WhatsApp Image 2026-11-17 at 22.19.06.jpeg" alt="Nexus Digital Ecom" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>InÃ­cio</a>
          <a href="#servicos" onClick={closeMenu}>ServiÃ§os</a>
          <a href="#solucoes" onClick={closeMenu}>SoluÃ§Ãµes</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <button className="button button-primary nav-quote" onClick={() => openQuote()}>
            <MessageCircle size={17} /> Solicitar orÃ§amento
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> TECNOLOGIA â€¢ INOVAÃ‡ÃƒO â€¢ SOLUÃ‡Ã•ES</div>
            <h1>Vamos transformar <em>o seu negÃ³cio?</em></h1>
            <p className="hero-description">
              Conte com a Nexus Digital Ecom para criar a soluÃ§Ã£o ideal para sua empresa.
            </p>

            <ul className="hero-points">
              <li>Sistemas personalizados</li>
              <li>Planilhas inteligentes</li>
              <li>Montagem de PCs</li>
              <li>SoluÃ§Ãµes digitais completas</li>
            </ul>

            <div className="hero-actions">
              <button className="button button-primary" onClick={() => openQuote()}>
                <MessageCircle size={18} /> Solicitar orÃ§amento <ArrowRight size={18} />
              </button>
              <a className="button button-secondary" href="#servicos">Conhecer serviÃ§os</a>
            </div>
          </div>

          <div className="hero-art hero-art-enter">
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-glow" />
            <div className="rocket-badge"><Rocket size={62} strokeWidth={1.35} /><span className="rocket-trail" /></div>
            <div className="laptop-art">
              <div className="laptop-lid">
                <img className="screen-brand-logo" src="/images/WhatsApp Image 2026-11-17 at 22.19.06 (1).jpeg" alt="Logotipo circular Nexus Digital Ecom" />
              </div>
              <div className="laptop-keyboard" />
              <div className="laptop-trackpad" />
            </div>
            <div className="art-caption">INOVAÃ‡ÃƒO QUE IMPULSIONA</div>
            <div className="floating-chip chip-one"><Cpu size={18} /> TECNOLOGIA</div>
            <div className="floating-chip chip-two"><TrendingUp size={18} /> PERFORMANCE</div>
          </div>
        </section>

        <section className="benefit-strip">
          <div><Layers3 /><strong>Mais organizaÃ§Ã£o</strong></div>
          <div><Target /><strong>Mais controle</strong></div>
          <div><TrendingUp /><strong>Mais produtividade</strong></div>
          <div><ShieldCheck /><strong>Mais resultados</strong></div>
        </section>

        <section className="services section-wrap" id="servicos">
          <div className="section-heading">
            <div className="eyebrow centered"><span /> NOSSOS SERVIÃ‡OS <span /></div>
            <h2>SoluÃ§Ãµes completas em <em>tecnologia</em></h2>
            <p>Ferramentas inteligentes para organizar, automatizar e impulsionar seu negÃ³cio.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  className="service-card"
                  key={service.title}
                  style={{ "--card-index": index }}
                >
                  <div className="service-icon"><Icon size={34} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="service-arrow"
                    onClick={() => openQuote(service.title)}
                    aria-label={`Solicitar orÃ§amento: ${service.title}`}
                  >
                    <ArrowRight size={19} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="project-cta section-wrap" id="solucoes">
          <div className="target-graphic"><Target size={58} /></div>
          <div className="project-copy">
            <h2>Tem um projeto em mente?</h2>
            <p>Conte para nÃ³s o que vocÃª precisa e receba um orÃ§amento personalizado.</p>
          </div>
          <button className="button button-primary" onClick={() => openQuote()}>
            <MessageCircle size={18} /> Solicitar orÃ§amento <ArrowRight size={18} />
          </button>
        </section>

        <section className="about section-wrap" id="sobre">
          <div className="about-intro">
            <div className="about-emblem">
            <img src="/images/WhatsApp Image 2026-11-17 at 22.19.06 (1).jpeg" alt="Logotipo circular Nexus Digital Ecom" />
            <i>TECNOLOGIA â€¢ INOVAÃ‡ÃƒO â€¢ SOLUÃ‡Ã•ES</i>
          </div>
            <div className="about-location">
              <Target size={19} />
              <span>SÃ£o Paulo â€¢ JundiaÃ­</span>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow"><span /> SOBRE A NEXUS</div>
            <h2>Tecnologia com propÃ³sito. <em>ConexÃµes que transformam.</em></h2>
            <p>
              Somos a Nexus Digital Ecom, uma empresa de tecnologia de JundiaÃ­, SÃ£o Paulo.
              Criamos soluÃ§Ãµes digitais para aproximar pessoas, ideias e negÃ³cios da tecnologia,
              com ferramentas prÃ¡ticas, modernas e pensadas para necessidades reais.
            </p>
            <div className="ceo-card">
              <span className="ceo-label">CEO â€¢ DIREÃ‡ÃƒO EXECUTIVA</span>
              <strong>Kerollyn Jamile</strong>
              <small>LideranÃ§a e desenvolvimento de soluÃ§Ãµes digitais</small>
            </div>
          </div>

          <div className="company-pillars">
            <article className="pillar-card">
              <div className="pillar-icon"><Target /></div>
              <span>01 / NOSSO OBJETIVO</span>
              <h3>Facilitar o dia a dia atravÃ©s da tecnologia</h3>
              <p>
                Desenvolver sistemas, planilhas, sites e soluÃ§Ãµes digitais que ajudem
                empresas e pessoas a trabalhar com mais organizaÃ§Ã£o, controle e produtividade.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><Layers3 /></div>
              <span>02 / NOSSA CULTURA</span>
              <h3>InovaÃ§Ã£o com proximidade</h3>
              <p>
                Valorizamos a criatividade, a escuta, a transparÃªncia, o aprendizado contÃ­nuo
                e o compromisso com cada projeto. Acreditamos que a tecnologia deve ser Ãºtil,
                acessÃ­vel e construÃ­da em parceria.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><ShieldCheck /></div>
              <span>03 / NOSSA MISSÃƒO</span>
              <h3>Transformar desafios em soluÃ§Ãµes</h3>
              <p>
                Entregar soluÃ§Ãµes tecnolÃ³gicas personalizadas que simplifiquem processos,
                fortaleÃ§am negÃ³cios e convertam ideias em resultados concretos.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><TrendingUp /></div>
              <span>04 / NOSSA VISÃƒO</span>
              <h3>Crescer e inovar junto com nossos clientes</h3>
              <p>
                Ser reconhecida pela qualidade, confianÃ§a e criatividade em soluÃ§Ãµes digitais,
                construindo relaÃ§Ãµes duradouras e contribuindo para a evoluÃ§Ã£o de negÃ³cios.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <a className="brand" href="#inicio">
          <img className="brand-logo" src="/images/WhatsApp Image 2026-11-17 at 22.19.06.jpeg" alt="Nexus Digital Ecom" />
        </a>
        <p>TECNOLOGIA â€¢ INOVAÃ‡ÃƒO â€¢ SOLUÃ‡Ã•ES</p>
        <button className="button button-primary" onClick={directWhatsApp}>
          <MessageCircle size={18} /> Fale conosco
        </button>
        <small>Â© {new Date().getFullYear()} NEXUS Digital Ecom. Todos os direitos reservados.</small>
      </footer>

      <button className="whatsapp-float" onClick={directWhatsApp} aria-label="Conversar pelo WhatsApp">
        <MessageCircle size={25} />
      </button>

      {formOpen && (
          <div
            className="modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setFormOpen(false);
            }}
          >
            <section
              className="quote-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-title"
            >
              <button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Fechar formulÃ¡rio">
                <X size={21} />
              </button>
              <div className="eyebrow"><span /> SOLICITAÃ‡ÃƒO DE ORÃ‡AMENTO</div>
              <h2 id="quote-title">Vamos tirar seu projeto do papel?</h2>
              <p className="modal-intro">
                Conte um pouco sobre o que vocÃª precisa. Sua solicitaÃ§Ã£o serÃ¡ preparada para envio pelo WhatsApp.
              </p>

              <form className="quote-form" onSubmit={submitQuote}>
                <label htmlFor="quote-name">Seu nome <b>*</b></label>
                <input id="quote-name" name="nome" value={formData.nome} onChange={updateField} placeholder="Como podemos chamar vocÃª?" required />

                <label htmlFor="quote-phone">Seu WhatsApp <b>*</b></label>
                <input id="quote-phone" name="telefone" type="tel" value={formData.telefone} onChange={updateField} placeholder="(11) 99999-9999" required />

                <label htmlFor="quote-company">Nome da empresa</label>
                <input id="quote-company" name="empresa" value={formData.empresa} onChange={updateField} placeholder="Nome da empresa (opcional)" />

                <label htmlFor="quote-service">Qual serviÃ§o vocÃª procura? <b>*</b></label>
                <select id="quote-service" name="servico" value={formData.servico} onChange={updateField} required>
                  <option value="">Selecione uma opÃ§Ã£o</option>
                  <option>CriaÃ§Ã£o de Sistemas</option>
                  <option>Planilhas Profissionais</option>
                  <option>Montagem de PCs</option>
                  <option>CriaÃ§Ã£o de Sites</option>
                  <option>AutomaÃ§Ã£o Empresarial</option>
                  <option>SoluÃ§Ãµes Digitais</option>
                  <option>Outro serviÃ§o</option>
                </select>

                <label htmlFor="quote-description">Conte sobre seu projeto <b>*</b></label>
                <textarea id="quote-description" name="descricao" value={formData.descricao} onChange={updateField} rows="4" placeholder="Descreva o que vocÃª precisa, os objetivos e os detalhes importantes..." required />

                <button className="button button-primary submit-button" type="submit">
                  <MessageCircle size={19} /> Enviar solicitaÃ§Ã£o pelo WhatsApp <ArrowRight size={18} />
                </button>
                <small className="privacy-note">Seus dados serÃ£o usados para responder Ã  sua solicitaÃ§Ã£o.</small>
              </form>
            </section>
          </div>
        )}
    </div>
  );
}

