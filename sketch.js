// =====================================
// VARIÁVEIS
// =====================================

let nuvens = [];
let particulas = [];

let temaEscuro = false;
let clima = "sol";
let vacaX = 0;
let anguloArvore = 0;
let direcaoArvore = 1;


// =====================================
// SETUP
// =====================================

function setup() {
  // Conecta o botão do HTML à função
let btnCuriosidade = document.getElementById("curiosidadeBtn");
btnCuriosidade.addEventListener("click", mostrarCuriosidade);

  let canvas = createCanvas(500, 400);

  canvas.parent("canvasContainer");

  // NUVENS
  for(let i = 0; i < 6; i++){

    nuvens.push({
      x: random(width),
      y: random(40, 160),
      vel: random(0.3, 1)
    });

  }

  // PARTÍCULAS
  for(let i = 0; i < 40; i++){

    particulas.push({
      x: random(width),
      y: random(height),
      size: random(4, 10),
      speed: random(0.5, 2)
    });

  }

  // BOTÃO TEMA
  let temaBtn = document.getElementById("temaBtn");

  temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    temaEscuro = !temaEscuro;

  });

  // BOTÃO EXPLORAR
  let explorarBtn = document.getElementById("explorarBtn");

  explorarBtn.addEventListener("click", () => {

    alert(
      "🌱 O Agro Sustentável une tecnologia, produção e preservação da natureza!"
    );

  });

  // CHAT IA
  let enviarBtn = document.getElementById("enviarBtn");

  enviarBtn.addEventListener("click", responderPergunta);

}

// =====================================
// DRAW
// =====================================

function draw() {

  desenharCeu();

  desenharSol();

  desenharMontanhas();

  desenharPlantacao();

  desenharCasa();

  desenharArvore();

  desenharNuvens();

  desenharParticulas();

if(clima === "chuva"){
  desenharChuva();
}
  desenharFazendaViva();
  
  }

// =====================================
// CÉU
// =====================================

function desenharCeu(){

  if(clima === "sol"){
    background(135, 206, 235);
  }

  else if(clima === "chuva"){
    background(90, 120, 160);
  }

  else if(clima === "nublado"){
    background(180, 180, 180);
  }

  else if(clima === "noite"){
    background(10, 15, 40);
  }

}

// =====================================
// SOL
// =====================================

function desenharSol(){

  noStroke();

  fill(255, 204, 0);

  ellipse(420, 80, 90);

  // BRILHO

  fill(255, 230, 120, 120);

  ellipse(420, 80, 130);

}

// =====================================
// MONTANHAS
// =====================================

function desenharMontanhas(){

  noStroke();

  fill(70, 130, 70);

  triangle(0, 300, 120, 150, 240, 300);

  triangle(150, 300, 300, 120, 450, 300);

  triangle(280, 300, 420, 170, 550, 300);

}

// =====================================
// PLANTAÇÃO
// =====================================

function desenharPlantacao(){

  fill(60, 179, 113);

  rect(0, 300, width, 100);

  // LINHAS DA PLANTAÇÃO

  stroke(30, 120, 50);

  strokeWeight(2);

  for(let i = 0; i < width; i += 20){

    line(i, 300, i - 20, 400);

  }

}

// =====================================
// CASA
// =====================================

function desenharCasa(){

  // CASA

  fill(210, 180, 140);

  rect(180, 220, 100, 80);

  // TELHADO

  fill(150, 50, 50);

  triangle(170, 220, 230, 170, 290, 220);

  // PORTA

  fill(100, 60, 30);

  rect(215, 255, 25, 45);

  // JANELAS

  fill(173, 216, 230);

  rect(190, 240, 20, 20);

  rect(250, 240, 20, 20);

}

// =====================================
// ÁRVORE
// =====================================

function desenharArvore(){

  // TRONCO

  fill(101, 67, 33);

  rect(90, 230, 20, 70);

  // COPA

  fill(34, 139, 34);

  ellipse(100, 210, 80);

  ellipse(70, 220, 60);

  ellipse(130, 220, 60);

}

// =====================================
// NUVENS
// =====================================

function desenharNuvens(){

  for(let nuvem of nuvens){

    fill(255);

    noStroke();

    ellipse(nuvem.x, nuvem.y, 60, 40);
    ellipse(nuvem.x + 25, nuvem.y, 50, 35);
    ellipse(nuvem.x - 25, nuvem.y, 50, 35);

    nuvem.x += nuvem.vel;

    // LOOP

    if(nuvem.x > width + 50){

      nuvem.x = -60;

    }

  }

}

// =====================================
// PARTÍCULAS
// =====================================

