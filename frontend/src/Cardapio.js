import React from 'react'
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import {  Button, Card, ListGroup } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';

function Cardapio() {
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

        <div className="cardapio">
          {/* Pizza de calabresa*/}
        <Card  className='card-item'>
          <Card.Img variant="top" src="calabresa.jpg" alt="Imagem do prato" />
            <Card.Body className='card-item-body'>
                <Card.Title className='card-item-titulo'>Calabresa</Card.Title>
                <Card.Text className='card_texto'>
                Deliciosa massa crocante coberta com molho de tomate caseiro, 
                generosas fatias de calabresa defumada, queijo mussarela derretido e cebola fresca.
                </Card.Text>
                <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 34,70</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>


        {/* Pizza de brocoles*/}
        <Card className='card-item'>
          <Card.Img variant="top" src="brocoles.png" alt="Imagem do prato"/>
            <Card.Body className='card-item-body'>
              <Card.Title className='card-item-titulo'>Brócoles</Card.Title>
              <Card.Text className='card_texto'>
              Massa crocante coberta com molho de tomate caseiro, 
              brócolis frescos e levemente refogados, queijo mussarela derretido e um toque de ervas aromáticas. 

              </Card.Text>
              <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 32,00</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>

        
        {/* Pizza de chocolate*/}
        <Card className='card-item'>
          <Card.Img variant="top" src="chocolate.jpg" alt="Imagem do prato" />
            <Card.Body className='card-item-body'>
              <Card.Title className='card-item-titulo'>Chocolate</Card.Title>
              <Card.Text className='card_texto'>
              Massa crocante coberta com delicioso creme de chocolate, generosas raspas de chocolate ao leite 
              e finalizada com uma pitada de cacau em pó.    
              </Card.Text>
              <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 42,00</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>

         {/* Pizza de margherita*/}
         <Card className='card-item'>
          <Card.Img variant="top" src="margherita.jpg" alt="Imagem do prato"/>
            <Card.Body className='card-item-body'>
              <Card.Title className='card-item-titulo'>Margherita</Card.Title>
              <Card.Text className='card_texto'>
              Massa fina e crocante coberta com molho de tomate fresco, queijo mussarela derretido, 
              fatias de tomate suculento e folhas de manjericão fresco. 
              </Card.Text >
              <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 39,50</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>


        {/* Pizza de queijo*/}
        <Card  className='card-item'>
          <Card.Img variant="top" src="queijo.png" alt="Imagem do prato"/>
            <Card.Body className='card-item-body'>
              <Card.Title className='card-item-titulo'>Queijo</Card.Title>
              <Card.Text className='card_texto'>
                Deliciosa massa crocante coberta com molho de tomate caseiro, 
                generosas fatias de calabresa defumada, queijo mussarela derretido e cebola fresca.
              </Card.Text>
              <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 37,90</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>


        
        {/* Pizza de frango*/}
        <Card  className='card-item'>
          <Card.Img variant="top" src="frango.jpg" alt="Imagem do prato"/>
            <Card.Body className='card-item-body'>
              <Card.Title className='card-item-titulo'>Frango</Card.Title>
              <Card.Text className='card_texto'>
              Massa crocante coberta com molho de tomate caseiro, suculentos pedaços de frango grelhado,
               queijo mussarela derretido e uma combinação de temperos e especiarias para realçar o sabor. 
              </Card.Text>
              <div className='card-item-rodape'>
                  <Card.Text>Preço: R$ 34,70</Card.Text>
                  <Button variant="primary" style={{ width: '50px', height: '40px' }}>
                    <MdShoppingCart size={25} />
                  </Button>                    
              </div>
            </Card.Body>
        </Card>
        </div>

        <section className="informacoes"> 
             <div className="informacoes__contato">   
                <h2>Contate-nos</h2>
                <p>E-mail: contato@appetito.com</p>
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

export default Cardapio;
