import { useState, useEffect } from "react";
import { Check, Phone, Mail, X } from "lucide-react";
import elieteEquipe from "@/assets/img/eliete-equipe.png";
import janainaFoto from "@/assets/img/janaina.png";
import elieteFoto from "@/assets/img/eliete.png";

const FAQ_ITEMS = [
  { q: "A NR-01 já está em vigor? A partir de quando minha empresa pode ser fiscalizada?", a: "Sim. A nova redação do capítulo 1.5, que inclui expressamente os fatores de risco psicossociais no GRO/PGR, entrou em vigor em 26 de maio de 2026. A fiscalização pode ocorrer a qualquer momento." },
  { q: "Minha empresa precisa contratar um psicólogo interno para atender à NR-01?", a: "Não. A norma exige que os fatores psicossociais sejam identificados, avaliados e tratados no inventário de riscos, com método e evidências. Isso pode ser conduzido por consultoria externa especializada, como a ERF Psicologia." },
  { q: "Quanto tempo leva o diagnóstico (DRPS)?", a: "Entre 10 e 20 dias para as etapas 1, 2 e 3, dependendo do número de colaboradores, turnos e complexidade operacional. A etapa 4 (capacitação) ocorre em uma segunda fase, com planos contínuos ao longo de 12 meses." },
  { q: "O que minha empresa recebe ao final do trabalho?", a: "Insumos técnicos para o inventário de riscos do SESMT, leitura de clima e pauta de liderança para o RH, e síntese executiva com prioridades e próximos passos para a diretoria — tudo pronto para compor o PGR e sustentar auditorias." },
  { q: "O trabalho atende empresas fora de Minas Gerais?", a: "Sim. Já atuamos em mais de 200 empresas e instituições em todo o território nacional, com formato presencial ou híbrido conforme a necessidade da operação." },
  { q: "Como começar?", a: "Agende uma conversa de 30 minutos pelo WhatsApp. Em até 24 horas após a reunião, sua empresa recebe uma proposta com cronograma, entregáveis e investimento." },
];

const WHATSAPP_URL = "https://wa.me/5535988228906?text=Olá,%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20adequação%20à%20NR-01%20com%20foco%20em%20riscos%20psicossociais.";