function desenharParticulas(){

  noStroke();

  for(let p of particulas){

    fill(255, 255, 255, 120);

    ellipse(p.x, p.y, p.size);

    p.y -= p.speed;

    if(p.y < -10){

      p.y = height + 10;

      p.x = random(width);

    }

  }

}

// =====================================
// IA DO AGRO
// =====================================

function responderPergunta(){

  let input = document.getElementById("perguntaInput");

  let pergunta = input.value.toLowerCase();

  if(pergunta.trim() === ""){

    return;

  }

  adicionarMensagem(pergunta, "user");

  let resposta = gerarResposta(pergunta);

  setTimeout(() => {

    adicionarMensagem(resposta, "bot");

  }, 700);

  input.value = "";

}

// =====================================
// ADICIONAR MENSAGEM
// =====================================

function adicionarMensagem(texto, tipo){

  let chatBox = document.getElementById("chatBox");

  let mensagem = document.createElement("div");

  if(tipo === "user"){

    mensagem.classList.add("userMensagem");

  }else{

    mensagem.classList.add("botMensagem");

  }

  mensagem.innerText = texto;

  chatBox.appendChild(mensagem);

  chatBox.scrollTop = chatBox.scrollHeight;

}

// =====================================
// AGROBOT SUPER INTELIGENTE
// =====================================

