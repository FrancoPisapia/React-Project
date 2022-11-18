import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';


const CustomNav = () =>{
    return(

      <>

      <div className='row'>
        <Navbar bg="light" expand="lg" className='estiloNavBar'>
        <Container>
          <Navbar.Brand href="#home" className='col-lg-4'>Óptica FG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />

            <Navbar.Collapse id="basic-navbar-nav" className='col-lg-6 '>
              <Nav className="me-auto">
                <Nav.Link href="#link" className='letraNegro'>Lentes</Nav.Link>
                <Nav.Link href="#link" className='letraNegro'>Sun</Nav.Link>
                <Nav.Link href="#link" className='letraNegro'>Lentes de contacto</Nav.Link>

                <div className='margen-der col-lg-3 letraNegro'>
                  <Nav.Link href="#link" className='letraNegro'>Registrarse  </Nav.Link>
                  <Nav.Link href="#link" className='letraNegro'>Iniciar Sesion</Nav.Link>
                  <div>
                  <Nav.Link href="#link" className='letraNegro'><FaShoppingCart />
                    <div className='popup'>0</div>
                  </Nav.Link>
                  
                  </div>
                </div>

              </Nav>

            </Navbar.Collapse>

        </Container>
      </Navbar>
      </div>
      
      </>
    )
}

export default CustomNav