function Section({ id, title, children, className = "" }: { id?: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 px-6 container mx-auto ${className}`}>
      <h2 className="text-4xl font-serif text-warm-white mb-12 border-b border-gold/20 pb-6">{title}</h2>
      {children}
    </section>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  const contatos = [
    { nome: "Eliete Farale", empresa: "ERF Psicologia", url: "https://wa.me/5535988228906" },
    { nome: "Janaina Miranda", empresa: "Consultoria e Treinamento JM", url: "https://wa.me/5535999200902" },
  ];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-green-premium border border-gold/30 rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        <button onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 text-warm-white/60 hover:text-gold transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center space-y-2">
          <h3 id="contact-modal-title" className="text-2xl font-serif text-warm-white">Fale com nossa equipe</h3>
          <p className="text-sm text-warm-white/70">Escolha com quem deseja conversar pelo WhatsApp.</p>
        </div>
        <div className="space-y-4">
          {contatos.map((c) => (
            <div key={c.nome} className="p-5 bg-green-olive rounded-lg border border-gold/20 flex items-center justify-between gap-4">
              <div>
                <p className="text-warm-white font-serif text-lg">{c.nome}</p>
                <p className="text-xs text-warm-white/60 uppercase tracking-widest">{c.empresa}</p>
              </div>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-green-premium px-4 py-2 rounded-lg font-bold text-sm hover:bg-gold-light shadow whitespace-nowrap">
                <Phone className="w-4 h-4" /> Conversar no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  return (
    <div className="min-h-screen bg-green-premium text-warm-white font-sans">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <header className="sticky top-0 z-50 bg-green-premium/90 backdrop-blur-md border-b border-gold/20">
        <nav className="container mx-auto py-3 flex items-center justify-between gap-6">
          <div className="flex flex-col leading-tight"><span className="text-sm md:text-base font-serif font-bold text-warm-white uppercase tracking-wide">ERF Psicologia <span className="text-gold">&</span> Consultoria e Treinamento JM</span><span className="text-[9px] md:text-[10px] text-gold tracking-widest font-medium uppercase mt-0.5">Adequação à NR-01 | Riscos Psicossociais</span></div>
          <div className="hidden lg:flex gap-5 text-sm text-warm-white/80">
            {[
              { l: "Quem Somos", h: "#quem-somos" },
              { l: "NR-01", h: "#nr01" },
              { l: "Diagnóstico", h: "#diagnostico" },
              { l: "Método", h: "#metodo" },
              { l: "Para Quem", h: "#para-quem" },
              { l: "Entregáveis", h: "#entregaveis" },
              { l: "FAQ", h: "#faq" },
              { l: "Contato", h: "#contato" },
            ].map((i) => <a key={i.l} href={i.h} className="hover:text-gold">{i.l}</a>)}
          </div>
          <button onClick={openContact} className="bg-gold text-green-premium px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-light whitespace-nowrap">Agendar conversa</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto py-14 md:py-16 grid md:grid-cols-[52fr_48fr] gap-10 md:gap-14 items-center">
        <div className="space-y-5 max-w-[620px]">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase border border-gold/20 rounded">Adequação à NR-01 para empresas</div>
          <h1 className="font-serif leading-[1.08] text-4xl md:text-5xl lg:text-[3.5rem]">Prepare sua empresa para a NR-01 com diagnóstico técnico de riscos psicossociais</h1>
          <p className="text-base md:text-lg text-warm-white/80 leading-relaxed">A ERF Psicologia e Consultoria e Treinamento JM ajudam empresas em geral — privadas, públicas, rurais e urbanas — além de indústrias, RH, SESMT e diretorias a estruturarem diagnóstico, inventário, plano de ação e treinamento para saúde mental no trabalho com segurança técnica e linguagem executiva.</p>
          <button onClick={openContact} className="inline-flex items-center gap-2 bg-gold text-green-premium px-7 py-3.5 rounded-lg font-bold text-base hover:bg-gold-light shadow-lg">
            <Phone className="w-5 h-5" /> Agendar conversa de 30 minutos
          </button>
          <p className="text-sm text-gold/70 italic">Em até 24 horas após a conversa, sua empresa recebe uma proposta com cronograma, entregáveis e investimento.</p>
        </div>
        <div className="w-full max-w-[560px] mx-auto md:ml-auto md:mr-0 aspect-[4/5] max-h-[620px] bg-green-olive rounded-lg border border-gold/30 shadow-2xl overflow-hidden">
          <img src={elieteEquipe} alt="Eliete Farale e equipe ERF Psicologia" className="w-full h-full object-cover object-center" loading="lazy" />
        </div>
      </section>


      {/* Números */}
      <section className="py-12 px-6 border-y border-gold/20 bg-green-olive/30">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "1 em 3", l: "trabalhadores brasileiros sofre com sobrecarga crônica no trabalho", f: "Fonte: OIT, 2024" },
            { n: "R$ 40 bi", l: "perdidos por ano no Brasil com afastamentos por saúde mental", f: "Fonte: INSS / CFP" },
            { n: "26/05/2026", l: "data em que a nova NR-01 entrou em vigor com exigência de inventário psicossocial", f: "Ministério do Trabalho" },
            { n: "Nenhuma", l: "empresa com PGR incompleto está segura em uma auditoria", f: "" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-2xl md:text-3xl font-serif text-gold font-bold">{s.n}</p>
              <p className="text-xs md:text-sm text-warm-white/70 uppercase tracking-widest mt-2">{s.l}</p>
              {s.f && <p className="text-[10px] text-warm-white/40 italic mt-2 normal-case tracking-normal">{s.f}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* NR-01 */}
      <Section id="nr01" title="O que mudou na NR-01 e por que sua empresa precisa agir">
        <p className="text-warm-white/80 mb-8 text-lg">
          A nova redação do capítulo 1.5 entrou em vigor em <strong className="text-gold">26 de maio de 2026</strong> e inclui expressamente fatores de risco psicossociais no GRO/PGR.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Obrigação prática", points: ["Incluir fatores psicossociais no inventário de riscos", "Avaliar organização do trabalho", "Definir medidas de prevenção"] },
            { title: "Exemplos de fatores", points: ["Sobrecarga e pressão temporal", "Assédio e conflitos", "Comunicação disfuncional"] },
            { title: "Consequência de não agir", points: ["PGR incompleto", "Liderança sem protocolo", "Aumento de passivo e afastamentos", "Multas na fiscalização"] },
          ].map((c, i) => (
            <div key={i} className="p-8 bg-green-olive rounded-xl border border-gold/20">
              <h3 className="text-gold text-xl font-serif mb-6">{c.title}</h3>
              <ul className="space-y-3">{c.points.map((p) => <li key={p} className="flex gap-2 text-sm text-warm-white/80"><Check className="text-gold w-4 h-4 shrink-0" />{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 p-6 border-l-4 border-gold bg-green-olive/50 rounded-r-lg">
          <p className="text-warm-white/90 italic font-serif text-lg leading-relaxed">
            "O ponto crítico não é só 'ter um documento'. É demonstrar método, critérios, evidências e plano de ação compatíveis com a realidade da operação."
          </p>
        </blockquote>
      </Section>

      {/* Diagnóstico */}
      <Section id="diagnostico" title="Onde a indústria perde controle">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { t: "Metas e ritmo", d: "Metas sem calibragem, urgência contínua e jornadas cognitivamente exaustivas." },
            { t: "Liderança", d: "Feedback hostil, cobrança sem critério, falha de escuta e conflitos mal conduzidos." },
            { t: "Organização do trabalho", d: "Papéis confusos, autonomia insuficiente, retrabalho e comunicação truncada entre áreas." },
            { t: "Clima e segurança psicológica", d: "Medo de reportar, silêncio organizacional e canais sem confiança." },
          ].map((item) => (
            <div key={item.t} className="p-6 bg-green-olive rounded-lg border border-gold/10">
              <h3 className="text-gold font-bold text-lg mb-2">{item.t}</h3>
              <p className="text-sm text-warm-white/70">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Método */}
      <Section id="metodo" title="Como conduzimos o projeto — modelo em 4 etapas">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { s: "01", t: "Diagnóstico", d: "Mapeamento dos fatores críticos por área." },
            { s: "02", t: "Consolidação", d: "Matriz de riscos e síntese executiva." },
            { s: "03", t: "Plano de ação", d: "Ações preventivas com responsáveis." },
            { s: "04", t: "Capacitação", d: "Treinamento de lideranças e orientação." },
          ].map((s, i) => (
            <div key={i} className="p-6 border border-gold/20 rounded-lg">
              <span className="text-gold text-2xl font-serif block mb-4">{s.s}</span>
              <h3 className="font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-warm-white/70">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-green-olive/60 border border-gold/20 rounded-lg space-y-3">
          <p className="text-sm text-warm-white/85 leading-relaxed">
            <strong className="text-gold">Prazo das etapas 1, 2 e 3 (DRPS):</strong> 10 a 20 dias, conforme número de colaboradores, turnos e complexidade operacional.
          </p>
          <p className="text-sm text-warm-white/85 leading-relaxed">
            <strong className="text-gold">Etapa 4 — Capacitação:</strong> Segunda fase pós-diagnóstico, com implantação de planos contínuos ao longo de 12 meses.
          </p>
        </div>
      </Section>

      {/* Entregáveis */}
      <Section id="entregaveis" title="Entregáveis para RH, SESMT e Diretoria">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { p: "RH", items: ["Leitura de clima e fatores críticos", "Pauta estruturada para liderança", "Base para comunicação interna"] },
            { p: "SESMT", items: ["Insumos técnicos para o inventário de riscos", "Registro de medidas de prevenção", "Rastro técnico para acompanhamento e auditoria"] },
            { p: "Diretoria", items: ["Síntese executiva com linguagem de negócio", "Prioridades, riscos e próximos passos", "Visão consolidada para tomada de decisão"] },
          ].map((c) => (
            <div key={c.p} className="p-6 bg-green-olive rounded-xl border border-gold/20">
              <h3 className="text-gold font-bold mb-4 text-lg font-serif">{c.p}</h3>
              <ul className="text-sm text-warm-white/75 space-y-2">{c.items.map((i) => <li key={i} className="flex gap-2"><Check className="text-gold w-4 h-4 shrink-0 mt-0.5" />{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Quem Somos */}
      <Section id="quem-somos" title="Quem somos">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { name: "Eliete Rezende Farale", role: "Psicóloga Clínica e Organizacional | CRP 04/67052", bio: "Atua com desenvolvimento humano há 12 anos. Já trabalhou com gestão de pessoas em organizações como a Associação a Portadores de AIDS Esperança e Vida, Star Chicken e Aeroporto Internacional de Viracopos. Levou a psicologia para mais de 200 empresas e instituições em todo o território nacional, com palestras motivacionais, SIPATs e entrevistas em rádio e TV, criando uma cultura que promove saúde mental e posiciona a empresa em um lugar de prestígio, saúde e longevidade. Experiência clínica de 13 anos no atendimento às pessoas que enfrentam diferentes tipos de dependências e comportamentos compulsivos, incluindo dependência química, alcoolismo, tabagismo, jogos de azar, uso excessivo de internet, redes sociais e outras formas de dependência comportamental.", photo: elieteFoto },
            { name: "Janaína Miranda Pereira", role: "Técnica de Segurança do Trabalho | Enfermeira | COREN MG 480.877", bio: "Enfermeira, especialista em Saúde e Segurança do Trabalho, técnica em Segurança do Trabalho pelo Senac e pós-graduada em Saúde Mental. Atua com saúde mental corporativa, apoiando empresas na identificação, documentação e gerenciamento dos riscos psicossociais relacionados ao trabalho, em conformidade com a NR-1. Há 15 anos é instrutora do Senar Minas Gerais, com treinamentos nas áreas de saúde, segurança do trabalho, sustentabilidade, inteligência emocional e saúde emocional, especialmente para o público rural, empresas e organizações ligadas ao agronegócio. Também é palestrante da Sicredi e do Sebrae, levando conteúdos sobre saúde mental, qualidade de vida, segurança do trabalho e desenvolvimento humano. Seu propósito é ajudar empresas a construírem ambientes mais seguros, saudáveis, produtivos e humanizados.", photo: janainaFoto },
          ].map((p) => (
            <div key={p.name} className="bg-green-olive rounded-xl border border-gold/20 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] bg-green-premium/60 border-b border-gold/20 overflow-hidden">
                <img src={p.photo} alt={p.name} className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif text-warm-white">{p.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-gold mt-2">{p.role}</p>
                </div>
                <p className="text-sm text-warm-white/75 leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Treinamentos e Capacitações */}
      <Section id="treinamentos" title="Treinamentos e Capacitações">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-warm-white/80 text-lg">Programas aplicados à saúde, prevenção e desenvolvimento humano</p>
          <p className="text-xs uppercase tracking-widest text-gold">Instrutora responsável: Janaina Miranda — Consultoria e Treinamento MD | Heliodora, MG</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[
            { n: "Cosméticos de Mel e Derivados da Abelha", h: "32h" },
            { n: "Cosmética Natural e Autocuidado", h: "40h" },
            { n: "Prevenção de Acidentes e Primeiros Socorros", h: "32h" },
            { n: "Plantas Medicinais", h: "40h" },
            { n: "Saúde da Mulher", h: "24h" },
            { n: "Saúde na Infância", h: "24h" },
            { n: "Saúde e Bem Estar na Pré-Adolescência (9 a 11 anos)", h: "20h" },
            { n: "Prevenção e Saúde na Adolescência (12 a 14 anos)", h: "20h" },
            { n: "Prevenção e Saúde na Adolescência (15 a 17 anos)", h: "20h" },
            { n: "Doenças Transmissíveis", h: "24h" },
            { n: "Saúde Emocional e Autocuidado", h: "24h" },
            { n: "Inteligência Emocional", h: "24h" },
            { n: "Saúde Sexual e Reprodutiva", h: "24h" },
            { n: "SOS nas Escolas (Lei Lucas)", h: "8h" },
            { n: "Palestras e Campanhas de Saúde", h: "4h" },
            { n: "Treinamento de NR-1", h: "16h" },
            { n: "Treinamento de NR-6", h: "16h" },
            { n: "Treinamento de NR-17", h: "16h" },
            { n: "Treinamento de NR-31", h: "16h" },
            { n: "Treinamento de CIPA e Assédios", h: "16h" },
          ].map((c) => (
            <div key={c.n} className="p-6 bg-green-olive rounded-xl border border-gold/30 flex flex-col justify-between gap-4 hover:border-gold/60 transition-colors">
              <h3 className="font-serif text-lg text-warm-white leading-snug">{c.n}</h3>
              <p className="text-xs uppercase tracking-widest text-gold">Carga horária: {c.h}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 space-y-3">
          <a
            href="https://wa.me/5535999200902?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20os%20treinamentos%20e%20capacita%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-green-premium px-8 py-4 rounded-lg font-bold hover:bg-gold-light shadow-lg"
          >
            Solicitar informações
          </a>
          <p className="text-xs text-warm-white/60">Treinamentos disponíveis para empresas, escolas e comunidades</p>
        </div>
      </Section>

      {/* Palestras Eliete - Campanhas e Datas de Conscientização */}
      <Section id="palestras" title="Campanhas e Datas de Conscientização">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-warm-white/80 text-lg">Desenvolvimento de palestras e ações educativas alinhadas às principais campanhas nacionais de saúde e conscientização</p>
          <p className="text-xs uppercase tracking-widest text-gold">Palestrante responsável: Eliete Rezende Farale — ERF Psicologia | Varginha, MG</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[
            { n: "Janeiro Branco", d: "Saúde Mental e Bem-Estar Emocional" },
            { n: "Maio Laranja", d: "Prevenção e Combate ao Abuso Sexual de Crianças e Adolescentes" },
            { n: "Setembro Amarelo", d: "Prevenção ao Autoextermínio e Promoção da Vida" },
            { n: "Outubro Rosa", d: "Saúde Integral da Mulher" },
            { n: "Novembro Azul", d: "Saúde Integral do Homem" },
            { n: "Álcool e Outras Drogas", d: "Campanhas de prevenção ao uso de álcool e outras drogas" },
            { n: "Saúde Mental nas Empresas", d: "Programas de promoção da saúde mental no ambiente corporativo" },
            { n: "Qualidade de Vida", d: "Campanhas de conscientização e promoção da qualidade de vida ao longo do ano, conforme as necessidades da organização" },
            { n: "Treinamento de Líderes", d: "Comunicação assertiva e não violenta" },
          ].map((c) => (
            <div key={c.n} className="p-6 bg-green-olive rounded-xl border border-gold/30 flex flex-col gap-3 hover:border-gold/60 transition-colors">
              <h3 className="font-serif text-lg text-warm-white leading-snug min-h-[3.5rem]">{c.n}</h3>
              <p className="text-sm text-warm-white/75 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 space-y-3">
          <a
            href="https://wa.me/5535999641548?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20palestras%20e%20campanhas%20de%20conscientiza%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-green-premium px-8 py-4 rounded-lg font-bold hover:bg-gold-light shadow-lg"
          >
            Solicitar informações
          </a>
          <p className="text-xs text-warm-white/60">Palestras disponíveis para empresas, escolas e comunidades</p>
        </div>
      </Section>



      {/* Para Quem */}
      <Section id="para-quem" title="Para quem é esta solução">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Indústrias", d: "Indústrias que precisam adequar o PGR à nova NR-01 com segurança técnica." },
            { t: "Equipes de RH", d: "Equipes de RH que precisam de linguagem executiva para apresentar o tema à diretoria." },
            { t: "Profissionais de SESMT", d: "Profissionais de SESMT que precisam de insumos técnicos completos para o inventário de riscos." },
            { t: "Empresas públicas", d: "Órgãos, instituições e empresas públicas que precisam estruturar ações de saúde mental, prevenção e conformidade ocupacional." },
            { t: "Empresas privadas", d: "Comércios, prestadores de serviço, escritórios, clínicas e negócios privados que precisam adequar processos à NR-01." },
            { t: "Empresas rurais e urbanas", d: "Fazendas, agronegócio, comércio urbano e demais operações rurais ou urbanas que precisam mapear riscos psicossociais." },
          ].map((p) => (
            <div key={p.t} className="p-8 bg-green-olive rounded-xl border border-gold/20">
              <h3 className="text-gold font-serif text-xl mb-3">{p.t}</h3>
              <p className="text-sm text-warm-white/80 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investimento */}
      <Section id="investimento" title="Investimento">
        <div className="max-w-3xl mx-auto p-10 bg-green-olive rounded-xl border border-gold/30 text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold">Projetos sob medida</p>
          <p className="text-3xl md:text-4xl font-serif text-warm-white">A partir de R$ 250,00</p>
          <p className="text-warm-white/75 leading-relaxed">
            O investimento depende do porte da empresa, número de colaboradores, turnos e escopo contratado.
            Em até 24 horas após uma conversa de 30 minutos, sua empresa recebe proposta detalhada com cronograma, entregáveis e investimento.
          </p>
          <button onClick={openContact} className="inline-flex items-center gap-2 bg-gold text-green-premium px-8 py-4 rounded-lg font-bold hover:bg-gold-light shadow-lg">
            <Phone className="w-5 h-5" /> Solicitar proposta
          </button>
        </div>
      </Section>

      {/* CTA Final */}
      <section id="contato" className="py-20 px-6 border-t border-gold/20 bg-green-olive/40">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-warm-white leading-tight">Vamos transformar a NR-01 em ação prática?</h2>
          <p className="text-lg text-warm-white/80">Agende uma conversa de 30 minutos. Em até 24 horas você recebe proposta com cronograma, entregáveis e investimento.</p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4 text-left">
            <a href="https://wa.me/5535988228906" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-green-premium/60 border border-gold/20 rounded-lg hover:border-gold transition-colors">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-warm-white text-sm font-semibold">(35) 9 8822-8906</p>
                <p className="text-xs text-warm-white/60">Eliete Farale</p>
              </div>
            </a>
            <a href="https://wa.me/5535999200902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-green-premium/60 border border-gold/20 rounded-lg hover:border-gold transition-colors">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-warm-white text-sm font-semibold">(35) 9 9920-0902</p>
                <p className="text-xs text-warm-white/60">Janaina Miranda</p>
              </div>
            </a>
            <a href="mailto:elietefaralepsico@hotmail.com" className="flex items-center gap-3 p-4 bg-green-premium/60 border border-gold/20 rounded-lg hover:border-gold transition-colors">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-warm-white text-sm font-semibold break-all">elietefaralepsico@hotmail.com</p>
                <p className="text-xs text-warm-white/60">Eliete Farale</p>
              </div>
            </a>
            <a href="mailto:janaina.miranda@consultoriaetreinamentojm.com.br" className="flex items-center gap-3 p-4 bg-green-premium/60 border border-gold/20 rounded-lg hover:border-gold transition-colors">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-warm-white text-sm font-semibold break-all">janaina.miranda@consultoriaetreinamentojm.com.br</p>
                <p className="text-xs text-warm-white/60">Janaina Miranda</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button onClick={openContact} className="inline-flex items-center justify-center gap-2 bg-gold text-green-premium px-8 py-4 rounded-lg font-bold hover:bg-gold-light shadow-lg">
              <Phone className="w-5 h-5" /> Falar pelo WhatsApp
            </button>
            <button onClick={openContact} className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 rounded-lg font-bold hover:bg-gold/10">
              <Mail className="w-5 h-5" /> Falar com nossa equipe
            </button>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <Section id="faq" title="Perguntas frequentes">
        <div className="grid md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="p-6 bg-green-olive rounded-xl border border-gold/20">
              <h3 className="text-gold font-serif text-lg mb-3">{item.q}</h3>
              <p className="text-sm text-warm-white/80 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Localização */}
      <section id="localizacao" className="py-16 px-6 border-t border-gold/20">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif text-warm-white">Onde estamos</h2>
            <p className="text-warm-white/70">R. Dr. José Nogueira Acaiaba, 75 - Centro, Varginha - MG, 37014-220</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <iframe
              title="Mapa - R. Dr. José Nogueira Acaiaba, 75 - Centro, Varginha - MG"
              src="https://www.google.com/maps?q=R.%20Dr.%20Jos%C3%A9%20Nogueira%20Acaiaba%2C%2075%20-%20Centro%2C%20Varginha%20-%20MG%2C%2037014-220&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gold/10 bg-green-premium">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-serif font-bold text-warm-white mb-3 uppercase tracking-widest">ERF Psicologia</p>
            <p className="text-warm-white/60">Adequação à NR-01 e Riscos Psicossociais.</p>
            <p className="text-warm-white/60 mt-2">Eliete Farale | CRP 04/67052</p>
            <p className="text-warm-white/60">Janaína Miranda Pereira | COREN MG 480.877</p>
          </div>
          <div>
            <p className="font-serif font-bold text-gold mb-3 uppercase tracking-widest text-xs">Contato</p>
            <a href="https://wa.me/5535988228906" target="_blank" rel="noopener noreferrer" className="block text-warm-white/70 hover:text-gold">WhatsApp: (35) 9 8822-8906 - Eliete Farale</a>
            <a href="https://wa.me/5535999200902?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20adequa%C3%A7%C3%A3o%20%C3%A0%20NR-01%20com%20foco%20em%20riscos%20psicossociais." target="_blank" rel="noopener noreferrer" className="block text-warm-white/70 hover:text-gold">WhatsApp: (35) 9 9920-0902 - Janaína Miranda</a>
            <a href="mailto:elietefaralepsico@hotmail.com" className="block text-warm-white/70 hover:text-gold break-all">elietefaralepsico@hotmail.com</a>
            <a href="mailto:Janaína.miranda@consultoriaetreinamentojm.com.br" className="block text-warm-white/70 hover:text-gold break-all">Janaína.miranda@consultoriaetreinamentojm.com.br</a>
          </div>
          <div>
            <p className="font-serif font-bold text-gold mb-3 uppercase tracking-widest text-xs">Endereço</p>
            <p className="text-warm-white/70 text-xs uppercase tracking-widest text-gold/80 mb-1">ERF Psicologia</p>
            <p className="text-warm-white/70">R. Dr. José Nogueira Acaiaba, 75</p>
            <p className="text-warm-white/70">Centro, Varginha - MG</p>
            <p className="text-warm-white/70">CEP 37014-220</p>
            <p className="text-warm-white/70 text-xs uppercase tracking-widest text-gold/80 mt-4 mb-1">Consultoria e Treinamento JM</p>
            <p className="text-warm-white/70">Rua Jorge Dias Chaves, 09</p>
            <p className="text-warm-white/70">Bairro Vista Verde, Heliodora - MG</p>
          </div>

        </div>
        <p className="text-center text-warm-white/40 text-xs mt-10">© {new Date().getFullYear()} ERF Psicologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
