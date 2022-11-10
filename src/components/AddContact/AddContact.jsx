import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, GetListContact, updateContact } from '../../actions/GetListContact';

const AddContact = () => {
  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const { addContactResult, detailContactResult, updateContactResult } = useSelector((state) => state.ContactReducers);

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      console.log(`3. Masuk handle submit`);
      dispatch(updateContact({ id: id, nama: nama, nomor: nomor }));
    } else {
      dispatch(addContact({ nama: nama, nomor: nomor }));
    }
  };

  // ADD CONTACT
  useEffect(() => {
    if (addContactResult) {
      dispatch(GetListContact());
      setNama('');
      setNomor('');
    }
  }, [addContactResult, dispatch]);

  // DETAIL CONTACT
  useEffect(() => {
    if (detailContactResult) {
      setNama(detailContactResult.nama);
      setNomor(detailContactResult.nomor);
      setId(detailContactResult.id);
    }
  }, [detailContactResult, dispatch]);

  // UPDATE CONTACT
  useEffect(() => {
    if (updateContactResult) {
      dispatch(GetListContact());
      setNama('');
      setNomor('');
      setId('');
    }
  }, [updateContactResult, dispatch]);

  return (
    <>
      <h3>{id ? 'ubah Contact' : 'add Contact'}</h3>
      <form action="" method="post" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="nama">Nama</label>
        <input type="text" name="nama" value={nama} placeholder="nama..." onChange={(event) => setNama(event.target.value)} />
        <label htmlFor="nomor">Nomor Hp</label>
        <input type="text" name="nomor" value={nomor} placeholder="no hp..." onChange={(event) => setNomor(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddContact;
