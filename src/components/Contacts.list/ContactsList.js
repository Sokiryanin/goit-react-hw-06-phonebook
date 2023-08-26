import { DeleteButton, List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}: </p>
          <p>{number}</p>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
