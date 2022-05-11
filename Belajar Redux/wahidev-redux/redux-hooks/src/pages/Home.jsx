import React from 'react'
import { AddKontak, ListKontak } from '../components'

const Home = () => {
  return (
    <div style={{ padding: '30px' }}>
        <h2>Aplikasi Kontak App</h2>
        <hr />
        <AddKontak />
        <ListKontak />
    </div>
  )
}

export default Home