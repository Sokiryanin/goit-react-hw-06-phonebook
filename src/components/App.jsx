import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts.list/ContactsList';
import { Section } from './Seaction/Section';
import { ContactsForm } from './Form/ContactsForm';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}

export default App;
