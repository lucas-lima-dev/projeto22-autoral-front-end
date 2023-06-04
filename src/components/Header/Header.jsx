import { Link } from "react-router-dom";
import { HeaderContainer, HeaderTitle } from "./styled";
import { useContext, useEffect } from "react";


export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/timeline" style={{ textDecoration: "none" }} >
        <HeaderTitle>FunForFamily</HeaderTitle>
      </Link>
    </HeaderContainer>
  );
}
