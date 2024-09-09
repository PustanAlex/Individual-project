import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.formSummary}>
        <h3>Summary for</h3>
        <p>
          Left <span>000 kcal</span>
        </p>
        <p>
          Consumed <span>000 kcal</span>
        </p>
        <p>
          Daily rate <span>000 kcal</span>
        </p>
        <p>
          n% of normal <span>000 kcal</span>
        </p>
      </div>
      <div className={styles.recommandationFooter}>
      <h3>Food not recommended</h3>
      <p>Your diet will be displayed here</p>
      </div>
     
    </footer>
  );
};
