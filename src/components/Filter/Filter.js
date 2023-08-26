import { InputFilter } from './Filter.styled';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <div>
      <InputFilter
        type="text"
        value={value}
        onChange={evt => {
          onChangeFilter(evt.target.value);
        }}
        placeholder="Contacts filter"
      />
    </div>
  );
};
