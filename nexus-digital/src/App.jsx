import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, Bot, Check, ChevronRight, Code2, Cpu, Database, FileSpreadsheet,
  Gauge, Layers3, Menu, MessageCircle, Monitor, Rocket, Send, ShieldCheck,
  Smartphone, Sparkles, Target, TrendingUp, X, Zap
} from "lucide-react";
import "./App.css";
import "./AppV2.css";

const WHATSAPP = "5511988301555";
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Code2, title: "Criação de Sistemas", description: "Sistemas personalizados para organizar processos e administrar sua empresa.", tag: "Soluções sob medida" },
  { icon: FileSpreadsheet, title: "Planilhas Profissionais", description: "Planilhas inteligentes, automações e controles feitos sob medida.", tag: "Dados sob controle" },
  { icon: Monitor, title: "Montagem de PCs", description: "Computadores personalizados para trabalho, estudo, criação e jogos.", tag: "Performance ideal" },
  { icon: Layers3, title: "Sites e Presença Digital", description: "Sites modernos, responsivos e preparados para apresentar sua marca.", tag: "Sua marca online" },
  { icon: Zap, title: "Automação Empresarial", description: "Menos tarefas repetitivas e mais tempo para o que faz seu negócio crescer.", tag: "Mais produtividade" },
  { icon: Database, title: "Gestão e Integrações", description: "Informações conectadas para facilitar decisões e rotinas.", tag: "Tudo conectado" }
];

const projects = [
  { type: "Sistemas", title: "Financeiro — Mais Fórmula", description: "Painel de gestão financeira com caixa, vendas, despesas e relatórios.", image: "/images/financeiro-mais-formula.jpg", status: "Projeto real", alt: "Tela real do módulo financeiro Mais Fórmula" },
  { type: "Sistemas", title: "Ponto eletrônico — Mais Fórmula", description: "Controle de jornadas, espelho mensal, banco de horas e acompanhamento da equipe.", image: "/images/ponto-mais-formula.jpg", status: "Projeto real", alt: "Tela real do sistema de ponto Mais Fórmula" },
  { type: "Sistemas", title: "CRM com redes sociais", description: "Conceito de CRM para centralizar contatos, conversas e canais sociais.", image: "/images/crm-social.png", status: "Conceito demonstrativo", alt: "Conceito visual de CRM integrado a redes sociais" },
  { type: "Web", title: "Site institucional", description: "Exemplo de presença digital moderna para apresentar serviços e captar clientes.", image: "/images/site-exemplo.png", status: "Conceito demonstrativo", alt: "Conceito visual de site institucional" },
  { type: "Sistemas", title: "Estoque e pedidos", description: "Exemplo de painel para acompanhar produtos, movimentações e pedidos.", image: "/images/estoque-pedidos.png", status: "Conceito demonstrativo", alt: "Conceito visual de controle de estoque e pedidos" },
  { type: "Planilhas", title: "Indicadores e análises", description: "Exemplo de painel analítico para acompanhar metas e indicadores.", image: "/images/planilhas-analises.png", status: "Conceito demonstrativo", alt: "Conceito visual de painel de indicadores" }
];

