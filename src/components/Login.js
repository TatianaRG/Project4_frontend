import React from 'react';
import { loginUser } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';

function Login() {
  const navigate = useNavigate();
  const [popup, setPopup] = React.useState({});
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await loginUser(user);

        navigate(-1);
      } catch (error) {
        console.log(error.response.data);
        setPopup({ isVisible: true, message: error.response.data.message });
      }
    };
    getData();
  }

  return (
    <section className="section login-section">
      <div className="container">
        <Popup trigger={popup.isVisible} setTrigger={setPopup}>
          <h2>{popup.message}</h2>
        </Popup>
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="box column is-half is-offset-one-quarter"
          >
            <div className="field is-small">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  placeholder="Email"
                  name="email"
                  type="text"
                  className="input"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control has-icons-left">
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="input"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <button type="submit" className="button is-fullwidth is-info">
              Login
            </button>
            <p className="register-link">
              Don&apos;t have an account? Register{' '}
              <Link to="/register">here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
