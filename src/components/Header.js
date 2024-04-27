import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = styled.div`
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 32px;

  position: relative;
  max-width: 80%;
  height: 100%;
  margin: 0 auto;

  font-family: paybooc-Bold;

  header {
    position: relative;
    display: flex;
    max-width: 90%;
    justify-content: space-between;
    margin: 0 auto;
  }

  h1 {
    margin-left: -30px;
    font-size: 36px;
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    padding: 0.25em;
    height: 55px;
    float: right;
  }

  nav ul {
    list-style: none;
  }

  nav ul li {
    padding: 18px;
    display: inline-block;
    text-decoration: none;
    color: white;
  }

  nav ul li a {
    padding: 18px;
    text-decoration: none;
    display: inline-block;
    color: white;
    position: relative;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0), inset 0 0 1px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 0.5s;
  }

  nav ul li a:hover {
    box-shadow: 0 0 5px white, inset 0 0 1px rgba(255, 255, 255, 0.3);
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <header>
        <h1>Minsoo kim</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Mid-Term-Project/">Home</Link>
              </li>
              <li>
                <Link to="/Mid-Term-Project/about">About</Link>
              </li>
              <li>
                <Link to="/Mid-Term-Project/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </HeaderLayout>
  );
};

export default Header;
