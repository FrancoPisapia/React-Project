import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { FaShoppingCart } from 'react-icons/fa';
import { Link} from "react-router-dom";


const CustomNav = () =>{

    return(

      <>

      <div className='row'>
        <Navbar bg="light" expand="lg" className='estiloNavBar'>
        <Container>
          <Navbar.Brand className='col-lg-4'> <Link to={'/'} className = 'linkNav'> Óptica FG </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />

            <Navbar.Collapse id="basic-navbar-nav" className='col-lg-6 '>
              <Nav className="me-auto">
                <div className='linksNav'>
                <Link to={'/category/lentes'} className = 'linkNav'>Lentes</Link>
                <Link to={'/category/sol'}  className = 'linkNav'> Sun</Link>
                <Link to={'/category/contacto'}  className = 'linkNav'>Lentes de contacto</Link>
                </div>

                <div className='margen-der col-lg-3 letraNegro'>
                  <Link to={'#'} className='letraNegro linkNav'>Register</Link>
                  <Link to={'#'} className='letraNegro linkNav'>Sign In</Link>
                  <div>
                  <Link to={'/cart'} className = 'linkNav'> <FaShoppingCart /></Link>
                    <CartWidget />
                  
                  
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

export default CustomNav;