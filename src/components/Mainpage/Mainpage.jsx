import { Button } from "components/Button/Button";
import { Form } from "../Form/Form";
import styles from './Mainpage.module.css'

export const Mainpage = () => {
  return (
    <main className={styles.mainPage}>
      <h2>Calculate your daily calorie intake right now</h2>
      <Form />
      <Button/>
    </main>
  );
};
