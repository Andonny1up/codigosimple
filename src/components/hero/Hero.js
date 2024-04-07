import Container from '../container/Container';
import logo from '../../assets/logo.svg';
import './Hero.css'

const Hero = () =>{
    return (
        <section className="hero">
        <Container>
          <div className="hero-inner">
            <img src={logo} className="hero-logo" alt="CodigoSimple.dev Logo" />
            <h1 className="hero-title">CodigoSimple.dev</h1>
            <p className="hero-paragraph">Pagina en Construcción.</p>
            <div className='btns-container'>
                <button className='btn-blue'>Leer Más</button>
                <button className='btn-default'>API </button>
            </div>
          </div>
        </Container>
        </section>
    )
}

export default Hero;