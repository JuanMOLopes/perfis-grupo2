import "./Perfil.css";

function Perfil(props) {
  return (
    <>
      <div className="card">
        <p>{props.nome}</p>
        <img src={props.img} alt="" className="imagem"/>
        <p>{props.desc}</p>
      </div>
    </>
  );
}

export default Perfil;
