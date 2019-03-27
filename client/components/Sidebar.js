const Sidebar = () => (
  <div className="bottom">
    <div className="nav-links">
      <a id="home" className="menu-item" href="/">
        News
      </a>
      <a id="about" className="menu-item" href="/arts">
        Arts and Living
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Opinion
      </a>
      <a className="menu-item" href="">
        Sports
      </a>
    </div>

    <style jsx>
      {`
        .bottom {
          height: 40%;
          background-color: var(--dark-purple);
          position: absolute;
          width: 100vw;
          z-index: 20;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-links {
          display: flex;
          flex-direction: column;
          height: 80%;
          width: 100%;
          text-align: center;
          margin: 0 auto;
        }
        .menu-item {
          font-family: 'Karla', sans-serif;
          color: white;
          font-size: 30px;
          text-decoration: none;
          justify-content: space-between;
        }
      `}
    </style>
  </div>
)

export default Sidebar
