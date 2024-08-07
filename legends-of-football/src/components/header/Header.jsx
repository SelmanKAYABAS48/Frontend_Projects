import logo from"../../assets/logo.png"
import Container from "react-bootstrap/Container"
import Image from"react-bootstrap/Image"


function Header(){
    return(
        <Container>
            <Image src={logo} alt="logo" width="200px"/> <br />
            <h1 my-3 className="title">FOOTBALL LEGENDS</h1>
        </Container>
    )
}

export default Header;