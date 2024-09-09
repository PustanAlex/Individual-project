import { Button } from "components/Button/Button";
import { Form } from "../Form/Form";
import styles from './Mainpage.module.css';
import { Route, Routes } from "react-router-dom";
import { Login } from "components/Login/Login";
import { Register } from "components/Register/Register";
import { CaloriesModal } from "components/CaloriesModal/CaloriesModal";
import React, { useState } from 'react';


export const Mainpage = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)


  return (
    <main className={styles.mainPage}>
      <Routes>
        <Route path="/home" element={
          <>
            <h2>Calculate your daily calorie intake right now</h2>
            <Form />
            <Button className={styles.desktopFormButton}  onClick={openModal} text={"Calculate"} />
          </>
        }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
        <CaloriesModal isOpen={isModalOpen} onClose={closeModal}/>
    </main>
  );
};
