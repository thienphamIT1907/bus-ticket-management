import '../src/shared/styles/index.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='bg-red-300 rounded-md p-4'>
      layout
      <Outlet />
    </div>
  )
}

export default App
