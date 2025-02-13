import "./Header.css";

function Header(props) {
  return (
    <>
      <Header>
        <img src={props.logo} className="Img" />
        <h1>{props.desafio}</h1>
      </Header>
    </>
  );
}

export default Header;