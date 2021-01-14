import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { logout } from "../../redux/reducers/userReducer";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 0 32px 5px 32px;
  z-index: 99;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  display: flex;
`;

const Brand = styled(Link)`
  font-size: ${(props) => props.theme.font.xxl}px;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  height: 64px;
  align-items: center;
  color: ${(props) => props.theme.colors.orange};
  text-decoration: none;
`;

const NavebarList = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled(Link)`
  display: flex;
  font-size: ${(props) => props.theme.font.sm}px;
  align-items: center;
  position: relative;
  display: block;
  margin-left: 20px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.orange};
    -webkit-transition: width 0.5s ease-in-out;
    -moz-transition: width 0.5s ease-in-out;
    -ms-transition: width 0.5s ease-in-out;
    -o-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }

  &:hover:before {
    width: 80%;
  }
`;

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand to='/'>Redux Blog</Brand>
      </LeftContainer>
      <NavebarList>
        <Nav to='/about'>About Me</Nav>
        <Nav to='/posts/1'>All Posts</Nav>
        <NavebarList>{user && <Nav to='/addPost'>Add Post</Nav>}</NavebarList>
        {!user && (
          <>
            <Nav to='/register'>Register</Nav>
            <Nav to='/login'>Login</Nav>
          </>
        )}
        {user && <Nav onClick={handleLogout}>Logout</Nav>}
      </NavebarList>
    </HeaderContainer>
  );
}
