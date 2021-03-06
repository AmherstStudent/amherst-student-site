const Sidebar = () => (
  <div className="bottom">
    <div className="nav-links">
      <a id="home" className="menu-item" href="/category/news">
        News
      </a>
      <a id="contact" className="menu-item" href="/category/opinion">
        Opinion
      </a>
      <a id="about" className="menu-item" href="/category/arts">
        Arts and Living
      </a>
      <a className="menu-item" href="/category/sports">
        Sports
      </a>
    </div>

    <style jsx>
      {`
        .bottom {
          height: 100%;
          background-color: var(--dark-purple);
          position: absolute;
          width: 100%;
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
