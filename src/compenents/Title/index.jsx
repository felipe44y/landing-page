import "./title.css";

function Title(props) {
  return (
    <div className="container-title">
      <p className="title">{props.texto}</p>
    </div>
  );
}

export default Title;
