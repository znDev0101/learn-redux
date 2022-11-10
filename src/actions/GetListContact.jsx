export const GET_LIST_CONTACT = 'GET_LIST_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DETAIL_CONTACT = 'DETAIL_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

// GET CONTACT
export const GetListContact = () => {
  return (dispatch) => {
    //   loading
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMesagge: false,
      },
    });

    // get api
    fetch(`http://localhost:3004/Contacts`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: response,
            errorMesagge: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMesagge: error.message,
          },
        });
      });
  };
};

// ADD CONTACT
export const addContact = (data) => {
  return (dispatch) => {
    //   loading
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMesagge: false,
      },
    });

    // GET ADD DATA API
    fetch(`http://localhost:3004/Contacts`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: response,
            errorMesagge: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMesagge: error.message,
          },
        });
      });
  };
};

// DELETE CONTACT
export const deleteContact = (id) => {
  return (dispatch) => {
    //   loading
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMesagge: false,
      },
    });

    // Delete
    fetch(`http://localhost:3004/Contacts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('3. berhasil dapet data ' + response);
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: response,
            errorMesagge: false,
          },
        });
      })
      .catch((error) => {
        console.log('3. gagal dapet data : ' + error);
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMesagge: error.message,
          },
        });
      });
  };
};

// GET DETAIL CONTACT
export const detailContact = (data) => {
  return (dispatch) => {
    console.log(`1. Get data contact ${data}`);
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

// UPDATE CONTACT
export const updateContact = (data) => {
  console.log('4. Masuk Action');
  return (dispatch) => {
    //   loading
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMesagge: false,
      },
    });

    // UPDATE DATA CONTACT
    fetch(`http://localhost:3004/Contacts/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('5. berhasil dapet data ' + response);
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: response,
            errorMesagge: false,
          },
        });
      })
      .catch((error) => {
        console.log('5. gagal dapet data : ' + error);
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMesagge: error.message,
          },
        });
      });
  };
};
