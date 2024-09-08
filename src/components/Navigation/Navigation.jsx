import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navigation}>
        <div className={styles.logoWrapper}>
        <img src="./logo-png.png" alt="Logo" />
        <p className={styles.startWord}>Start<i className={styles.slimmingWord}>Slimming</i></p>
        </div>
    
          <span className={styles.verticalLine}></span>
          <ul>
            <li className="text">LOG IN</li>
            <li className="text">REGISTER</li>
          </ul>

      </nav>
      <span className={styles.horizontalLine}></span>
    </div>
  );
};
