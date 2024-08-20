import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi';

function Home() {
  const {data, error, isLoading} = useGetAllProductsQuery()
  return (
    <>
      <p>Home</p>
    </>
  )
}

export default Home