import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/pokedex">Pokedex</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/bigbasket">BigBasket</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/form">Simple form</Link></li>
                    <li><Link to="/products">Products Gallery</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;