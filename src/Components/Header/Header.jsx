import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-group-wrapper">
        <NavLink className="header-logo-group" to="">
          <img
            className="header-logo non-selectable"
            src={"https://maxkoltugin.github.io/How-Does-It-Work/logo.png"}
            alt=""
          />
        </NavLink>
        <div className="project-name-wrapper">
          <h3 className="project-name non-selectable">как это устроенно?</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
