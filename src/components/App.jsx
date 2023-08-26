import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts.list/ContactsList';
import { Section } from './Seaction/Section';
import { ContactsForm } from './Form/ContactsForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (this.checkContactName(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    }

    // берем предсостояние старого обьекта, добавляем туда новый обьект
    // и распыляем туда старый обьект

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  checkContactName = newName => {
    return this.state.contacts.find(({ name }) => name === newName);
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    // Беремо обʼєкт із localStorage
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    // перевірка на випадок пустого обʼєкта на початку роботи Арр
    if (parsedContacts) {
      // і записуємо його у state, щоб після оновлення рендерився змінений обʼєкт
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    // console.log('App didUpdate');

    //  запис обʼєкта у localStorage
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
