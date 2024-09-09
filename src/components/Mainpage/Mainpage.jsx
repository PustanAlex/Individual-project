import { Button } from "components/Button/Button";
import { Form } from "../Form/Form";
import styles from './Mainpage.module.css';
import { Route, Routes } from "react-router-dom";
import { Login } from "components/Login/Login";
import { Register } from "components/Register/Register";

export const Mainpage = () => {
  return (
    <main className={styles.mainPage}>
      <Routes>
        <Route path="/home" element={
          <>
            <h2>Calculate your daily calorie intake right now</h2>
            <Form />
            <Button className={styles.desktopFormButton} text={"Calculate"} />
          </>
        }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};
