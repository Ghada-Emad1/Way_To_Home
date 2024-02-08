import {Outlet} from 'react-router-dom'

const Food = () => {
  return (
    <div className='bg-red-500 '>
        Food page
        <Outlet/>
      
    </div>
  )
}

export default Food
