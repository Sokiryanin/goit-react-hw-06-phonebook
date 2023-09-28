import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, List } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const filteredContacts = getVisibleContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
