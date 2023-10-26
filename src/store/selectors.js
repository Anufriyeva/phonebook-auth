export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

export const getToken = state => state.authUser.token;
export const getUserData = state => state.authUser.user


export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );