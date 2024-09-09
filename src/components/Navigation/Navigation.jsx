import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navigation}>
        <Link to='/home'>
        <div className={styles.logoWrapper}>
          <img src="./logo-png.png" alt="Logo" />
          <p className={styles.startWord}>Start<i className={styles.slimmingWord}>Slimming</i></p>
        </div>
        </Link>
      
        <span className={styles.verticalLine}></span>
        <ul>
          <li className={styles.text}><Link to="/login">LOG IN</Link></li>
          <li className={styles.text}><Link to="/register">REGISTER</Link></li>
        </ul>
      </nav>
      <span className={styles.horizontalLine}></span>
    </div>
  );
};
