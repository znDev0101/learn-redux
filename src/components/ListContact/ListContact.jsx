import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListContact, deleteContact, detailContact } from '../../actions/GetListContact';

const ListContact = () => {
  const { getListContactResult, getListContactLoading, getListContactError, deleteContactResult } = useSelector((state) => state.ContactReducers);
  const dispatch = useDispatch();

  // GET CONTACT
  useEffect(() => {
    dispatch(GetListContact());
  }, [dispatch]);

  // DELETE CONTACT
  useEffect(() => {
    if (deleteContactResult) {
      dispatch(GetListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <div className="list-contact">
      <h4>List Contact</h4>
      {getListContactResult ? (
        getListContactResult.map((Contact) => {
          return (
            <p key={Contact.id}>
              {Contact.nama} - {Contact.nomor}
              <button
                style={{ margin: '10px' }}
                onClick={() => {
                  if (window.confirm('yakin data mau di hapus?')) {
                    dispatch(deleteContact(Contact.id));
                  }
                }}
              >
                Hapus
              </button>
              <button onClick={() => dispatch(detailContact(Contact))}>Ubah</button>
            </p>
          );
        })
      ) : getListContactLoading ? (
        <p>...Loading</p>
      ) : (
        <p>{getListContactError ? getListContactError : 'Data Kosong'}</p>
      )}
    </div>
  );
};

export default ListContact;
