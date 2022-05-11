import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKontak, getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {
  // consume redux
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.kontakReducer)
 
    const dispatch = useDispatch();

    useEffect(() => {
        // Call Action get List Kontak
        dispatch(getListKontak())

        // Refresh List kontak ketika hapus kontak
        if(deleteKontakResult) {
          dispatch(getListKontak())
        }
    }, [dispatch, deleteKontakResult])
    
  return (
    <div>
        <h3>ListKontak</h3>
        {getListKontakResult ? (
          getListKontakResult.length > 0 ? (
            getListKontakResult.map( (kontak) => {
              return (
                <div key={kontak.id}>
                  <p>
                  {kontak.nama} - {kontak.nohp}
                  </p>
                  <button onClick={() => dispatch(deleteKontak(kontak.id))}>Hapus</button>
                </div>
              )
            })
          ) : (
            <p>data kosong</p>
          ) 
        ) : getListKontakLoading ? (
          <p>Loading....</p>
        ) : (
          <p>{getListKontakError}</p>
        )}
    </div>
  )
}

export default ListKontak