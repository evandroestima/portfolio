import React from "react";
import { Button, Container, LadoEsquerdo, LadoDireito } from "./styles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <LadoEsquerdo>
        <Button>Entre em contato</Button>
      </LadoEsquerdo>

      <LadoDireito>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </LadoDireito>
    </Container>
  );
};

export default Header;
