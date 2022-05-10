import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(" 1 Use effect component")
        // Call Action get List Kontak
        dispatch(getListKontak())
    }, [dispatch])

  return (
    <div>
        <h3>ListKontak</h3>
    </div>
  )
}

export default ListKontak