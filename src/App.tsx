import '../src/shared/styles/index.css';
import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="rounded-md bg-red-300 p-4">
    <Outlet />
  </div>
);

export default App;
