import "./Meio.css";

function Meio(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <p className="nome">{props.nome}</p>
          <img src={props.img} alt="" className="imagem" />
          <p>{props.hobby}</p>
        </div>
      </div>
    </>
  );
}

export default Meio;
