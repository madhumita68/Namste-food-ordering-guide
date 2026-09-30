import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";

import {
  Github_API_User,
  Github_UserName,
  options,
} from "../Common/constants";

// Profile class is a class component
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
      repoInfo: null,
    };

    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        // Fetch GitHub user information
        fetch(Github_API_User + Github_UserName, options),

        // Fetch GitHub repository information
        fetch(
          Github_API_User + Github_UserName + "/repos",
          options
        ),
      ]);

      // Convert API responses into JSON
      const resData = await Promise.all(
        response.map((r) => r.json())
      );

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error);
    }

    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }

  render() {
    const { userInfo, repoInfo } = this.state;

    // console.log("Profile-Parent - render");

    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">

            {/* ================= ABOUT ME ================= */}

            <div className="profile-container">

              <h1 className="profile-title">
                About Me
              </h1>

              {/* Passing GitHub user information
                  from parent to child */}

              <ProfileUserClass
                userInfo={userInfo}
              />

            </div>


            {/* ================= PROJECT SECTION ================= */}

            <div className="repo-container">

              <h1 className="repo-title">
                Explore My <span>Project 🚀</span>
              </h1>


              {/* ================= PERSONAL INTRO ================= */}

              <div className="about-project">

                <h2>
                  Hi, I'm Madhumita 👋
                </h2>

                <p>
                  I'm a Software Engineer who loves learning,
                  building, and exploring new technologies.
                  I enjoy solving problems and creating
                  interactive web applications.
                </p>


                {/* ================= PROJECT INFORMATION ================= */}

                <h3>
                  🍽️ About Namaste Food
                </h3>

                <p>
                  <strong>Namaste Food</strong> is a React-based
                  food ordering application that allows users
                  to explore restaurants, discover food items,
                  and find their favourite meals easily.
                </p>

                <p>
                  The application focuses on providing a
                  smooth, interactive, and user-friendly
                  experience for food lovers.
                </p>


                {/* ================= TECHNOLOGIES ================= */}

                <h3>🛠️ Technologies & Concepts</h3>

                  <div className="tech-list">
                     <span>⚛️ React.js</span>
                     <span>🟨 JavaScript</span>
                     <span>🌐 HTML</span>
                     <span>🎨 CSS</span>
                     <span>🔗 API Integration</span>
                     <span>🧩 Reusable Components</span>
                     <span>🛣️ React Router</span>
                     <span>📦 State Management</span>
                     <span>⚛️ React Hooks</span>
                  </div>


                {/* ================= PROJECT LEARNING ================= */}

                <h3>
                  💡 What I Learned
                </h3>

                <p>
                  Through this project, I gained practical
                  experience in building reusable React
                  components, working with APIs, managing
                  application state, implementing routing,
                  and creating an interactive user interface.
                </p>

              </div>


              {/* ================= GITHUB REPOSITORY ================= */}

              <ProfileRepoClass
                userInfo={userInfo}
                repoInfo={repoInfo}
              />

            </div>

          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;