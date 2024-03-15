import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [testVersion, setTestVersion] = useState(); // useState to track & rendering of versions

  useEffect(() => {
    const randomVersion = Math.random() < 0.5 ? "Control version" : "B"; // logic to assign users to A or B version
    setTestVersion(randomVersion);
    // console.log(`Current version: ${randomVersion}`);
  }, []);

  //function to show tracked version:
  function trackClick(link) {
    const tracking = {
      event: "clicked_link",
      action: link,
      version: testVersion,
    };
    console.log(tracking);
  }

  return (
    <>
      {testVersion === "Control version" ? (
        <header className={styles.siteHeader}>
          <nav className={styles.siteNav}>
            <img
              src={logo}
              alt="Logo Elisabeth Behandling"
              className={styles.logo}
            />
            <ul className={styles.siteNav_menu}>
              <li>
                <a href="#">Om mig</a>
              </li>
              <li>
                <a href="#">Behandlingar</a>
              </li>
              <li>
                <a onClick={() => trackClick("Boka")} href="#">
                  Boka
                </a>
              </li>
              <li>
                <a href="#">Presentkort</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className={styles.siteHeader}>
          <nav className={styles.siteNav}>
            <img
              src={logo}
              alt="Logo Elisabeth Behandling"
              className={styles.logo}
            />
            <ul className={styles.siteNav_menu}>
              <li>
                <a href="#">Om mig</a>
              </li>
              <li>
                <a href="#">Behandlingar</a>
              </li>
              <li>
                <a onClick={() => trackClick("Boka direkt")} href="#">
                  Boka direkt
                </a>
              </li>
              <li>
                <a href="#">Presentkort</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};
export default Header;
