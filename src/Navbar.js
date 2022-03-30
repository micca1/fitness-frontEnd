import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div id="nav" className="navBar">
      <div id="links">
        <Link to="/" className="link">
          Hello
        </Link>
        <Link to="/Routines" className="link">
          Routines
        </Link>
        <Link to="/Activities" className="link">
          Activities
        </Link>

        {user ? (
          <>
            <Link to="/MyRoutines" className="link">
              My Routines
            </Link>
            <Link
              onClick={() => {
                setToken("");
                setUser(null);
                localStorage.removeItem("token");
              }}
              to="/"
              className="link"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/Register" className="link">
              Login/Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
