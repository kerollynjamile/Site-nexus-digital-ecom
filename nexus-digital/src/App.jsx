 import React, { useState } from "react";
import {
  ArrowRight, Code2, Cpu, Layers3, Menu, MessageCircle, Monitor,
  ShieldCheck, Table2, Target, TrendingUp, X
} from "lucide-react";
import "./App.css";

const WHATSAPP = "5511988301555";

const services = [
  {
    icon: Code2,
    title: "Criação de Sistemas",
    description: "Sistemas personalizados para organizar processos e administrar sua empresa."
  },
  {
    icon: Table2,
    title: "Planilhas Profissionais",
    description: "Planilhas inteligentes, automações e controles feitos sob medida."
  },
  {
    icon: Monitor,
    title: "Montagem de PCs",
    description: "Computadores personalizados para trabalho, estudo, criação e jogos."
  },
  {
    icon: Layers3,
    title: "Soluções Digitais",
    description: "Sites, ferramentas e projetos tecnológicos para impulsionar seu negócio."
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
      "*NOVA SOLICITAÇÃO DE ORÇAMENTO*",
      "*NEXUS DIGITAL ECOM*",
      "",
      `*Nome:* ${formData.nome}`,
      `*WhatsApp:* ${formData.telefone}`,
      `*Empresa:* ${formData.empresa || "Não informado"}`,
      `*Serviço desejado:* ${formData.servico}`,
      "",
      "*Descrição do projeto:*",
      formData.descricao,
      "",
      "Solicitação enviada pelo site oficial da NEXUS."
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setFormOpen(false);
  }

  function directWhatsApp() {
    const message = "Olá! Vim pelo site da Nexus Digital Ecom e gostaria de conhecer os serviços.";
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
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Nexus Digital Ecom - início">
          <img className="brand-logo" src="/images/nexus-logo-horizontal.jpeg" alt="Nexus Digital Ecom" />
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
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#solucoes" onClick={closeMenu}>Soluções</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <button className="button button-primary nav-quote" onClick={() => openQuote()}>
            <MessageCircle size={17} /> Solicitar orçamento
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</div>
            <h1>Vamos transformar <em>o seu negócio?</em></h1>
            <p className="hero-description">
              Conte com a Nexus Digital Ecom para criar a solução ideal para sua empresa.
            </p>

            <ul className="hero-points">
              <li>Sistemas personalizados</li>
              <li>Planilhas inteligentes</li>
              <li>Montagem de PCs</li>
              <li>Soluções digitais completas</li>
            </ul>

            <div className="hero-actions">
              <button className="button button-primary" onClick={() => openQuote()}>
                <MessageCircle size={18} /> Solicitar orçamento <ArrowRight size={18} />
              </button>
              <a className="button button-secondary" href="#servicos">Conhecer serviços</a>
            </div>
          </div>

          <div className="hero-art hero-art-enter">
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-glow" />
            <div className="laptop-art">
              <div className="laptop-lid">
                <img className="screen-brand-logo" src="/images/nexus-logo-circular.jpeg" alt="Logotipo circular Nexus Digital Ecom" />
              </div>
              <div className="laptop-keyboard" />
              <div className="laptop-trackpad" />
            </div>
            <div className="art-caption">INOVAÇÃO QUE IMPULSIONA</div>
            <div className="floating-chip chip-one"><Cpu size={18} /> TECNOLOGIA</div>
            <div className="floating-chip chip-two"><TrendingUp size={18} /> PERFORMANCE</div>
          </div>
        </section>

        <section className="benefit-strip">
          <div><Layers3 /><strong>Mais organização</strong></div>
          <div><Target /><strong>Mais controle</strong></div>
          <div><TrendingUp /><strong>Mais produtividade</strong></div>
          <div><ShieldCheck /><strong>Mais resultados</strong></div>
        </section>

        <section className="services section-wrap" id="servicos">
          <div className="section-heading">
            <div className="eyebrow centered"><span /> NOSSOS SERVIÇOS <span /></div>
            <h2>Soluções completas em <em>tecnologia</em></h2>
            <p>Ferramentas inteligentes para organizar, automatizar e impulsionar seu negócio.</p>
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
                    aria-label={`Solicitar orçamento: ${service.title}`}
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
            <p>Conte para nós o que você precisa e receba um orçamento personalizado.</p>
          </div>
          <button className="button button-primary" onClick={() => openQuote()}>
            <MessageCircle size={18} /> Solicitar orçamento <ArrowRight size={18} />
          </button>
        </section>

        <section className="about section-wrap" id="sobre">
          <div className="about-intro">
            <div className="about-emblem">
            <img src="/images/nexus-logo-circular.jpeg" alt="Logotipo circular Nexus Digital Ecom" />
            <i>TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</i>
          </div>
            <div className="about-location">
              <Target size={19} />
              <span>São Paulo • Jundiaí</span>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow"><span /> SOBRE A NEXUS</div>
            <h2>Tecnologia com propósito. <em>Conexões que transformam.</em></h2>
            <p>
              Somos a Nexus Digital Ecom, uma empresa de tecnologia de Jundiaí, São Paulo.
              Criamos soluções digitais para aproximar pessoas, ideias e negócios da tecnologia,
              com ferramentas práticas, modernas e pensadas para necessidades reais.
            </p>
            <div className="ceo-card">
              <span className="ceo-label">CEO • DIREÇÃO EXECUTIVA</span>
              <strong>Kerollyn Jamile</strong>
              <small>Liderança e desenvolvimento de soluções digitais</small>
            </div>
          </div>

          <div className="company-pillars">
            <article className="pillar-card">
              <div className="pillar-icon"><Target /></div>
              <span>01 / NOSSO OBJETIVO</span>
              <h3>Facilitar o dia a dia através da tecnologia</h3>
              <p>
                Desenvolver sistemas, planilhas, sites e soluções digitais que ajudem
                empresas e pessoas a trabalhar com mais organização, controle e produtividade.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><Layers3 /></div>
              <span>02 / NOSSA CULTURA</span>
              <h3>Inovação com proximidade</h3>
              <p>
                Valorizamos a criatividade, a escuta, a transparência, o aprendizado contínuo
                e o compromisso com cada projeto. Acreditamos que a tecnologia deve ser útil,
                acessível e construída em parceria.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><ShieldCheck /></div>
              <span>03 / NOSSA MISSÃO</span>
              <h3>Transformar desafios em soluções</h3>
              <p>
                Entregar soluções tecnológicas personalizadas que simplifiquem processos,
                fortaleçam negócios e convertam ideias em resultados concretos.
              </p>
            </article>

            <article className="pillar-card">
              <div className="pillar-icon"><TrendingUp /></div>
              <span>04 / NOSSA VISÃO</span>
              <h3>Crescer e inovar junto com nossos clientes</h3>
              <p>
                Ser reconhecida pela qualidade, confiança e criatividade em soluções digitais,
                construindo relações duradouras e contribuindo para a evolução de negócios.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <a className="brand" href="#inicio">
          <img className="brand-logo" src="/images/nexus-logo-horizontal.jpeg" alt="Nexus Digital Ecom" />
        </a>
        <p>TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</p>
        <button className="button button-primary" onClick={directWhatsApp}>
          <MessageCircle size={18} /> Fale conosco
        </button>
        <small>© {new Date().getFullYear()} NEXUS Digital Ecom. Todos os direitos reservados.</small>
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
              <button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Fechar formulário">
                <X size={21} />
              </button>
              <div className="eyebrow"><span /> SOLICITAÇÃO DE ORÇAMENTO</div>
              <h2 id="quote-title">Vamos tirar seu projeto do papel?</h2>
              <p className="modal-intro">
                Conte um pouco sobre o que você precisa. Sua solicitação será preparada para envio pelo WhatsApp.
              </p>

              <form className="quote-form" onSubmit={submitQuote}>
                <label htmlFor="quote-name">Seu nome <b>*</b></label>
                <input id="quote-name" name="nome" value={formData.nome} onChange={updateField} placeholder="Como podemos chamar você?" required />

                <label htmlFor="quote-phone">Seu WhatsApp <b>*</b></label>
                <input id="quote-phone" name="telefone" type="tel" value={formData.telefone} onChange={updateField} placeholder="(11) 99999-9999" required />

                <label htmlFor="quote-company">Nome da empresa</label>
                <input id="quote-company" name="empresa" value={formData.empresa} onChange={updateField} placeholder="Nome da empresa (opcional)" />

                <label htmlFor="quote-service">Qual serviço você procura? <b>*</b></label>
                <select id="quote-service" name="servico" value={formData.servico} onChange={updateField} required>
                  <option value="">Selecione uma opção</option>
                  <option>Criação de Sistemas</option>
                  <option>Planilhas Profissionais</option>
                  <option>Montagem de PCs</option>
                  <option>Criação de Sites</option>
                  <option>Automação Empresarial</option>
                  <option>Soluções Digitais</option>
                  <option>Outro serviço</option>
                </select>

                <label htmlFor="quote-description">Conte sobre seu projeto <b>*</b></label>
                <textarea id="quote-description" name="descricao" value={formData.descricao} onChange={updateField} rows="4" placeholder="Descreva o que você precisa, os objetivos e os detalhes importantes..." required />

                <button className="button button-primary submit-button" type="submit">
                  <MessageCircle size={19} /> Enviar solicitação pelo WhatsApp <ArrowRight size={18} />
                </button>
                <small className="privacy-note">Seus dados serão usados para responder à sua solicitação.</small>
              </form>
            </section>
          </div>
        )}
    </div>
  );
}
