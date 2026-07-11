import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <img className={styles.logo} src="../../public/logo-footer.svg"></img>
      </div>
    </footer>
  );
};
