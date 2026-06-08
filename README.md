# agro_sustentavel
O agronegócio sustentável produz alimentos, preserva o meio ambiente e utiliza tecnologia para melhorar a vida das pessoas. 
📄 TEXTO DE APRESENTAÇÃO – PROJETO AGRINHO 2026
Eu desenvolvi este site como parte do Concurso Agrinho 2026, com o tema “Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente”. O objetivo do meu projeto foi criar uma página interativa que mostrasse a importância do agronegócio no Brasil, de forma simples, educativa e também divertida para quem acessa.
A ideia principal do site é mostrar como o campo e a cidade estão conectados. Para isso, eu criei diferentes seções que explicam desde a produção de alimentos até o transporte e a chegada deles ao supermercado. Essa parte ajuda a entender o caminho que os produtos fazem até chegar à nossa mesa.
Um dos destaques do projeto é o AgroBot, que é uma inteligência artificial simples criada por mim usando JavaScript. Ela responde perguntas sobre agricultura, pecuária, tecnologia no campo, pragas, clima e sustentabilidade. A intenção não é ser uma IA real avançada, mas sim uma simulação educativa que ajuda o usuário a aprender mais sobre o tema de forma interativa.
Também incluí um sistema de clima dinâmico, onde o usuário pode alternar entre sol, chuva, nublado e noite. Isso foi feito com p5.js, que é uma biblioteca de programação visual. Essa parte ajuda a simular como o clima pode influenciar o ambiente rural.
Outro elemento importante é a “Fazenda Viva”, onde animais como vaca e galinha aparecem em movimento e uma árvore se mexe, dando a sensação de um ambiente rural mais realista. Isso foi feito com animações simples em JavaScript dentro do canvas do p5.js.
Criei também um simulador de safra, onde o usuário pode escolher culturas como milho, soja e café e ver informações como produção estimada, crescimento e impacto ambiental. Essa parte ajuda a mostrar a importância da agricultura e suas diferenças entre culturas.
Além disso, o site tem um “Mapa do Agro Interativo”, onde o usuário pode clicar em diferentes culturas e ver onde elas são produzidas no Brasil, como milho no Paraná e Mato Grosso, soja em várias regiões do país e café em Minas Gerais.
Outro recurso é o sistema de curiosidades, que mostra fatos aleatórios sobre o agro brasileiro, como produção, exportação e tecnologia no campo. Isso torna o aprendizado mais dinâmico.
O site também tem uma seção que mostra a conexão entre campo e cidade, explicando o caminho dos alimentos desde a produção até o consumo, passando pelo transporte e pelo mercado.
Para desenvolver esse projeto, eu usei HTML, CSS e JavaScript, além da biblioteca p5.js para as animações. Eu aprendi e me inspirei em aulas de programação da escola pelo Alura, no conteúdo do curso, e em vídeos educativos sobre HTML, CSS e JavaScript no YouTube, como os canais que ensinam programação básica para iniciantes, além da documentação oficial do p5.js, que ajudou a entender melhor as funções de desenho e animação.
Algumas ideias também foram construídas a partir de pesquisas sobre o agronegócio brasileiro que fiz em sites educativos e conteúdos escolares, para garantir que as informações estivessem corretas e relacionadas com a realidade do Brasil.
Com este projeto, eu quis mostrar que a tecnologia pode ser usada para aprender sobre o campo de forma mais interessante e interativa, unindo programação, educação e sustentabilidade.


📄 EXPLICAÇÃO DE CÓDIGOS IMPORTANTES 
mostrarProducao(cultura) – Essa função mostra onde cada cultura é produzida no Brasil. Quando o usuário clica em um botão (como milho, soja ou café), essa função altera o texto na tela, explicando as regiões produtoras.
curiosidadeAleatoria() – Função que escolhe um fato aleatório sobre o agro. Toda vez que o usuário clica no botão “Curiosidade do Agro”, a função escolhe uma informação nova, tornando a experiência mais dinâmica.
sketch.js com p5.js – Nesse arquivo, eu usei funções como draw() e ellipse() para desenhar o céu, sol, animais e árvores. Variáveis como xVaca  controlam o movimento dos animais na “Fazenda Viva”.
perguntaInput e enviarBtn – São elementos do chat da IA AgroBot. Eles recebem a pergunta do usuário e acionam a função que responde com informações sobre o agro, tornando o site interativo.
Esses códigos e variáveis foram pensados para tornar o site educativo, divertido e interativo, além de mostrar como a programação pode ser usada para ensinar sobre o agronegócio e sustentabilidade de forma prática.
