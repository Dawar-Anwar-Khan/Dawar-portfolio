import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'
import Commentry from './Commentry'
import TimeAndWeather from './TimeF'


export default function Home() {
  return (
    <>
    <Header />
    <Cards />
    <Commentry />
    <TimeAndWeather />
    <Footer />
    </>
  )
}
