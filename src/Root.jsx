import './Root.css'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

export default function Root() {

  return (
    <>
      <Header/>
      {/* Outlet will act as variable. By keeping Header and Footer as it is, Outlet will be changing in every page*/}
      <Outlet/>
      <Footer/>
    </>
  )
}