function gerarResposta(pergunta){

  pergunta = pergunta.toLowerCase();

  // =====================================
  // CUMPRIMENTOS
  // =====================================

  if(
    pergunta.includes("oi") ||
    pergunta.includes("olá") ||
    pergunta.includes("bom dia") ||
    pergunta.includes("boa tarde") ||
    pergunta.includes("boa noite")
  ){

    return "🐮 Olá! Eu sou o AgroBot! Posso responder perguntas sobre agricultura, animais, tecnologia, sustentabilidade e muito mais.";

  }

  // =====================================
  // QUEM É
  // =====================================

  else if(
    pergunta.includes("quem é você") ||
    pergunta.includes("seu nome")
  ){

    return "🤖 Eu sou o AgroBot, uma inteligência artificial criada para ensinar sobre o agro sustentável.";

  }

  // =====================================
  // AGRO
  // =====================================

  else if(
    pergunta.includes("agro") ||
    pergunta.includes("agronegócio")
  ){

    return "🚜 O agro é responsável pela produção de alimentos, geração de empregos e desenvolvimento econômico.";

  }

  // =====================================
  // AGRICULTURA
  // =====================================

  else if(
    pergunta.includes("agricultura")
  ){

    return "🌾 A agricultura é a atividade de plantar e cultivar alimentos, fibras e matérias-primas.";

  }

  // =====================================
  // PECUÁRIA
  // =====================================

  else if(
    pergunta.includes("pecuária")
  ){

    return "🐄 A pecuária é a criação de animais para produção de carne, leite, ovos e outros produtos.";

  }

  // =====================================
  // PLANTAÇÕES
  // =====================================

  else if(
    pergunta.includes("plantação") ||
    pergunta.includes("plantações") ||
    pergunta.includes("onde é feita a plantação")
  ){

    return "🌱 As plantações são feitas em áreas rurais preparadas para o cultivo de alimentos como soja, milho, café e trigo.";

  }

  // =====================================
  // SOJA
  // =====================================

  else if(
    pergunta.includes("soja")
  ){

    return "🌿 A soja é uma das culturas mais produzidas no Brasil e utilizada para alimentos e exportação.";

  }

  // =====================================
  // MILHO
  // =====================================

  else if(
    pergunta.includes("milho")
  ){

    return "🌽 O milho é usado na alimentação humana, ração animal e produção industrial.";

  }

  // =====================================
  // CAFÉ
  // =====================================

  else if(
    pergunta.includes("café")
  ){

    return "☕ O Brasil é um dos maiores produtores de café do mundo.";

  }

  // =====================================
  // TRIGO
  // =====================================

  else if(
    pergunta.includes("trigo")
  ){

    return "🌾 O trigo é utilizado para fabricar pão, massas e diversos alimentos.";

  }

  // =====================================
  // ANIMAIS
  // =====================================

  else if(
    pergunta.includes("animais")
  ){

    return "🐷🐄🐔 O agro possui criação de bovinos, aves, suínos, peixes e muitos outros animais.";

  }

  // =====================================
  // VACA
  // =====================================

  else if(
    pergunta.includes("vaca") ||
    pergunta.includes("gado")
  ){

    return "🐄 O gado produz leite, carne e couro importantes para o agro.";

  }

  // =====================================
  // GALINHA
  // =====================================

  else if(
    pergunta.includes("galinha") ||
    pergunta.includes("frango")
  ){

    return "🐔 As galinhas produzem ovos e carne muito consumidos pela população.";

  }

  // =====================================
  // PORCOS
  // =====================================

  else if(
    pergunta.includes("porco") ||
    pergunta.includes("suíno")
  ){

    return "🐷 A suinocultura produz carne suína para alimentação e exportação.";

  }

  // =====================================
  // PEIXES
  // =====================================

  else if(
    pergunta.includes("peixe")
  ){

    return "🐟 A piscicultura é a criação de peixes para alimentação.";

  }

  // =====================================
  // PRAGAS
  // =====================================

  else if(
    pergunta.includes("praga") ||
    pergunta.includes("pragas")
  ){

    return "🐛 Algumas pragas agrícolas são lagartas, gafanhotos, pulgões e percevejos que prejudicam as plantações.";

  }

  // =====================================
  // DOENÇAS
  // =====================================

  else if(
    pergunta.includes("doença") ||
    pergunta.includes("fungos")
  ){

    return "🦠 Fungos, bactérias e vírus podem causar doenças nas plantações.";

  }

  // =====================================
  // TECNOLOGIA
  // =====================================

  else if(
    pergunta.includes("tecnologia")
  ){

    return "🤖 A tecnologia agrícola utiliza drones, sensores, GPS, máquinas modernas e inteligência artificial.";

  }

  // =====================================
  // DRONES
  // =====================================

  else if(
    pergunta.includes("drone")
  ){

    return "🛸 Drones ajudam no monitoramento das plantações e no controle de pragas.";

  }

  // =====================================
  // IA
  // =====================================

  else if(
    pergunta.includes("inteligência artificial") ||
    pergunta.includes("ia")
  ){

    return "🧠 A inteligência artificial ajuda agricultores a prever clima, monitorar plantações e melhorar a produção.";

  }

  // =====================================
  // IRRIGAÇÃO
  // =====================================

  else if(
    pergunta.includes("irrigação")
  ){

    return "💧 A irrigação leva água para as plantações quando não há chuva suficiente.";

  }

  // =====================================
  // ÁGUA
  // =====================================

  else if(
    pergunta.includes("água")
  ){

    return "💦 Economizar água é essencial para manter uma agricultura sustentável.";

  }

  // =====================================
  // SOLO
  // =====================================

  else if(
    pergunta.includes("solo") ||
    pergunta.includes("terra")
  ){

    return "🌎 O solo fértil ajuda no crescimento saudável das plantas.";

  }

  // =====================================
  // MEIO AMBIENTE
  // =====================================

  else if(
    pergunta.includes("meio ambiente") ||
    pergunta.includes("natureza")
  ){

    return "🌳 Preservar a natureza é essencial para garantir um futuro sustentável.";

  }

  // =====================================
  // SUSTENTABILIDADE
  // =====================================

  else if(
    pergunta.includes("sustentabilidade") ||
    pergunta.includes("sustentável")
  ){

    return "♻️ Sustentabilidade significa produzir sem destruir os recursos naturais.";

  }

  // =====================================
  // ENERGIA SOLAR
  // =====================================

  else if(
    pergunta.includes("energia solar") ||
    pergunta.includes("solar")
  ){

    return "☀️ A energia solar ajuda propriedades rurais a produzirem energia limpa.";

  }

  // =====================================
  // TRATOR
  // =====================================

  else if(
    pergunta.includes("trator")
  ){

    return "🚜 Tratores ajudam no preparo do solo, plantio e colheita.";

  }

  // =====================================
  // COLHEITA
  // =====================================

  else if(
    pergunta.includes("colheita")
  ){

    return "🌾 A colheita é o momento em que os alimentos são retirados da plantação.";

  }

  // =====================================
  // ALIMENTOS
  // =====================================

  else if(
    pergunta.includes("alimento") ||
    pergunta.includes("comida")
  ){

    return "🥗 O agro produz alimentos essenciais para milhões de pessoas.";

  }

  // =====================================
  // PARANÁ
  // =====================================

  else if(
    pergunta.includes("paraná")
  ){

    return "🌱 O Paraná é destaque na produção de soja, milho, trigo e frango.";

  }

  // =====================================
  // FUTURO
  // =====================================

  else if(
    pergunta.includes("futuro")
  ){

    return "🚀 O futuro do agro depende da união entre tecnologia e sustentabilidade.";

  }

  // =====================================
  // AJUDA
  // =====================================

  else if(
    pergunta.includes("ajuda")
  ){

    return "😊 Você pode perguntar sobre plantações, animais, pragas, tecnologia, sustentabilidade e muito mais.";

  }

  // =====================================
  // RESPOSTA ALEATÓRIA
  // =====================================

  else{

    let respostas = [

      "🌾 Pergunte sobre agricultura, animais, sustentabilidade ou tecnologia.",

      "🤖 Ainda estou aprendendo novas informações sobre o agro.",

      "🌱 O agro sustentável ajuda a proteger o planeta.",

      "🚜 A tecnologia agrícola está transformando o campo.",

      "🐄 O campo produz alimentos importantes para toda a população."

    ];

    return random(respostas);

  }

}

