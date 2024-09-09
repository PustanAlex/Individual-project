import styles from './Register.module.css';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';

export const Register = () => {
  return (
    <div className={styles.registerWrapper}>
      <h3>Register</h3>
      <form>
        <label htmlFor='username' id='username'>
          <Input type="text" name="username" placeholder='Name*'  />
        </label>
        <label htmlFor='email' id='email'>
          <Input type="email" name="email" placeholder='Email*' />
        </label>
        <label htmlFor='password' id='password'>
          <Input type="password" name="password" placeholder='Password*' />
        </label>
        <Button className={styles.registerButton} text={'Register'}/>
      </form>
    </div>
  );
};
