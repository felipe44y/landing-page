import Navbar from "../../compenents/Navbar";
import Title from "../../compenents/Title";
import Form from "../../compenents/Form";
import Footer from "../../compenents/Footer";

import "./denuncie.css";

function Denuncie() {
  return (
    <div>
      <Navbar />
      <div className="container-header">
        <Title tamanho="3rem" texto="Faça sua denúncia" />
        <Title tamanho="2rem" texto="Viu um foco de dengue?" />
        <Title tamanho="2rem" texto="Não perca tempo e denuncie!" />
        <Title
          tamanho="2rem"
          texto="Nos informe o local e falaremos com o irresponsável."
        />
        <Form />
      </div>
      <Footer position={0} />
    </div>
  );
}

export default Denuncie;
