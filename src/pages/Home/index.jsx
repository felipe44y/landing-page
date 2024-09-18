import Navbar from "../../compenents/Navbar";
import Footer from "../../compenents/Footer";
import Title from "../../compenents/Title";

import Dengue from "../../assets/image.png";
import Alert from "../../assets/cuidado.png";
import Vaso from "../../assets/image2.png";
import Sintomas from "../../assets/sintomas.png";

import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-img">
        <section className="container-texts">
          <h1>DENGUE</h1>
          <h2>DENGUE MATA.</h2>
          <h2>COMBATA!</h2>
        </section>

        <img width={500} height={400} src={Dengue} />
      </div>

      <div className="text-area">
        <p>
          A dengue é uma ameaça constante e crescente, especialmente em regiões
          de clima tropical, como a nossa. Transmitida pelo mosquito Aedes
          aegypti, essa doença pode causar sérias complicações à saúde, como
          febre alta, dores musculares intensas, dores de cabeça e até levar a
          quadros mais graves, como a dengue hemorrágica. É por isso que o
          combate à dengue deve ser uma prioridade para todos nós. E o mais
          importante: esse combate começa dentro de casa, com ações simples e
          efetivas. Um dos principais meios de prevenir a proliferação do
          mosquito é eliminando qualquer fonte de água parada, pois é nesse
          ambiente que o Aedes aegypti se reproduz. Você sabia que o ciclo de
          vida do mosquito, do ovo até a fase adulta, pode ocorrer em menos de
          10 dias em condições favoráveis? Por isso, evitar o acúmulo de água em
          vasos de plantas, pneus, garrafas, calhas, caixas d'água destampadas e
          qualquer outro recipiente que possa servir de criadouro é essencial.
          Mesmo pequenas quantidades de água podem ser suficientes para a
          reprodução do mosquito, então é importante estar sempre atento. Além
          de eliminar focos de água parada, também é recomendável manter os
          ambientes limpos e bem cuidados, tampar bem as lixeiras, lavar
          regularmente recipientes de água de animais de estimação, e fazer a
          manutenção de piscinas e fontes de água. A prevenção é a nossa maior
          arma contra a dengue. A conscientização e a mudança de hábitos em
          nossa rotina diária fazem toda a diferença.
        </p>
      </div>

      <div className="container-alert-img">
        <img src={Alert} />
        <h1>ALERTA</h1>
      </div>

      <Title texto="A dengue não tira férias. Previna-se o ano todo!" />

      <div className="area-alert">
        <img src={Vaso} />
        <section>
          <p>
            Aqui está a versão ampliada do texto: A prevenção é a forma mais
            eficaz e poderosa de evitar a dengue, uma doença que continua sendo
            uma séria ameaça à saúde pública, especialmente em regiões de clima
            tropical, onde o mosquito transmissor, o Aedes aegypti, encontra
            condições ideais para se proliferar. Essa é uma doença que pode
            afetar pessoas de todas as idades, e suas complicações podem variar
            desde sintomas leves, como febre e dores no corpo, até quadros mais
            graves, como a dengue hemorrágica, que pode ser fatal. Por isso, a
            melhor maneira de combater essa doença é através da prevenção.
            Prevenir a dengue é uma responsabilidade coletiva, e a participação
            de todos é essencial. Cada cidadão pode contribuir de maneira
            significativa apenas adotando algumas medidas simples no seu dia a
            dia. Um dos principais focos de atenção deve ser eliminar qualquer
            possibilidade de acúmulo de água parada, pois é nesse tipo de
            ambiente que o mosquito Aedes aegypti deposita seus ovos e se
            multiplica. Os mosquitos podem se reproduzir em pequenas quantidades
            de água, até mesmo em tampinhas de garrafa ou em recipientes que, à
            primeira vista, parecem inofensivos. Portanto, é fundamental estar
            atento tanto ao que acontece dentro de casa quanto nos arredores.
          </p>
        </section>
      </div>

      <Title texto="Sintomas" />

      <div className="container-sitomas">
        <div className="area-left">
          <img src={Sintomas} />
        </div>
        <div className="area-right">
          <section>
            <p>
              A dengue é uma doença grave, transmitida pelo mosquito Aedes
              aegypti, que se prolifera em água parada. Seus principais sintomas
              são:
            </p>
          </section>
          <ul>
            <li>Febre alta (40°C) </li>
            <li>Forte dor de cabeça</li>
            <li>Dor atrás dos olhos</li>
            <li>Náusea</li>
            <li>Vômitos</li>
            <li>Manchas vermelhas na pele</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
