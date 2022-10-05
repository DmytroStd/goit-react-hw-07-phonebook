////done

import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, onDeleteContact, id }) => {
  return (
    <>
      <li className={styles.item}>
        {`${name} : ${phone}`}
        <button className={styles.btn} onClick={() => onDeleteContact(id)}>
          delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
  id: PropTypes.string,
};

export default ContactListItem;
