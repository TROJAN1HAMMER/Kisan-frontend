import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex gap-4 bg-green-700 text-white p-4">
      <Link to="/">Market</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/diagnose">Diagnose</Link>
      <Link to="/translate">Translate</Link>
      <Link to="/schemes">Schemes</Link>
    </nav>
  );
}

export default Navbar;
