import React from "react";
import styled from "styled-components";

// ICONS
import logo from "../resources/images/logo.svg";
import homeIcon from "../resources/images/home-icon.svg";
import searchIcon from "../resources/images/search-icon.svg";
import watchListIcon from "../resources/images/watchlist-icon.svg";
import originalsIcon from "../resources/images/original-icon.svg";
import moviesIcon from "../resources/images/movie-icon.svg";
import seriesIcon from "../resources/images/series-icon.svg";
import profileImage from "../resources/images/myphoto.jpg";


function Header() {
  return (
    <Nav>
      <Logo src={logo} alt="Logo" />
      <NavMenu>
        <a>
          <img src={homeIcon} alt="homeIcom" />
          <span>HOME</span>
        </a>
        <a>
          <img src={searchIcon} alt="searchIcom" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchListIcon} alt="watchList" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={originalsIcon} alt="originals" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={moviesIcon} alt="movies" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={seriesIcon} alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src={profileImage} alt="propic" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
