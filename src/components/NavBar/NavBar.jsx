import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
import "./style.css";

const NavBar = () => {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    toggle
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "visible"
  }, [toggle]);

  return (
    <React.Fragment>
      {/* Header */}
      <header>
        <div className="container">
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", 
            alignItems: "center" }}
          >
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>

            <div id="toggler__menu">
              <div
                id="m1"
                className={
                  toggle 
                  ? "toggler__menu__toggled" 
                  : "toggler__menu__untoggled"
                }
                onClick={() => setToggle(!toggle)}
              >
                <div className="d1"></div>
                <div className="d2"></div>
                <div className="d3"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        id="menu__mobile"
        style={{
          transform: toggle 
          ? "translateY(0rem)" 
          : "translateY(-55rem)"
        }}
      >
        <ul id="menu__mobile__links">
          <li>
            <NavLink to="/" 
              end 
              onClick={() => setToggle(false)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/icons" 
              end 
              onClick={() => setToggle(false)}
            >
              ICONS
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/fonts" 
              end 
              onClick={() => setToggle(false)}
            >
              FONTES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/inspirations"
              end
              onClick={() => setToggle(false)}
            >
              INSPIRAÇÕES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/illustrations"
              end
              onClick={() => setToggle(false)}
            >
              ILUSTRAÇÕES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/imagesoptimization"
              end
              onClick={() => setToggle(false)}
            >
              OTIMIZAÇÃO DE IMAGENS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/colorstools"
              end
              onClick={() => setToggle(false)}
            >
              FERRAMENTAS DE CORES
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
