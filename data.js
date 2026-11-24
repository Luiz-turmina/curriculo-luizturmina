/* ============================================================
   data.js — conteúdo do currículo. Fonte: "Currículo Esportivo — Luiz Gustavo
   Turmina" (.docx) + informações e fotos enviadas pelo piloto.
   Campos vazios ("") não aparecem no site nem no PDF.
   ============================================================ */
window.CV = {
  nome: "Luiz Gustavo Turmina",
  numero: "27",
  origem: "Francisco Beltrão (PR)",
  contato: { email: "luiz@blusalesgroup.com.br", telefone: "(41) 99171-4115", instagram: "@luiz_turmina" },

  perfil:
    "Piloto paranaense de Francisco Beltrão, formado no kart. Duas temporadas na Sprint Race Brasil (2017-2018), categoria nacional de turismo com V6 de 270 cv. Em 2018, aos 18 anos, encerrou em 4º lugar na classe PRO, com três vitórias na geral e oito pódios.",

  kpis: [
    { v: "4º", t: "Classe PRO", s: "Sprint Race 2018" },
    { n: 3, t: "Vitórias", s: "na classificação geral" },
    { n: 8, t: "Pódios", s: "em 2018" },
    { n: 281, t: "Pontos", s: "em 2018" }
  ],

  dados: [
    ["Origem", "Francisco Beltrão, Sudoeste do Paraná"],
    ["Número", "27"],
    ["Formação", "Kart, em provas da FPrA e da CBA"],
    ["Licença", "Cédula Desportiva Nacional, graduação PGC-B"]
  ],

  faixa: ["Kart", "Daytona", "Sprint Race", "Interlagos", "Velo Città", "Rivera", "Brasileiro de Marcas", "24 Horas do Algarve"],

  /* layout: split | split-r | video | band */
  capitulos: [
    {
      id: "kart", label: "Kart", ano: "2014–16", titulo: "Kart", sub: "A escola de pista", layout: "split",
      itens: [
        { q: "Aos 10 anos", t: "Começa no kart, em Francisco Beltrão (PR)." },
        { q: "2014", t: "Campeão do campeonato citadino de Francisco Beltrão e região.", badge: "Título" },
        { q: "2015", t: "Campeão paranaense de kart, categoria Novatos.", badge: "Título" },
        { q: "2016", t: "7º na Copa Brasil de Kart, em Cascavel. 5º no Paranaense. 2º nas 500 Milhas de Kart da Granja Viana, pela Spirit Sports." },
        { q: "2016", t: "Primeiros testes em categorias de carros." }
      ],
      fotos: [
        { src: "kart-27.jpg", cap: "Kart #27" },
        { src: "kart-pelotao.jpg", cap: "Em pelotão" },
        { src: "kart-curva.jpg", cap: "Kart" }
      ]
    },
    {
      id: "daytona", label: "Daytona", ano: "2017", titulo: "Daytona", sub: "Daytona International Speedway · Estados Unidos", layout: "video",
      itens: [{ q: "EUA", t: "Corrida no Daytona International Speedway, com vitória.", badge: "Vitória" }],
      fotos: [
        { src: "daytona-box.jpg", cap: "Daytona (EUA)" },
        { src: "daytona-arquibancada.jpg", cap: "Daytona (EUA)" }
      ],
      video: { src: "video-daytona.mp4", poster: "daytona-arquibancada.jpg" }
    },
    {
      id: "s2017", label: "2017", ano: "2017", titulo: "Sprint Race", sub: "Estreia em carros · hoje NASCAR Brasil", layout: "split-r",
      itens: [
        { q: "16 anos", t: "O piloto mais jovem a estrear na categoria naquele ano. V6 de 270 cv, classe PRO, carro #27." },
        { q: "Campeonato", t: "6º na classe PRO após 7 das 8 etapas, com 188 pontos." },
        { q: "Final Cup", t: "2º lugar no minitorneio das etapas 5 a 7.", badge: "2º" },
        { q: "Pódios", t: "Dois terceiros lugares: Curitiba e Londrina." }
      ],
      fotos: [
        { src: "2017-box.jpg", cap: "Sprint Race, 2017" },
        { src: "2017-giro.jpg", cap: "Sprint Race, 2017" },
        { src: "2017-frente.jpg", cap: "Sprint Race, 2017" }
      ]
    },
    {
      id: "s2018", label: "2018", ano: "2018", titulo: "4º na classe PRO", sub: "Sprint Race Brasil · Cimed #27", layout: "band",
      fundo: "interlagos-velocidade.jpg",
      stats: [{ n: 281, t: "pontos" }, { n: 3, t: "vitórias" }, { n: 8, t: "pódios" }, { n: 17, t: "corridas" }],
      itens: [{ q: "Também em 2018", t: "Copa Super Paraná de Kart (Shifter): 15º." }],
      paradas: [
        { local: "Rivera", pais: "Uruguai", t: "Pole e vitória na geral na corrida 2. Primeira vitória internacional da categoria.", foto: "rivera-podio.jpg", badge: "Vitória" },
        { local: "Velo Città", pais: "Mogi Guaçu, SP", t: "Vitória na classificação geral nas duas corridas.", foto: "velo-comemora.jpg", badge: "Vitória dupla" },
        { local: "Interlagos", pais: "São Paulo, SP", t: "Experiência de corrida no autódromo de Interlagos.", foto: "interlagos-frente.jpg" }
      ]
    },
    {
      id: "marcas", label: "Marcas", ano: "2018", titulo: "Brasileiro de Marcas", sub: "Max Power Racing · Renault Fluence #27", layout: "split",
      itens: [{ q: "3ª etapa", t: "Santa Cruz do Sul (RS), com o Renault Fluence #27 da Max Power Racing." }],
      fotos: [
        { src: "marcas-box.jpg", cap: "Renault Fluence #27" },
        { src: "marcas-chuva.jpg", cap: "Santa Cruz do Sul" }
      ]
    },
    {
      id: "algarve", label: "Algarve", ano: "2026", titulo: "24 Horas do Algarve", sub: "De volta às pistas, após 10 anos", layout: "split-r",
      itens: [
        { q: "Setembro", t: "2º lugar na prova de 24 horas do Algarve (Portugal).", badge: "2º" },
        { q: "Equipe", t: "Matheus Machado, Tito Morestoni, Silvio Morestoni, Átila Abreu, Eldo Umbelino e Marcelo Henriques." }
      ],
      fotos: [
        { src: "algarve-grid.jpg", cap: "Autódromo Internacional do Algarve" },
        { src: "algarve-equipe.jpg", cap: "Equipe" }
      ]
    }
  ],

  /* pos: win | pod | "" */
  resultados: [
    { data: "17/11/2018", prova: "Sprint Race · 7ª etapa", pista: "Cascavel (PR)", res: "2º lugar nas duas corridas", pos: "pod" },
    { data: "13/10/2018", prova: "Sprint Race · 6ª etapa", pista: "Velo Città, Mogi Guaçu (SP)", res: "Vitória na geral nas duas corridas", pos: "win" },
    { data: "06/05/2018", prova: "Sprint Race · 2ª etapa", pista: "Rivera (Uruguai)", res: "5º na corrida 1; pole e vitória na geral na corrida 2", pos: "win" },
    { data: "31/03/2018", prova: "Sprint Race · 1ª etapa", pista: "Curitiba (PR)", res: "4º e 3º lugares", pos: "pod" },
    { data: "27 e 28/10/2017", prova: "Sprint Race · 7ª etapa, noturna", pista: "Londrina (PR)", res: "3º e 6º lugares", pos: "pod" },
    { data: "19 e 20/08/2017", prova: "Sprint Race · 5ª etapa", pista: "Curitiba (PR)", res: "3º e 4º lugares", pos: "pod" }
  ],

  circuitos: ["Interlagos", "Velo Città", "Curitiba", "Londrina", "Cascavel", "Santa Cruz do Sul", "Rivera", "Daytona", "Algarve"],

  retrato: "retrato-pb.jpg",
  capacete: "capacete.jpg",
  hero: "hero-noite.jpg",

  galeria: [
    { src: "interlagos-pelotao.jpg", cap: "Interlagos" },
    { src: "cockpit.jpg", cap: "No cockpit" },
    { src: "interlagos-curva.jpg", cap: "Interlagos" },
    { src: "champagne.jpg", cap: "Pódio, 2018" },
    { src: "velo-podio.jpg", cap: "Velo Città" },
    { src: "interlagos-velocidade.jpg", cap: "Interlagos" },
    { src: "trofeu.jpg", cap: "2º lugar, 2018" },
    { src: "marcas-chuva.jpg", cap: "Brasileiro de Marcas" },
    { src: "interlagos-grid.jpg", cap: "Interlagos" },
    { src: "kart-detalhe.jpg", cap: "Kart" },
    { src: "velo-capacete.jpg", cap: "Velo Città" },
    { src: "marcas-box.jpg", cap: "Brasileiro de Marcas" }
  ]
};
