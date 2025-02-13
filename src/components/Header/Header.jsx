import "./Header.css";

function Header(props) {
  return (
    <>
      <Header>
        <img src={props.img} alt="" />
        <h1>{props.texto}</h1>
      </Header>
    </>
  );
}

export default Header;
