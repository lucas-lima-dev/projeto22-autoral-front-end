import { w } from "windstitch"

export const HeaderContainer = w.div(
    `
    w-screen
    h-[72px]
    bg-black
    flex
    items-center
    justify-between
    fixed
    top-0
    z-1
    
    `
)

export const HeaderTitle = w.p(
    `
    w-[108px]
    h-[54px]
    text-white
    font-PassionOne
    font-bold
    font-normal
    ml-[45%]
    text-[49px]
    `
)