const demoTabs = [
  { id: "financeiro", label: "Financeiro", icon: TrendingUp, metric: "R$ 24.850,00", caption: "Entradas no período", bars: [38, 58, 46, 78, 61, 88, 70] },
  { id: "estoque", label: "Estoque", icon: Database, metric: "1.284 itens", caption: "Itens cadastrados", bars: [68, 42, 75, 55, 86, 63, 92] },
  { id: "equipe", label: "Equipe", icon: ShieldCheck, metric: "96,8%", caption: "Presença registrada", bars: [84, 91, 72, 95, 88, 97, 93] }
];
const emptyForm = { nome: "", telefone: "", empresa: "", servico: "", prazo: "", descricao: "" };

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [filter, setFilter] = useState("Todos");
  const [demo, setDemo] = useState("financeiro");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatTopic, setChatTopic] = useState("");
  const [imageOpen, setImageOpen] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const shownProjects = useMemo(() => filter === "Todos" ? projects : projects.filter((p) => p.type === filter), [filter]);
  const activeDemo = demoTabs.find((tab) => tab.id === demo) || demoTabs[0];

  function openQuote(service = "") {
    setForm({ ...emptyForm, servico: service });
    setMenuOpen(false);
    setChatOpen(false);
    setFormOpen(true);
  }
  function openWhatsApp(message = "Olá! Vim pelo site da NEXUS Digital Ecom e gostaria de conhecer os serviços.") {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  function submitQuote(event) {
    event.preventDefault();
    const message = [
      "*NOVA SOLICITAÇÃO DE ORÇAMENTO — NEXUS DIGITAL ECOM*", "",
      `*Nome:* ${form.nome}`, `*WhatsApp:* ${form.telefone}`,
      `*Empresa:* ${form.empresa || "Não informado"}`, `*Serviço:* ${form.servico}`,
      `*Quando deseja começar:* ${form.prazo || "A combinar"}`, "",
      "*Sobre o projeto:*", form.descricao, "", "Enviado pelo site da NEXUS."
    ].join("\n");
    openWhatsApp(message);
    setFormOpen(false);
  }
  const updateForm = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell nexus-v2">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="NEXUS Digital Ecom - início">
          <img className="brand-logo" src="/images/nexus-logo-horizontal.jpeg" alt="NEXUS Digital Ecom" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a><a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#portfolio" onClick={closeMenu}>Portfólio</a><a href="#demonstracao" onClick={closeMenu}>Demonstração</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <button className="button button-primary nav-quote" onClick={() => openQuote()}><MessageCircle size={16} /> Fazer orçamento</button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</div>
            <h1>Ideias inteligentes.<em>Resultados extraordinários.</em></h1>
            <p className="hero-description">A tecnologia certa pode mudar a forma como sua empresa trabalha. Criamos sistemas, automações e experiências digitais pensadas para desafios reais.</p>
            <div className="hero-points"><span><Check /> Soluções sob medida</span><span><Check /> Atendimento próximo</span><span><Check /> Tecnologia que simplifica</span></div>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => openQuote()}>Quero tirar minha ideia do papel <ArrowRight size={18} /></button>
              <a className="button button-secondary" href="#portfolio"><Sparkles size={17} /> Explorar soluções</a>
            </div>
            <div className="hero-trust"><span className="trust-dot" /> TECNOLOGIA FEITA PARA PESSOAS E NEGÓCIOS</div>
          </div>
          <div className="hero-art hero-art-enter">
            <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-glow" />
            <div className="rocket-badge"><Rocket size={62} strokeWidth={1.35} /><span className="rocket-trail" /></div>
            <div className="nexus-core"><div className="core-ring ring-one" /><div className="core-ring ring-two" />
              <div className="core-center"><img src="/images/nexus-logo-circular.jpeg" alt="Símbolo NEXUS" /></div>
              <span className="core-node node-one"><Code2 /></span><span className="core-node node-two"><Cpu /></span><span className="core-node node-three"><Database /></span>
            </div>
            <div className="floating-chip chip-one"><Cpu size={17} /> IDEIAS</div><div className="floating-chip chip-two"><TrendingUp size={17} /> EVOLUÇÃO</div>
            <div className="art-caption">CONECTANDO IDEIAS AO FUTURO</div>
          </div>
        </section>

        <section className="benefit-strip"><div><Layers3 /><strong>Mais organização</strong></div><div><Target /><strong>Mais controle</strong></div><div><TrendingUp /><strong>Mais produtividade</strong></div><div><ShieldCheck /><strong>Mais confiança</strong></div></section>

        <section className="services section-wrap" id="servicos">
          <div className="section-heading reveal"><div className="eyebrow centered"><span /> O QUE FAZEMOS <span /></div><h2>Tecnologia para levar seu negócio <em>mais longe.</em></h2><p>Escolha o desafio. A NEXUS ajuda a construir o caminho.</p></div>
          <div className="service-grid">{services.map((service, index) => { const Icon = service.icon; return <article className="service-card reveal" key={service.title} style={{ "--card-index": index }}>
            <div className="service-icon"><Icon size={29} /></div><span className="service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.description}</p>
            <button className="service-arrow" onClick={() => openQuote(service.title)} aria-label={`Pedir orçamento: ${service.title}`}><ArrowRight size={19} /></button>
          </article>; })}</div>
        </section>

        <section className="portfolio-section section-wrap" id="portfolio">
          <div className="section-heading reveal"><div className="eyebrow centered"><span /> PROJETOS E POSSIBILIDADES <span /></div><h2>Conheça o que podemos <em>construir juntos.</em></h2><p>Projetos desenvolvidos e conceitos visuais para mostrar possibilidades de soluções digitais.</p></div>
          <div className="portfolio-filters">{["Todos", "Sistemas", "Planilhas", "Web"].map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <div className="portfolio-grid">{shownProjects.map((project) => <article className="portfolio-card reveal" key={project.title}>
            <button className="portfolio-image-button" onClick={() => setImageOpen(project)} aria-label={`Ampliar imagem: ${project.title}`}>
              <img src={project.image} alt={project.alt} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
              <span className={project.status === "Projeto real" ? "project-status real" : "project-status"}>{project.status}</span>
              <span className="image-zoom">Ampliar imagem <ArrowRight size={14} /></span>
            </button>
            <div className="portfolio-info"><span>{project.type.toUpperCase()}</span><h3>{project.title}</h3><p>{project.description}</p><button onClick={() => openQuote(project.title)}>Quero algo assim <ArrowRight size={16} /></button></div>
          </article>)}</div>
          <p className="portfolio-note"><Sparkles size={15} /> Os projetos Mais Fórmula são telas reais fornecidas pela equipe. Os demais são conceitos demonstrativos, não entregas ou clientes fictícios.</p>
        </section>

        <section className="demo-section section-wrap" id="demonstracao">
          <div className="demo-copy reveal"><div className="eyebrow"><span /> EXPERIMENTE UMA IDEIA</div><h2>Imagine sua empresa com tudo <em>sob controle.</em></h2>
            <p>Explore este painel fictício e veja como uma solução digital pode organizar informações importantes em um só lugar.</p>
            <ul className="demo-checks"><li><Check /> Informações organizadas</li><li><Check /> Indicadores de fácil leitura</li><li><Check /> Visão adaptada ao seu negócio</li></ul>
            <button className="button button-primary" onClick={() => openQuote("Sistema personalizado")}>Quero um sistema assim <ArrowRight size={17} /></button>
          </div>
          <div className="dashboard-demo reveal"><div className="dashboard-head"><div><span className="dashboard-status" /> PAINEL INTERATIVO <small>DEMONSTRAÇÃO</small></div><span className="dashboard-dots">•••</span></div>
            <div className="dashboard-tabs">{demoTabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} className={demo === tab.id ? "selected" : ""} onClick={() => setDemo(tab.id)}><Icon size={15} /> {tab.label}</button>; })}</div>
            <div className="dashboard-metric"><div><small>{activeDemo.caption}</small><strong>{activeDemo.metric}</strong><span><TrendingUp size={14} /> Indicador ilustrativo</span></div><div className="metric-icon"><Gauge /></div></div>
            <div className="chart-title"><b>Atividade demonstrativa</b><small>Últimos 7 períodos</small></div>
            <div className="demo-chart" aria-label="Gráfico ilustrativo">{activeDemo.bars.map((height, index) => <div className="chart-column" key={index}><i style={{ height: `${height}%` }} /><small>{["S","T","Q","Q","S","S","D"][index]}</small></div>)}</div>
            <div className="dashboard-foot"><span><span className="dashboard-status" /> Dados fictícios para demonstração</span><span>NEXUS UI</span></div>
          </div>
        </section>

        <section className="testimonial-section section-wrap"><div className="testimonial-inner reveal"><div className="testimonial-symbol"><MessageCircle size={34} /></div>
          <div><div className="eyebrow"><span /> CONEXÕES QUE CONSTROEM</div><h2>Uma boa solução começa <em>com uma boa conversa.</em></h2><p>Estamos construindo nossa história com cada projeto e cada parceria. Em breve, esta área reunirá avaliações reais e autorizadas de clientes.</p></div>
          <button className="button button-secondary" onClick={() => openWhatsApp("Olá! Quero conversar sobre um projeto e conhecer a NEXUS.")}>Fale com a NEXUS <ArrowRight size={17} /></button>
        </div><p className="testimonial-note">Depoimentos serão publicados somente com autorização dos clientes.</p></section>

        <section className="project-cta section-wrap" id="contato"><div className="target-graphic"><Target size={54} /></div><div className="project-copy"><h2>Sua próxima ideia pode começar aqui.</h2><p>Explique o que sua empresa precisa. Vamos pensar na solução juntos.</p></div><button className="button button-primary" onClick={() => openQuote()}>Solicitar orçamento <ArrowRight size={18} /></button></section>

        <section className="about section-wrap" id="sobre">
          <div className="about-intro"><div className="about-emblem"><img src="/images/nexus-logo-circular.jpeg" alt="Logotipo NEXUS Digital Ecom" /><i>TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</i></div><div className="about-location"><Target size={19} /><span>Jundiaí • São Paulo</span></div></div>
          <div className="about-copy"><div className="eyebrow"><span /> SOBRE A NEXUS</div><h2>Tecnologia com propósito. <em>Conexões que transformam.</em></h2><p>Somos a NEXUS Digital Ecom. Criamos soluções digitais para aproximar pessoas, ideias e negócios da tecnologia, com ferramentas práticas, modernas e pensadas para necessidades reais.</p><div className="ceo-card"><span className="ceo-label">CEO • DIREÇÃO EXECUTIVA</span><strong>Kerollyn Jamile</strong><small>Liderança e desenvolvimento de soluções digitais</small></div></div>
          <div className="company-pillars">
            <article className="pillar-card"><div className="pillar-icon"><Target /></div><span>01 / OBJETIVO</span><h3>Facilitar o dia a dia através da tecnologia</h3><p>Sistemas, planilhas, sites e soluções digitais para mais organização e produtividade.</p></article>
            <article className="pillar-card"><div className="pillar-icon"><Layers3 /></div><span>02 / CULTURA</span><h3>Inovação com proximidade</h3><p>Escuta, transparência e compromisso em cada etapa do projeto.</p></article>
            <article className="pillar-card"><div className="pillar-icon"><ShieldCheck /></div><span>03 / MISSÃO</span><h3>Transformar desafios em soluções</h3><p>Simplificar processos e converter ideias em ferramentas úteis.</p></article>
            <article className="pillar-card"><div className="pillar-icon"><TrendingUp /></div><span>04 / VISÃO</span><h3>Crescer junto com nossos clientes</h3><p>Construir relações duradouras por meio da qualidade e criatividade.</p></article>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#inicio"><img className="brand-logo" src="/images/nexus-logo-horizontal.jpeg" alt="NEXUS Digital Ecom" /></a><p>TECNOLOGIA • INOVAÇÃO • SOLUÇÕES</p>
        <div className="footer-links"><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#sobre">Sobre</a><button onClick={() => openWhatsApp()}>WhatsApp</button></div>
        <small>© {new Date().getFullYear()} NEXUS Digital Ecom. Todos os direitos reservados.</small>
      </footer>

      <button className="whatsapp-float" onClick={() => openWhatsApp()} aria-label="Conversar pelo WhatsApp"><MessageCircle size={25} /></button>
      <div className="chat-launcher">{chatOpen && <section className="chat-panel" aria-label="Atendimento NEXUS">
        <div className="chat-panel-head"><div className="chat-avatar"><Bot size={21} /></div><div><strong>Atendimento NEXUS</strong><small>Vamos encontrar o melhor caminho</small></div><button onClick={() => setChatOpen(false)} aria-label="Fechar atendimento"><X size={18} /></button></div>
        <div className="chat-body"><div className="chat-message">Olá! 👋 Que bom ter você aqui. Como podemos ajudar?</div><p>Escolha o assunto:</p>
          {["Quero criar um sistema", "Preciso de um site", "Quero uma planilha", "Montagem ou manutenção de PC", "Tenho outra ideia"].map((topic) => <button className={chatTopic === topic ? "chosen" : ""} key={topic} onClick={() => setChatTopic(topic)}>{topic}<ChevronRight size={15} /></button>)}
        </div><button className="chat-send" disabled={!chatTopic} onClick={() => openWhatsApp(`Olá! Vim pelo atendimento do site da NEXUS. Assunto: ${chatTopic}. Gostaria de conversar.`)}>Continuar pelo WhatsApp <Send size={16} /></button>
        <small className="chat-disclaimer">Atendimento inicial guiado; a conversa continua no WhatsApp.</small>
      </section>}<button className="chat-toggle" onClick={() => setChatOpen((v) => !v)} aria-label={chatOpen ? "Fechar chat" : "Abrir chat"}>{chatOpen ? <X /> : <MessageCircle />}<span>{chatOpen ? "Fechar" : "Como podemos ajudar?"}</span></button></div>

      {imageOpen && <div className="image-lightbox" onMouseDown={(event) => { if (event.target === event.currentTarget) setImageOpen(null); }}><button onClick={() => setImageOpen(null)} aria-label="Fechar imagem"><X /></button><img src={imageOpen.image} alt={imageOpen.alt} /><div><strong>{imageOpen.title}</strong><span>{imageOpen.status}</span></div></div>}

      {formOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setFormOpen(false); }}><section className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Fechar formulário"><X size={21} /></button><div className="eyebrow"><span /> ORÇAMENTO INTELIGENTE</div><h2 id="quote-title">Vamos tirar seu projeto do papel?</h2><p className="modal-intro">Responda algumas perguntas. Vamos organizar as informações para agilizar seu atendimento.</p>
        <form className="quote-form" onSubmit={submitQuote}>
          <label htmlFor="quote-name">Seu nome <b>*</b></label><input id="quote-name" name="nome" value={form.nome} onChange={updateForm} placeholder="Como podemos chamar você?" required />
          <label htmlFor="quote-phone">Seu WhatsApp <b>*</b></label><input id="quote-phone" name="telefone" type="tel" value={form.telefone} onChange={updateForm} placeholder="(11) 99999-9999" required />
          <label htmlFor="quote-company">Empresa</label><input id="quote-company" name="empresa" value={form.empresa} onChange={updateForm} placeholder="Nome da empresa (opcional)" />
          <label htmlFor="quote-service">O que você precisa? <b>*</b></label><select id="quote-service" name="servico" value={form.servico} onChange={updateForm} required><option value="">Selecione uma solução</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Outro projeto</option></select>
          <label htmlFor="quote-deadline">Quando deseja começar?</label><select id="quote-deadline" name="prazo" value={form.prazo} onChange={updateForm}><option value="">A combinar</option><option>O quanto antes</option><option>Nas próximas semanas</option><option>Nos próximos meses</option><option>Estou pesquisando possibilidades</option></select>
          <label htmlFor="quote-description">Conte um pouco sobre sua ideia <b>*</b></label><textarea id="quote-description" name="descricao" value={form.descricao} onChange={updateForm} rows="4" placeholder="Qual problema deseja resolver? O que gostaria que a solução fizesse?" required />
          <button className="button button-primary submit-button" type="submit"><MessageCircle size={18} /> Preparar mensagem no WhatsApp <ArrowRight size={18} /></button><small className="privacy-note">Os dados serão usados para responder à sua solicitação. O envio acontece pelo WhatsApp.</small>
        </form>
      </section></div>}
    </div>
  );
}
