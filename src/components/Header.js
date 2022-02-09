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
          <img src={watchListIcon} alt="homeIcom" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={originalsIcon} alt="homeIcom" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={moviesIcon} alt="homeIcom" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={seriesIcon} alt="homeIcom" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0xAdVjT_Jkqerlz5SGSTfAHaEz%26pid%3DApi&f=1"/>
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

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height: 20px;
    }

    span{
        font-size: 13px;
        letter-spacing: 1.42px;
    }
  }
`;

const UserImg = styled.div`

`;