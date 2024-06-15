import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="./svg/header-logo.svg"
          alt="logo"
        />

        <div className={styles.content}>
          <div className={styles.linkContent}>
            <Link href="/" className={styles.link}>
              News
            </Link>

            <Link href="/" className={styles.link}>
              Features
            </Link>

            <Link href="/" className={styles.link}>
              Topics
            </Link>

            <Link href="/" className={styles.link}>
              Video
            </Link>

            <Link href="/" className={styles.live}>
              <span className={styles.status}></span>
              <div className={styles.link}>Live</div>
            </Link>

            <div className={styles.search}>
              <img
                className={styles.searchIcon}
                src="./svg/search.svg"
                alt="search"
              />
            </div>
          </div>

          <img
            className={styles.mobileMenu}
            src="./svg/search.svg"
            alt="menu"
          />

          <img
            className={styles.mobileMenu}
            src="./svg/menu.svg"
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
};