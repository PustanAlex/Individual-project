import styles from './Login.module.css';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';


export const Login = () => {
  return (
    <div className={styles.logInWrapper} >
      <h3>Log In</h3>
      <form className={styles.formWrapper}>
        <label htmlFor='email' id='email'>
          <Input type="email" name="email" placeholder='Email*'  required/>
        </label>
        <label htmlFor='password' id='password'>
          <Input type="password" name="password" placeholder='Password*' required/>
        </label>
        <Button text={'Log in'}/>
      </form>
    </div>
  );
};