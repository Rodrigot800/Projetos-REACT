import React from "react";
import Planet from "./planet";

function clickPlanet(name){
    console.log(` clicou no planeta : ${name}`)
}

const planets = () => {
    return (
        <div>
            <h4>Lista de planetas</h4>
            <button> mostrar mensagem </button>
            <hr />
            < Planet name="Mercúrio"  
            descrição2="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino.

            Em uma média ao longo do tempo, Mercúrio (e não Vênus) é o planeta mais próximo da Terra, do que os outros planetas do Sistema Solar, como demostrado em um estudo publicado em março de 2019 na revista Physics Today [en]. Segundo os pesquisadores Tom Stockman, Gabriel Monroe e Samuel Cordner, os métodos convencionais para o cálculo do planeta mais próximo da Terra são simples demais. Popularizou-se na ciência que Vênus seria o planeta mais próximo da Terra, por uma suposição errônea sobre a distância média entre os planetas. Um método matemático criado pelos pesquisadores, determinou que, quando se calcula a média ao longo do tempo, o vizinho mais próximo da Terra é, na verdade Mercúrio. Essa correção é relevante para mais do que apenas os vizinhos da Terra. A solução pode ser generalizada para incluir quaisquer dois corpos em órbitas aproximadamente circulares, concêntricas e coplanares. Usando o método mais preciso para estimar a distância média entre dois corpos em órbita, a conclusão foi que que essa distância é proporcional ao raio relativo das órbitas internas.[3][4]
            
            Em relação a outros planetas, pouco se sabe a respeito de Mercúrio, pois telescópios em solo terrestre revelam apenas um crescente iluminado com detalhes limitados. As duas primeiras espaçonaves a explorar o planeta foram a Mariner 10, que mapeou aproximadamente 45% da superfície do planeta entre 1974 e 1975, e a MESSENGER, que mapeou outros 30% da superfície durante um sobrevoo em 14 de janeiro de 2008. O último sobrevoo ocorreu em setembro de 2009 e a nave entrou em órbita do planeta em 18 de março de 2011, quando começou a mapear o restante do planeta, numa missão com duração nominal de um ano terrestre.
            
            "
            descrição= "é isso ai"

            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
            
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(mitologia)"
            clickPlanet={clickPlanet}
            title_U={true}/>

            

            < Planet name="Vénus" 
            descrição2="Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas.[2] Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela-d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor.

            Vénus é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra,[3] já que ambos são similares quanto ao tamanho, massa e composição. Vénus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível. Ele possui a mais densa atmosfera entre todos os planetas terrestres do Sistema Solar, constituída principalmente de dióxido de carbono. Vénus não possui um ciclo do carbono para fixar o carbono em rochas ou outros componentes da superfície, nem parece ter vida orgânica para absorvê-lo como biomassa. Acredita-se que no passado Vénus possuía oceanos como os da Terra,[4] que se evaporaram quando a temperatura se elevou, restando uma paisagem desértica, seca e poeirenta, com muitas pedras em forma de placas. A água provavelmente se dissociou e, devido à inexistência de um campo magnético, o hidrogênio foi arrastado para o espaço interplanetário pelo vento solar.[5] A pressão atmosférica na superfície do planeta é 92 vezes a da Terra.
            
            "
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
            clickPlanet={clickPlanet}/>
            < Planet name="terra" clickPlanet={clickPlanet} 
            descrição2="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos,[14][15][16][17] e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta.[18] As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.[19][20]"
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg"

            grayi={true} />
            < Planet name="Marte" clickPlanet={clickPlanet}
            descrição="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar, atrás apenas de Mercúrio. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.[1]
            Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano. Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto.[2][3] Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados,[4][5] semelhante ao 5261 Eureka, um asteroide troiano marciano. "
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
            />

             
            < Planet name="Júpiter" clickPlanet={clickPlanet}
            descrição="úpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[12] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.[13]

            Júpiter é composto principalmente de hidrogênio, sendo um quarto de sua massa composta de hélio, embora o hélio corresponda a apenas um décimo do número total de moléculas. O planeta também pode possuir um núcleo rochoso composto por elementos mais pesados, embora, como os outros planetas gigantes, não possua uma superfície sólida bem definida. Por causa de sua rotação rápida, de cerca de dez horas, ele possui o formato de uma esfera oblata (ele possui uma suave, mas perceptível, saliência em torno do equador). Sua atmosfera externa é visivelmente dividida em diversas faixas, em várias latitudes, resultando em turbulência e tempestades nas regiões onde as faixas se encontram. Uma dessas tempestades é a Grande Mancha Vermelha, uma das características visíveis de Júpiter mais conhecidas e proeminentes, cuja existência data pelo menos do século XVII, quando foi pela primeira vez avistada com telescópio,[14] com ventos de até 650  km/h[15] e um diâmetro transversal duas vezes maior do que a Terra.[16]"
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"/>

            < Planet name="Urano" clickPlanet={clickPlanet}
            descrição="Urano[11] (Úrano em Portugal[12]) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita.[13] William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.

            Urano tem uma composição similar à de Netuno, e ambos possuem uma composição química diferente da dos maiores gigantes gasosos, Júpiter e Saturno. Como tal, os astrônomos algumas vezes os colocam em uma categoria separada, os gigantes gelados. A atmosfera de Urano, embora similar às de Júpiter e Saturno em sua composição primária de hidrogênio e hélio, contém mais gelos tais como água, amônia e metano, assim como traços de hidrocarbonetos.[8] É a mais fria atmosfera planetária no Sistema Solar, com uma temperatura mínima de 49 K (–224 °C). Tem uma complexa estrutura de nuvens em camadas, e acredita-se que a água forma as nuvens mais baixas, e o metano as mais exteriores.[8] Em contraste, seu interior é formado principalmente por gelo e rochas.[14]"
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/200px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"/>

            < Planet name="Netuno" clickPlanet={clickPlanet}
            descrição="Netuno (pt-BR) ou Neptuno (pt) (AO 1990: Netuno ou Neptuno)[2][3] é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas.

            O planeta é formado por um pequeno núcleo rochoso ao redor do qual encontra-se uma camada formada possivelmente por água, amônia e metano sobre a qual situa-se sua turbulenta atmosfera, constituída predominantemente de hidrogênio e hélio. De fato, notáveis eventos climáticos ocorrem em Netuno, inclusive a formação de diversas camadas de nuvens, tempestades ciclônicas visíveis, como a já extinta Grande Mancha Escura, além dos ventos mais rápidos do Sistema Solar, que atingem mais de 2 000 km/h. A radiação solar recebida por Netuno não seria suficiente para fornecer tamanha energia à turbulenta atmosfera, pelo que descobriu-se que o calor irradiado do centro do planeta possui um papel importante na manutenção destes eventos meteorológicos extremos. A pequena quantidade de metano nas camadas altas da atmosfera é, em parte, responsável pela coloração azul do planeta."
            url_img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Neptune_Voyager2_color_calibrated.png/280px-Neptune_Voyager2_color_calibrated.png"/>


            {/*< Planet name="" 
            descrição=""
            url_img=""/>*/}


        </div>
    );
};

export default planets;
