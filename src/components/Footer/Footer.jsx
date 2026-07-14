import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <img className={styles.logo} src="/logo-footer.svg"></img>
      </div>
    </footer>
  );
};
