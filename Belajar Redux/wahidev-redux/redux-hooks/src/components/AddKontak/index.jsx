import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak, cancelSubmitKontak } from '../../actions/kontakAction';

const AddKontak = () => {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");

    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.kontakReducer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(id) {
          // Update Kontak
          dispatch(updateKontak({id: id, nama: nama, nohp: nohp}))
        } else {
          // Add New Kontak
          // Action kontakAction.js
          dispatch(addKontak({nama: nama, nohp: nohp}))
        }

        // clear input
        setNama("")
        setNohp("")
    }

    const handleCancel = (e) => {
      e.preventDefault();

      dispatch(getListKontak())
      setNama("")
      setNohp("")
      setId("")
    }

    useEffect(() => {
      // Refresh list kontak ketika ada data baru
      if(addKontakResult) {
        dispatch(getListKontak())
      }

      // Set input ketika Click Edit
      if(detailKontakResult) {
        setNama(detailKontakResult.nama);
        setNohp(detailKontakResult.nohp);
        setId(detailKontakResult.id);
      }


    }, [addKontakResult, detailKontakResult, dispatch])

    useEffect(() => {
            // Refresh list kontak ketika update data baru
            if(updateKontakResult) {
              
              dispatch(getListKontak())
               // clear input
               setNama("")
               setNohp("")
               setId("")
            }
      
    }, [ updateKontakResult, dispatch])
    



  return (
    <div>
        <h3>{id ? "Edit Kontak" : "Add Kontak"}</h3>
        <form>
            <input type="text" name='nama' placeholder='Nama...' value={nama} onChange={(e) => setNama(e.target.value)} />
            <input type="text" name='nohp' placeholder='No HP...' value={nohp} onChange={(e) => setNohp(e.target.value)} />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            
            {id && <button onClick={(e) => handleCancel(e)}>Cancel</button>}
        </form>
    </div>
  )
}

export default AddKontak