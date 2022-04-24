import React from 'react';
import { Link } from 'react-router-dom';
import { getSingleUser } from '../api/auth';
import profileImage from '../images/profile.png';

function Profile() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const data = await getSingleUser();
      console.log('user data', data);
      setUser(data);
    };
    getData();
  }, []);

  return (
    <section className="profile-section">
      <div className="hero-body">
        {user ? (
          <section className="container is-fluid has-text-centered">
            <div>
              <h2 className="title py-6"> Hello, {user.username} !</h2>
            </div>
            <div className="columns is-centered">
              <div className="column is-5 is-mobile">
                <div className="box">
                  <div className="media is-vcentered">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        {user.profile_image ? (
                          <img
                            className="is-rounded  is-centered"
                            src={user.profile_image}
                            alt="profile image"
                          />
                        ) : (
                          <img
                            className="is-rounded  is-centered"
                            src={profileImage}
                            alt="profile image"
                          />
                        )}
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <h2>Your details:</h2>
                        <h6>Name: {user.first_name}</h6>
                        <h6>Surname: {user.last_name}</h6>
                        <h6>Address: {user.address}</h6>
                        {user.phone_number ? (
                          <h6>Phone number: {user.phone_numer}</h6>
                        ) : (
                          <h6>Phone number: not supplied</h6>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <p className="register-link subtitle">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile;
