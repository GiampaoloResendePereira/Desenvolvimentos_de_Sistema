import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="cabecalho ">
        <nav className="container navbar navbar-expand">
          <div>
            <span className="navbar-brand">LOGO</span>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link menu_link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu_link" href="">
                Sobre Nos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu_link" href="">
                contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="conteudo mt-3 container">
          <div className="row">
            <div className="conteudos col-10">
              <h2>Produtos</h2>
              <div className="container produto p-3">
                <h3>Batom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident excepturi, labore magni voluptate cupiditate,
                  ratione possimus autem dignissimos minus, eos assumenda quos
                  eius rem culpa enim? Perspiciatis quam nisi accusantium.
                </p>
                <button className="btn btn-warning me-3">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
              <div className="container produto p-3">
                <h3>Sombra</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident excepturi, labore magni voluptate cupiditate,
                  ratione possimus autem dignissimos minus, eos assumenda quos
                  eius rem culpa enim? Perspiciatis quam nisi accusantium.
                </p>
                <button className="btn btn-warning me-3">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
            </div>
            <aside className="col-2">
              <h4>Perfumaria</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Sabonete <span className="badge text-bg-primary rounded-pill">8</span></li>
                <li className="list-group-item">Colonia <span className="badge text-bg-primary rounded-pill">8</span></li>
                <li className="list-group-item">Vela <span className="badge text-bg-primary rounded-pill">8</span></li>
                <li className="list-group-item">Body Splash <span className="badge text-bg-primary rounded-pill">8</span></li>
              </ol>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
