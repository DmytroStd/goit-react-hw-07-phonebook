////done with check import

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//////
import {
  fetchContacts,
  addContactFromApi,
  deleteContactFromApi,
} from '../redux/operations';
//////check
import { getFilterContacts, getContacts, getState } from 'redux/selectors';
import { setFilter } from '../redux/filterActions';
import { getFilter } from 'redux/selectors';
///////////
import Form from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import Container from './container/Container';
import { HeroTitle } from './titles/HeroTitle';
import { SecondaryTitle } from './titles/SecondaryTitle';
import { Loading } from './titles/Loading';
import styles from '../components/contact-list/ContactList.module.css';

const App = () => {
  const contacts = useSelector(getContacts);
  const { loading } = useSelector(getState);
  const filter = useSelector(getFilter);
  const filtredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = data => {
    dispatch(addContactFromApi(data));
  };

  const deleteContact = id => {
    dispatch(deleteContactFromApi(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      <HeroTitle />
      <Form onSubmit={addContact} contacts={contacts} />
      {/* <SecondaryTitle /> */}
      {contacts.length > 0 ? (
        <>
          <SecondaryTitle /> <Filter value={filter} onChange={changeFilter} />
        </>
      ) : (
        <div>
          <p className={styles.text}>your phonebook is empty</p>
        </div>
      )}
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      {!loading && contacts.length > 0 && (
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={deleteContact}
        />
      )}
      {loading && <Loading />}
    </Container>
  );
};

export default App;

// import { useSelector, useDispatch } from 'react-redux';
// import { addContactAction, removeContactAction } from 'redux/itemsSlice';
// import { getFilterContacts, getContacts } from 'redux/selectors';
// import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';
// ///////////
// import Form from './contact-form/ContactForm';
// import Filter from './filter/Filter';
// import ContactList from './contact-list/ContactList';
// import Container from './container/Container';
// import { HeroTitle } from './titles/HeroTitle';
// import { SecondaryTitle } from './titles/SecondaryTitle';

// const App = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const filtredContacts = getFilterContacts(contacts, filter);
//   const dispatch = useDispatch();

//   const addContact = data => {
//     dispatch(addContactAction(data));
//   };

//   const deleteContact = id => {
//     dispatch(removeContactAction(id));
//   };

//   const changeFilter = ({ target }) => {
//     dispatch(setFilter(target.value));
//   };

//   return (
//     <Container>
//       <HeroTitle />
//       <Form onSubmit={addContact} contacts={contacts} />
//       <SecondaryTitle />
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={filtredContacts} onDeleteContact={deleteContact} />
//     </Container>
//   );
// };

// export default App;
