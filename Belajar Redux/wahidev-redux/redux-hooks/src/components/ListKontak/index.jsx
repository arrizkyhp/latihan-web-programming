import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {
  // consume redux
  const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.kontakReducer)
 
    const dispatch = useDispatch();

    useEffect(() => {
        // Call Action get List Kontak
        dispatch(getListKontak())
    }, [dispatch])

  return (
    <div>
        <h3>ListKontak</h3>
        {getListKontakResult ? (
          getListKontakResult.length > 0 ? (
            getListKontakResult.map( (kontak) => {
              return (
                <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
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