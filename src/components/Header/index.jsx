import "./style.scss";

// images
import Logo from "../../assets/images/Logo-main.svg";
import TextFieldIcon from "../../assets/images/text_field.svg"
import FullscreenIcon from "../../assets/images/fullscreen.svg"
import Search from "../../assets/images/search.svg"
// import  from "../../assets/images/"
// import  from "../../assets/images/"
// import  from "../../assets/images/"



function Header() {

  return(
    <header className="header">
      <img src={Logo} alt="logo" />
      <div className="right">
        <select name="language" className="language">
          <option value="o'zbek">O'zb</option>
          <option value="russia">Ru</option>
          <option value="english">Eng</option>
        </select>
        <span className="text_field me">
          <img src={TextFieldIcon} alt="icon" width={24} height={24} />
        </span>
        <span className="text_field me">
          <img src={FullscreenIcon} alt="icon" width={24} height={24} />
        </span>
        <span className="text_field">
          <img src={Search} alt="icon" width={24} height={24} />
        </span>
        <div className="account-wrap">
          <div className="text-wrap">
            <div className="name">Mardon Shonazarov</div>
            <span className="role">Админ</span>
          </div>
          <div className="img-wrap">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;