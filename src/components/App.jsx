import { useEffect, useState } from 'react';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';
import './App.css';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Filter from './Filter';

const startContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Annie Moore', number: '227-91-27' },
];

const STORAGE_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(startContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setContacts(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(({ name }) => name === newContact.name) &&
      contacts.some(({ number }) => number === newContact.number)
    ) {
      Notify.failure('You have this contact in your book!');
      return;
    } else if (
      contacts.some(({ name }) => name === newContact.name) ||
      contacts.some(({ number }) => number === newContact.number)
    ) {
      Notify.warning('You have similar contact in your book!');
    }

    setContacts(contacts => [...contacts, newContact]);
    Notify.success('New contact has been added to your book!');
  };

  const handleFilter = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    contacts.filter(
      item => item.id === id && Notify.info(`Contact ${item.name} was deleted`)
    );

    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <Section title={'Phonebook'}>
        <Form onFormSubmit={addContact} />
      </Section>

      <Section title={'Contacts'}>
        <h2 className="filter-title">Find contact by name</h2>
        <Filter onFilter={handleFilter} filter={filter} />
        <Contacts contacts={filterContacts()} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};

export default App;
