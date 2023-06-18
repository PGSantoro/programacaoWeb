import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import { FaSignOutAlt } from 'react-icons/fa';

function Home() {
  return (
    <div>
       <header className='cabecalho'>
            <div className="header__logo">
                <img src="LOGO_MENOR.png" alt="Logo La Veneta"/>
            </div>

            <div className="header__menu">
                    <Link exact to="/Home" className="nav-link">Home</Link>
                    <Link to="/Cardapio" className="nav-link">Cardápio</Link>
                    <Link to="/" className="nav-link btn"><FaSignOutAlt /> Sair</Link>
            </div>
        </header>
 
      <div className="carrossel">
        <img src="imagem-slide1.jpg" alt="La Veneta"/>
        <img src="imagem-slide2.jpg" alt="La Veneta"/>
        <img src="imagem-slide3.jpg" alt="La Veneta"/>
        <img src="imagem-slide4.jpg" alt="La Veneta"/>
      </div>

      <section className="sobreNos">     
                <div className="sobreNos__imagem">
                    <img src="imagem-sobre.jpg" alt="Imagem sobre nós" />
                </div>

                <div className="sobreNos__texto">
                    <h2>Appetito</h2>
                    <p>
                        Bem-vindo à Pizzaria Appetito! Nossa história começa há mais de 20 anos, quando nosso fundador,
                        Alessio, trouxe para o Brasil sua paixão pela culinária italiana. Com dedicação, amor pela comida
                        e um toque de tradição, Alessio abriu as portas da Pizzaria Appetito com o objetivo de oferecer
                        aos nossos clientes uma experiência única e deliciosa.
                    </p>
                    <p>
                        Nossas pizzas são feitas à mão com receitas tradicionais italianas usando ingredientes selecionados
                        na hora. Além da pizza, oferecemos também uma variedade de pratos clássicos italianos como massas frescas,
                        aperitivos, saladas e sobremesas, todos preparados com a mesma paixão e atenção aos detalhes.
                    </p>
                    <p>
                        Na Pizzaria Appetito, acreditamos que a comida é uma forma de amor e queremos compartilhar essa paixão
                        com você. Nossa equipe dedicada trabalha incansavelmente para oferecer um serviço excelente e uma experiência
                        gastronômica inesquecível a todos.
                    </p>
                </div>
        </section>
        <section className="informacoes"> 
             <div className="informacoes__contato">   
                <h2>Contate-nos</h2>
                <p>E-mail: contato@Appetito.com</p>
                <p>Telefone: +55 (11) 98765-4321</p>
                <p>Endereço: Rua da Pizzaria, 123, Bairro Central, São Paulo - SP, CEP 01234-567</p>
            </div>

            <div className="informacoes__sociais">
                <h2>Redes-Sociais</h2>
                <div className='informacoes__sociais__icones'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="facebook.png" alt="Facebook" className="social-media-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="instagram-logo.png" alt="Instagram" className="social-media-icon" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src="twitter-logo.png" alt="Twitter" className="social-media-icon" />
                </a>
                </div>
            </div> 
        </section>
    </div>
  )
}

export default Home
