import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';


const CustomNav = () =>{
    return(

      <>
      {/* 
<header id="header">
        <div className="container-fluid">
        <div className="row wrap">
          <h1 className="col-lg-6 col-12"> Fragüe Servicios de ingeniería</h1>
          <div className="col-lg-5 col-12 inciarSecion row">
          <a href="#" className="col-lg-5 col-5 inline-block">Iniciar Secion</a>
          <a href="#" className="col-lg-5 col-5 inline-block">Crear cuenta</a>
          <a href="#" className="col-lg-1 col-2 inline-block"><iconify-icon icon="bi:cart"></iconify-icon></a>
        </div>
        </div>
        </div>
          

            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                  <a className="navbar-brand logo" href="#" > </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav container-fluid navegador__lista">
                      <a className="nav-link" aria-current="page" href="sobre-nosotros.html">Sobre nosotros</a>
                      <a className="nav-link " href="#">Servicios</a>
                      <a className="nav-link " href="#">Trabajos Realizados</a>
                      <a className="nav-link " href="#">Nuestros Clientes</a>

                    </div>
                  </div>
                </div>
              </nav>
        </header>
*/}























      
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Óptica FG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Lentes</Nav.Link>
                <Nav.Link href="#link">Sun</Nav.Link>
                <Nav.Link href="#link">Lentes de contacto</Nav.Link>
                <div className='margen-izq'>
                  <Nav.Link>Registrarse  </Nav.Link>
                  <Nav.Link>Iniciar Sesion</Nav.Link>
                  <Nav.Link className='aaa'><FaShoppingCart /></Nav.Link>
                </div>
              </Nav>

            </Navbar.Collapse>

          

          
        </Container>
      </Navbar>
     
      
      </>
    )
}

export default CustomNav