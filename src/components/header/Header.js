import React, { useContext, useState } from "react";
import styles from "./header.module.css";
import bg from "../../assets/desktop/bg-pattern-header.svg";
import moon from "../../assets/desktop/icon-moon.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import mag from "../../assets/desktop/icon-search.svg";
import location from "../../assets/desktop/icon-location.svg";
import Button from "../button/Button";
import Toggle from "../toggle/Toggle";
import { MyContext } from "../../Context";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { setDescription, setLocation, setFullTime } = useContext(MyContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>devjobs</h1>
      <div className={styles.sliderContainer}>
        <img src={sun} alt="Sun Icon" />
        <Toggle toggle={(ev) => console.log(ev)} />
        <img src={moon} alt="Moon Icon" />
      </div>
      <div className={styles.searchBar}>
        <div className={styles.query}>
          <img src={mag} />
          <input
            onKeyDown={(ev) => setDescription(ev.target.value)}
            type="text"
            placeholder="Filter by title, companies, expertise, etc..."
          />
        </div>
        <div className={styles.filter}>
          <img src={location} />
          <input
            type="text"
            placeholder="Filter by location..."
            onKeyDown={(ev) => setLocation(ev.target.value)}
          />
        </div>
        <div className={styles.fulltime}>
          <input
            type="checkbox"
            onClick={(ev) => {
              setFullTime(!toggle);
              setToggle(!toggle);
            }}
          />
          <p>Fulltime Only</p>
        </div>
        <Button>Search</Button>
      </div>
      <img
        src={bg}
        className={styles.bg}
        height="160px"
        width="100%"
        alt="Header Background"
      />
    </div>
  );
};

export default Header;
