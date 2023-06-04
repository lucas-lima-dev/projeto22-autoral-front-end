import { useContext, useState } from "react";
import {
  SignInPageContainer,
  TitleContainer,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledP
} from "./styled";

function SignInPage() {
  //   const navigate = useNavigate();

  return (
    <SignInPageContainer>
      <TitleContainer>
        <div className="m-[220px 0 0 110px]">
          <h1 className="text-[106px] ">FunForFamily</h1>
          <h2 className="font-bold w-[442px] text-[43px]">Discover where to go with yours kids</h2>
        </div>
      </TitleContainer>

      <FormContainer>
        <StyledForm>
          <StyledInput type="email" placeholder="e-mail" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Sign In</StyledButton>
          <StyledP>First time? Create an account!</StyledP>
        </StyledForm>
      </FormContainer>
    </SignInPageContainer>
  );
}

export default SignInPage;
