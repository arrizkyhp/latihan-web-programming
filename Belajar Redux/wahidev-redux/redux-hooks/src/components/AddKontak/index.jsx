import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak } from '../../actions/kontakAction';

const AddKontak = () => {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");

    const { addKontakResult } = useSelector((state) => state.kontakReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Action kontakAction.js
        dispatch(addKontak({nama: nama, nohp: nohp}))

        // clear input
        setNama("")
        setNohp("")
    }

    useEffect(() => {
      // Refresh list kontak ketika ada data baru
      if(addKontakResult) {
        dispatch(getListKontak())
      }

    }, [addKontakResult, dispatch])

  return (
    <div>
        <h3>AddKontak</h3>
        <form onSubmit={(e) => handleSubmit(e)} >
            <input type="text" name='nama' placeholder='Nama...' value={nama} onChange={(e) => setNama(e.target.value)} />
            <input type="text" name='nohp' placeholder='No HP...' value={nohp} onChange={(e) => setNohp(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddKontak