import { Input } from 'components/Input/Input';
import styles from './Form.module.css';

export const Form = () => {
  return (
    <form>
    
  
      <label>
        <Input
          type="number"
          id="Height"
          name="Height"
          placeholder="Height*"
          required
        />
      </label>
      <label>
        <Input type="number" id="Age" name="Age" placeholder="Age*" required />
      </label>
      <label>
        <Input
          type="number"
          id="cweight"
          name="cweight"
          placeholder="Current weight*"
          required
        />
      </label>
         <div className={styles.radioGroup}>
      <label>Blood type*</label>
        <div className={styles.radioButtons}>
          <label>
            <input type="radio" name="blood-type" value="1" required /> Z
          </label>
          <label>
            <input type="radio" name="blood-type" value="2" required /> C
          </label>
          <label>
            <input type="radio" name="blood-type" value="3" required /> B
          </label>
          <label>
            <input type="radio" name="blood-type" value="4" required /> A
          </label>
        </div>
         
      </div>
      <label>
        <Input
          type="number"
          id="dweight"
          name="dweight"
          placeholder="Desired height*"
          required
        />
      </label>

     
    </form>
  );
};
