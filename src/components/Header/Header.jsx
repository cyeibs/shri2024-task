import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleMenuClick = () => {
    if (!isMenuToggled) {
      setIsMenuToggled(true);
    }
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <header className="header">
      <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
      <button
        className="header__menu"
        aria-expanded={isMenuExpanded ? "true" : "false"}
        onClick={handleMenuClick}
      >
        <span className="header__menu-text a11y-hidden">
          {isMenuExpanded ? "Закрыть меню" : "Открыть меню"}
        </span>
      </button>
      <ul
        className={`header__links${
          isMenuExpanded ? " header__links_opened" : ""
        }${isMenuToggled ? " header__links-toggled" : ""}`}
      >
        <li className="header__item">
          <a
            className="header__link header__link_current"
            href="/"
            aria-current="page"
          >
            Сводка
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/devices">
            Устройства
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/scripts">
            Сценарии
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
