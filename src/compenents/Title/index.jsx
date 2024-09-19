import "./title.css";

function Title(props) {
  return (
    <div className="container-title">
      <img src={props.img} />
      <h1 style={{ fontSize: props.tamanho }} className="title">
        {props.texto}
      </h1>
    </div>
  );
}

export default Title;
