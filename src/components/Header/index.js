// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="header-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="logo"
        className="header-logo"
      />
    </div>
    <div className="header-menu-container">
      <button className="header-option" type="button">
        Home
      </button>
      <button className="header-option" type="button">
        Products
      </button>
      <button className="header-option" type="button">
        Cart
      </button>
      <button className="header-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
