import "./nav.css";

const LojaGames = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logos">
          <div className="navbar__logo">LojaGames</div>
          <img
            className="navbar__logo-2"
            src="/imgs/logo-controle.png"
            alt="Toggle Menu"
          />
        </div>
        <div className="navbar__options">
          <a href="#" className="navbar__option">
            Inicio
          </a>
          <a href="#" className="navbar__option">
            Jogos
          </a>
          <a href="#" className="navbar__option">
            Usados
          </a>
          <a href="#" className="navbar__option">
            Suporte
          </a>
        </div>
        <div className="navbar__cart">
          <a href="#">
            <img
              src="/imgs/carrinho-de-compras.png"
              alt=""
              className="cart__img"
            />
          </a>
        </div>
        <div className="navbar__profile">
          <img
            src="https://static.wixstatic.com/media/250b1d_1ff0b9f80c754f0a8651129d1ecad73b~mv2.png/v1/fill/w_368,h_346,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder%20Perfil.png"
            alt="Imagem de perfil do cliente"
            className="navbar__profile-image"
          />
          <div className="navbar__dropdown">
            <a href="#" className="navbar__dropdown-option">
              Entrar
            </a>
            <a href="#" className="navbar__dropdown-option">
              Criar
            </a>
          </div>
        </div>
      </nav>
      {/* Demais seções */}
    </div>
  );
};

export default LojaGames;
