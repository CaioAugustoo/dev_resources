import React from "react";
import ScrollTopSVG from "../../img/back_top.svg";
import "./style.css";

const ScrollTop = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const scrolledWindow = () => {
      window.scrollY > 350 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", scrolledWindow);
    return () => {
      window.removeEventListener("scroll", scrolledWindow);
    };
  }, []);

  return (
    <button
      style={{
        opacity: scrolled ? "1" : "0",
        transform: scrolled ? "translateY(0rem)" : "translateY(1rem)",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={ScrollTopSVG} alt="Scroll top" />
    </button>
  );
};

export default ScrollTop;
