import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold">White Space</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/venting" className="hover:text-gray-400 transition">Venting</Link>
        <Link to="/motivation" className="hover:text-gray-400 transition">Reflection</Link>
      </div>
    </nav>
  );
}

export default Navbar;
