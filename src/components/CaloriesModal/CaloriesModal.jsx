import { useEffect, useRef } from 'react';
import styles from './CaloriesModal.module.css';

export const CaloriesModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.caloriesModalWrapper} ref={modalRef}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>Your recommended daily calorie intake is:</h2>
                <p className={styles.kcalNeeded}>2800 kcal</p>
                <div className={styles.unrecommendedFood}>
                    <span className={styles.horizontalLine}></span>
                    <h3>Foods you should not eat</h3>
                    <ul className={styles.unrecommendedProducts}>
                        <li>Smoked products</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
