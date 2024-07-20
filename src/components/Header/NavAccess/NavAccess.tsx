import "./NavAccess.scss";
import { useTranslation } from "react-i18next";

interface NavAccessProps {
  classShowNav: string;
  toggleBurgerMenu: () => void;
}

function NavAccess({ toggleBurgerMenu, classShowNav }: NavAccessProps) {
  const { t } = useTranslation();
  return (
    <>
      <ul className='navbar__links'>
        <li className={`navbar__link ${classShowNav}`}>
          <a href='#skills' id='navbar__link1'>
            {t("translation.navbar__link1")}
          </a>
        </li>
        <li className={`navbar__link ${classShowNav}`}>
          <a href='#projects' id='navbar__link2'>
            {t("translation.navbar__link2")}
          </a>
        </li>
        <li className={`navbar__link ${classShowNav}`}>
          <a href='#contact' id='navbar__link4'>
            Contact
          </a>
        </li>
      </ul>
      <button
        id='burger'
        type='button'
        onClick={toggleBurgerMenu}
        aria-label='Toggle navigation'
      >
        <span className='bar'></span>
      </button>
    </>
  );
}

export default NavAccess;
