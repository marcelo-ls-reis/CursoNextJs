import Navebar from "./Navbar";

export default function MainContainer({children}){
    return(
    <>
    <Navebar/>
    <div>{children}</div>
    </>
    )
}