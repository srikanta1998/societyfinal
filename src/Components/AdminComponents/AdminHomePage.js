import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminHomePage = () => {
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus2 = () => {
      const isLoggedInUser2 = localStorage.getItem('isLoggedIn2') === 'true';
      setIsLoggedIn2(isLoggedInUser2);
    };
    checkLoginStatus2();
  }, []);

  const logout = () => {
    localStorage.removeItem('isLoggedIn2');
    setIsLoggedIn2(false);
    alert('Successfully Logged out!');
  };

  const navigatePage1 = () => {
    navigate('/adminloginpage');
  };

  const navigatePage2 = () => {
    navigate('/');
  };

  const navigateToMembersPage = () => {
    navigate('/memberspage');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick6 = () => {
    navigate('/election',{ state: { role: 'admin' } });
};

  return (
    <div className="admin-home-page">
      <div>
        {isLoggedIn2 ? (
          <>
            <nav>
              <a  onClick={navigateToMembersPage}>
                Members
              </a>
              <a onClick={handleClick6}>Elections</a>
              
              <a onClick={logout}>
                <LogoutIcon />
              </a>

              {isMenuOpen && (
                <ul className="menu-list">
                  <li>
                    <a href="#">Voting</a>
                  </li>
                  <li>
                    <a href="#">AssignCommittee</a>
                  </li>
                </ul>
              )}

              <div className="animation start-home"></div>
            </nav>

            <h1>Hey Admin Welcome!!</h1>
          </>
        ) : (
          <div>
            <h1>Bye Admin!!</h1>
            <br />
            <h5>Have A Great Day !!!</h5>
            <br />
            <button onClick={navigatePage1} className="btn btn-primary">
              <LoginIcon />
            </button>
            <hr />
            <br />
            <button className="btn btn-primary" onClick={navigatePage2}>
              <HomeIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
