import styles from './Input.module.css'

export const Input = (props) => {
    return (
        <input className={styles.inputStyle} {...props}/>
    )
}