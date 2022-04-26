import React from 'react';
import { registerUser } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';

function Register() {
  const navigate = useNavigate();
  const [popup, setPopup] = React.useState({});
  const [user, setUser] = React.useState({
    username: '',
    password: '',
    password_confirmation: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await registerUser(user);
        navigate('/login');
      } catch (error) {
        console.log(error.response.data);

        let errorMessage = ' ';

        for (var key in error.response.data) {
          errorMessage +=
            'For' + ' ' + key + ' ' + error.response.data[key] + ' \n';
        }

        setPopup({ isVisible: true, message: errorMessage });
      }
    };
    getData();
  }

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
    <section className="section register-section">
      <div className="container">
        <Popup trigger={popup.isVisible} setTrigger={setPopup}>
          <h2> {popup.message}</h2>
        </Popup>
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={user.username}
                  // required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  // required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control has-icons-left">
                <input
                  type="password"
                  className="input"
                  placeholder="Password Confirmation"
                  name="password_confirmation"
                  onChange={handleChange}
                  value={user.password_confirmation}
                  // required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  // required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={user.firstName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={user.lastName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  value={user.address}
                  // required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-info">
                Register Me!
              </button>
              <p className="register-link">
                Already have an account? Login <Link to="/login">here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
