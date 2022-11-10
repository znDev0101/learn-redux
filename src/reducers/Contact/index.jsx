import { GET_LIST_CONTACT, ADD_CONTACT, DELETE_CONTACT, DETAIL_CONTACT, UPDATE_CONTACT } from '../../actions/GetListContact';

const initialState = {
  // GET CONTACTS
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,

  // ADD CONTACTS
  addContactResult: false,
  addContactLoading: false,
  addContactError: false,

  // DELETE CONTACTS
  deleteContactResult: false,
  deleteContactLoading: false,
  deleteContactError: false,

  // DETAIL CONTACT
  detailContactResult: false,

  // UPDATE CONTACT
  updateContactResult: false,
  updateContactLoading: false,
  updateContactError: false,
};

const Contact = (state = initialState, action) => {
  switch (action.type) {
    // GET CONTACTS
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage,
      };

    // ADD CONTACTS
    case ADD_CONTACT:
      console.log('4. Masuk Reducer', action);
      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage,
      };

    // DELETE CONTACTS
    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactResult: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessage,
      };

    // DETAIL CONTACTS
    case DETAIL_CONTACT:
      return {
        ...state,
        detailContactResult: action.payload.data,
      };

    // UPDATE CONTACT
    case UPDATE_CONTACT:
      console.log('6. Masuk reducer');
      return {
        ...state,
        updateContactResult: action.payload.data,
        updateContactLoading: action.payload.loading,
        updateContactError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Contact;
