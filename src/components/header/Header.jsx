import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
    <nav>
      <ul>
        <li className="menu-item"><a href="#">HOME</a></li>
        <li className="menu-item"><a href="#">GENER</a></li>
        <li className="menu-item"><a href="#">TYPES</a></li>
        <li className="menu-item"><a href="#">UPDATE</a></li>
        <li className="menu-item"><a href="#">ONGOING</a></li>
        <li className="menu-item">
          <button>
            <span>Login </span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </li>
        <li className="menu-item">
          <button>
            <span>SignUp </span>
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  )
}
