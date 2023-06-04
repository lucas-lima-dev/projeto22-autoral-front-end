import { useContext, useState } from "react";
import { SignInContainer } from "./styled";

function SignInPage() {
    //   const navigate = useNavigate();

    return(
        <div className="bg-red-700 w-screen h-screen flex ">
            <div className="bg-black font-bold font-PassionOne text-white flex flex-col w-[75vw]">
                <div className="m-[220px 0 0 110px]">
                    <h1 className="text-[106px] ">FunForFamily</h1>
                    <h2>Discover where to go with yours kids</h2>
                </div>
            </div>

            <div>
                <form>
                    <input
                    type="email"
                    placeholder="e-mail"
                    required
                    />
                    <input
                    type="password"
                    placeholder="password"
                    required
                    />
                    <button type="submit">Sign In</button>
                    <p>First time? Create an account!</p>
                </form>
            </div>
        </div>
    )
}


export default SignInPage;