// =====================================
// ENTER NO INPUT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  let input = document.getElementById("perguntaInput");

  input.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

      responderPergunta();

    }

  });

});

// FUNÇÃO PARA MOSTRAR CURIOSIDADES
function mostrarCuriosidade() {
  let curiosidades = [
    "🌽 O Brasil está entre os maiores produtores de soja e milho do mundo.",
    "🐄 A pecuária brasileira é uma das maiores exportadoras de carne bovina.",
    "🌱 A agricultura familiar produz grande parte dos alimentos que chegam à mesa dos brasileiros.",
    "🚜 Tratores modernos podem ser guiados por GPS no campo.",
    "💧 A irrigação inteligente ajuda a economizar água na agricultura.",
    "🐔 O Brasil é um dos maiores exportadores de frango do mundo.",
    "🌎 O agro sustentável ajuda a reduzir impactos no meio ambiente.",
    "☀️ Muitas fazendas já usam energia solar para reduzir custos.",
    "🐛 O controle de pragas ajuda a evitar perdas nas plantações.",
    "🌾 O Paraná é um dos estados mais fortes na produção agrícola do Brasil."
  ];

  // Escolhe uma curiosidade aleatória
  let aleatorio = random(curiosidades);

  // Mostra na tela
  alert("🧠 Curiosidade do Agro:\n\n" + aleatorio);
}

function explicarFluxo(){

  let mensagem = 
  "🌍 O alimento nasce na produção rural, " +
  "é transportado com cuidado, chega ao mercado " +
  "e finalmente vai para a mesa das famílias.";

  alert(mensagem);
}

function simularSafra(){

  let cultivo = document.getElementById("cultivo").value;

  let producao = "";
  let impacto = "";
  let crescimento = "";

  if(cultivo === "milho"){
    producao = "🌽 Produção: 8 toneladas por hectare";
    impacto = "🌱 Impacto ambiental: médio";
    crescimento = "📈 Crescimento rápido (3 a 4 meses)";
  }

  else if(cultivo === "soja"){
    producao = "🌱 Produção: 3 toneladas por hectare";
    impacto = "🌱 Impacto ambiental: baixo (com manejo sustentável)";
    crescimento = "📈 Crescimento médio (4 a 5 meses)";
  }

  else if(cultivo === "cafe"){
    producao = "☕ Produção: 2 toneladas por hectare";
    impacto = "🌱 Impacto ambiental: baixo";
    crescimento = "📈 Crescimento lento (8 a 12 meses)";
  }

  let resultado =
    "📊 RESULTADO DA SAFRA\n\n" +
    producao + "\n" +
    crescimento + "\n" +
    impacto;

  document.getElementById("resultadoSafra").innerText = resultado;

}

function mudarClima(tipo){
  clima = tipo;
}

function desenharChuva(){

  stroke(200);
  for(let i = 0; i < 100; i++){

    let x = random(width);
    let y = random(height);

    line(x, y, x, y + 10);

  }

}

function desenharFazendaViva(){

  // 🌱 chão
  noStroke();
  fill(80, 200, 120);
  rect(0, 250, width, 150);

  // 🌳 árvore balançando
  push();
  translate(450, 220);
  rotate(sin(anguloArvore) * 0.2);

  fill(139, 69, 19);
  rect(0, 0, 20, 60);

  fill(34, 139, 34);
  ellipse(10, -10, 60, 60);
  pop();

  // 🐄 vaca andando
  textSize(40);
  text("🐄", vacaX, 300);

  vacaX += 1;

  if(vacaX > width){
    vacaX = -50;
  }

  // 🌿 animação da árvore
  anguloArvore += 0.03;

}

function mostrarProducao(cultura){
  let info = "";

  if(cultura === "milho"){
    info = "🌽 Milho: Produzido principalmente no Paraná e Mato Grosso.";
  } else if(cultura === "soja"){
    info = "🌱 Soja: Produzida em todo o Brasil e exportada para o mundo.";
  } else if(cultura === "cafe"){
    info = "☕ Café: Minas Gerais é o maior produtor.";
  } else if(cultura === "algodao"){
    info = "🌿 Algodão: Produção concentrada no Mato Grosso e Bahia.";
  }

  document.getElementById("infoProducao").innerText = info;
}

const temaBtn = document.getElementById('temaBtn');

temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

