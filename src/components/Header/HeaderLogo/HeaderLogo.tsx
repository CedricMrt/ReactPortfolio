import logo from "../../../assets/img/1711096666851.webp";
import "./HeaderLogo.scss";

function HeaderLogo() {
  return (
    <div className='navbar__logo'>
      <img src={logo} alt='photo de profil' className='logo' />
    </div>
  );
}

export default HeaderLogo;
