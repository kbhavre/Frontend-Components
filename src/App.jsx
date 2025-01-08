import Menu1 from './components/MenuBars/Menu1'
import Navbar1 from './components/Navbar/Navbar1'

const App = () => {
  return (
    <div className='overflow-x-hidden'> 

      <h1 className='text-center font-bold text-4xl my-4 '>Navbars</h1>
      <Navbar1/>

      <h1 className='text-center font-bold text-4xl my-4 pt-10'>Menu Bars</h1>
      <Menu1/>
    </div>
  )
}

export default App
