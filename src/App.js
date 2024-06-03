import React from 'react';
import './App.css';

function App() {
    const orderBurger = (burgerName) => {
        alert(`Pedido do ${burgerName} recebido!`);
    };

    return (
        <div className="App">
                <header>
                    <h1>Burger Place</h1>
                    <nav>
                        <ul>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#local">Localização</a></li>
                        </ul>
                    </nav>
                </header>

                <section id="home">
                    <h2>Bem-vindo ao Burger Place!</h2>
                    <p>Os melhores hambúrgueres da cidade!</p>
                </section>

                <div className="cab">
                    <h3>Cardápio</h3>
                </div>

                <section id="menu">
                    <div className="burger">
                        <img src="/images/classic_burger.jpg" alt="Classic Burger" />
                        <h3>Classic Burger</h3>
                        <p>Delicioso hambúrguer clássico com queijo, alface, tomate e nossa maionese especial.</p>
                        <button onClick={() => orderBurger('Classic Burger')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/cheese_bacon_burger.jpg" alt="Cheese Bacon Burger" />
                        <h3>Cheese Bacon Burger</h3>
                        <p>Hambúrguer suculento com queijo derretido e bacon crocante.</p>
                        <button onClick={() => orderBurger('Cheese Bacon Burger')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/veggie_burger.jpg" alt="Veggie Burger" />
                        <h3>Veggie Burger</h3>
                        <p>Uma opção vegetariana deliciosa com grão-de-bico e especiarias.</p>
                        <button onClick={() => orderBurger('Veggie Burger')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/megamonster.jpg" alt="MegaMonster Burger" />
                        <h3>MegaMonster Burger</h3>
                        <p>Uma opção para quem tem fome de leão.</p>
                        <button onClick={() => orderBurger('MegaMonster Burger')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/bacon 2.0.jpg" alt="Bacon 2.0 Burger" />
                        <h3>Bacon 2.0</h3>
                        <p>Uma opção deliciosa com duplo sabor bacon.</p>
                        <button onClick={() => orderBurger('Bacon 2.0 Burger')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/smash bacon.jpg" alt="Smash Bacon" />
                        <h3>Smash Bacon</h3>
                        <p>Hamburguer smash com bacon e cheddar</p>
                        <button onClick={() => orderBurger('Smash Bacon')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/combo bacon.jpg" alt="Combo Smash Bacon + Coca" />
                        <h3>Combo Smash Bacon + Coca + Fritas</h3>
                        <p>Combo Smash Bacon + Coca Cola Lata 350ML + Fritas Média.</p>
                        <button onClick={() => orderBurger('Combo Smash Bacon + Coca')}>Pedir</button>
                    </div>
                    <div className="burger">
                        <img src="/images/fritasbacon.jpg" alt="Fritas e Bacon" />
                        <h3>Fritas e Bacon</h3>
                        <p>Fritas e Bacon 400gr serve até 2 pessoas.</p>
                        <button onClick={() => orderBurger('Fritas e Bacon')}>Pedir</button>
                    </div>
                </section>

                <section id="about">
                    <h2>Sobre Nós</h2>
                    <p>Na Burger Place, somos apaixonados por hambúrgueres artesanais. Nossa missão é proporcionar uma experiência gastronômica única com ingredientes frescos e de alta qualidade. Cada hambúrguer é preparado com amor e atenção aos detalhes, garantindo sabor e satisfação em cada mordida. Valorizamos a conexão com nossos clientes e a comunidade local. Venha nos visitar e descubra o verdadeiro sabor dos nossos hambúrgueres!</p>
                </section>

                <section id="local">
                    
                <h2>Localização</h2>
                <iframe

                    title="Localização do Burger Place"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.5746802825456!2d-122.40651468450954!3d37.785146372820656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e6a7e51d34f%3A0xb5b919879e9bd20e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1622708009790!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

            </section>

            <div className="spacer"></div>

            <footer className="footer"> 
                <p>&copy; 2024 Burger Place. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}


export default App;
