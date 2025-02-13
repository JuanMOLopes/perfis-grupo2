import "./valores.css";

function Valores(props) {
    return (
        <div className="alinhamento">
            <p>{props.texto}</p>
            <p>{props.subTexto}</p>
            <p>{props.terceiroTexto}</p>
        </div>
    );
}

export default Valores;
