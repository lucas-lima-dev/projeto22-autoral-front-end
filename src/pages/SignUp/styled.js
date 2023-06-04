import { w } from "windstitch";

export const SignUpPageContainer = w.div(
    `
    w-screen h-screen flex 

    `
);

export const TitleContainer = w.div(
    `
      bg-black 
      font-bold 
      font-PassionOne 
      text-white 
      flex 
      flex-col 
      w-[75vw] 
      flex-grow 
      justify-center 
      items-center
      `
  );
  
  export const FormContainer = w.div(
    `
      flex flex-col w-[50vw] bg-[#333333] justify-center items-center
      `
  );
  
  export const StyledForm = w.form(
    `
      m-auto flex flex-col justify-center items-center gap-[10px]
      `
  );
  
  export const StyledInput = w.input(
    `
      w-[30vw] 
      h-[65px] 
      bg-[#FFFFFF] 
      border-[1px] 
      border-white 
      rounded-[6px] 
      text-[#9f9f9f] 
      text-[20px] 
      p-[18px]
      `
  );
  
  export const StyledButton = w.button(
    `
      w-[30vw]
      h-[65px]
      bg-[#1877f2]
      rounded-[6px]
      text-[#FFFFFF]
      text-[27px]
      `
  );
  
  export const StyledP = w.p(
    `
      text-[#FFFFFF]
      text-[20px]
      cursor-pointer
      underline
      `
  );
  