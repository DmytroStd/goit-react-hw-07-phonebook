import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactListItem from '../contact-item/ContactListItem';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.list}>
          {contacts?.map(contact => (
            <ContactListItem
              className={styles.item}
              key={nanoid()}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p className={styles.text}>your phonebook is empty</p>
        </div>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func,
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
