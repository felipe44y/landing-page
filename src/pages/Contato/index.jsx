import Navbar from "../../compenents/Navbar";
import Title from "../../compenents/Title";
import Footer from "../../compenents/Footer";

import imgContato from "../../assets/image3.png";
import zap from "../../assets/zap.png";
import carta from "../../assets/carta.png";
import insta from "../../assets/insta.png";

import "./contato.css";

function Contato() {
  return (
    <div>
      <Navbar />
      <div className="container-contato">
        <Title tamanho="3rem" texto="Equipe de Combate" />
        <Title tamanho="2rem" texto="Em Russas a dengue não descansa!" />
      </div>

      <div className="text-area-img">
        <img src={imgContato} />
        <section>
          <p>
            Somos uma equipe comprometida em combater a dengue e proteger a
            saúde de nossa comunidade. Com dedicação e responsabilidade,
            trabalhamos diariamente para eliminar focos do mosquito Aedes
            aegypti e conscientizar a população sobre a importância da
            prevenção. Nosso time é formado por profissionais capacitados e
            apaixonados por fazer a diferença, unidos pelo propósito de salvar
            vidas e tornar nossas cidades mais seguras. Juntos, podemos vencer
            essa batalha!
          </p>
        </section>
      </div>

      <Title tamanho="2rem" texto="Dúvidas?" />
      <Title
        tamanho="2rem"
        texto="Entre em contato conosco nas nossas redes sociais"
      />

      <div className="redes-area">
        <section>
          <img src={insta} />
          <h2>@equipe_de_combate</h2>
        </section>
        <section>
          <img src={zap} />
          <h2>(88) 99876-5432</h2>
        </section>
        <section>
          <img src={carta} />
          <h2>combateadengue@gmai.com</h2>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
