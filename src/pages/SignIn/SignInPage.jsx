import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  SignInPageContainer,
  TitleContainer,
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledP,
} from "./styled";

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    if (email === "" || password === "") {
      return alert("Por favor, preencha todos os dados!");
    }

    const body = {
      email,
      password,
    };

    console.log(body);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/sign-in`,
        body
      );
      console.log(response);  
      setIsLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/home");

    } catch (error) {
      console.log(error);
      alert("Ops! Tente novamente!");
      setIsLoading(false);
    }
  }

  return (
    <SignInPageContainer>
      <TitleContainer>
        <div className="m-[220px 0 0 110px]">
          <h1 className="text-[106px] ">FunForFamily</h1>
          <h2 className="font-bold w-[442px] text-[43px]">
            Discover where to go with yours kids
          </h2>
        </div>
      </TitleContainer>

      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <StyledButton type="submit">Sign In</StyledButton>
          <StyledP onClick={() => navigate("/users/sign-up")}>
            First time? Create an account!
          </StyledP>
        </StyledForm>
      </FormContainer>
    </SignInPageContainer>
  );
}

export default SignInPage;
