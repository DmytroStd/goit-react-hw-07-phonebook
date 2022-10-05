////done
import { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  phone: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, phone } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.txt}>name</span>
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Barack Obama"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.txt}>number</span>
        <input
          className={styles.input}
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          placeholder="111-22-33"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
  onSubmit: () => {},
};

export default ContactForm;
