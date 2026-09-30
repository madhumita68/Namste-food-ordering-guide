import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import burgerImage from "../img/burgerImage.png";

const burgerImage = new URL("../img/burgerImage.png" , import.meta.url);

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main">
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to the world of
            Namste Food!🥘
          </h1>
          <h2>
            "Discover delicious food, 
            Explore amazing restaurants,
            and satisfy your cravings - all in one place."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
