import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navigation}>
          <img src="./logo-png.png" alt="Logo" />
          <ul>
            <li className="text">LOG IN</li>
            <li className="text">REGISTER</li>
          </ul>

      </nav>
      <span></span>
    </div>
  );
};
