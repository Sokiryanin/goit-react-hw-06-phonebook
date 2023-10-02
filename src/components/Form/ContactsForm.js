import { Label, Button, StyledForm } from './Form.styled';
import { Formik, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short name!').required('Required!'),
});

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkedContact = contact => {
    return contacts.some(
      element => element.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const newContact = contact => {
    if (checkedContact(contact)) {
      toast.error(`${contact.name} already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validSchema}
      onSubmit={(values, actions) => {
        newContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name:
          <Field name="name" type="text" />
        </Label>
        <Label>
          Tel:
          <Field name="number" type="tel" />
        </Label>

        <Button type="submit">Add contact</Button>
        <Toaster />
      </StyledForm>
    </Formik>
  );
};
