//////done !
export const getContacts = ({ contacts }) => contacts.items;

export const getFilterContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = phone.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });
  return result;
};

export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});

export const getFilter = ({ filter }) => filter;
