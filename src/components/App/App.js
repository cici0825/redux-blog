import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import PostPage from "../../pages/PostPage";
import AddPostPage from "../../pages/AddPostPage";
import EditPostPage from "../../pages/EditPostPage";
import AboutPage from "../../pages/AboutPage";
import RegisterPage from "../../pages/RegisterPage";
import { AuthorPostsPage, PostsPage } from "../../pages/PostsPage";
import { getMe } from "../../redux/reducers/userReducer";
import {
  selectIsLoadingUser,
  selectIsLoadingPost,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const Root = styled.div`
  margin-top: 95px;
  ${MEDIA_QUERY_MD} {
    margin-top: 64px;
  }
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 48px - 95px);
  ${MEDIA_QUERY_MD} {
    min-height: calc(100vh - 48px - 64px);
  }
`;

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectIsLoadingUser);
  const isLoadingPost = useSelector(selectIsLoadingPost);

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <Root>
      {isLoadingUser && <Loading />}
      {isLoadingPost && <Loading />}
      <BodyWrapper>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
          <Switch>
            <Route path='/posts/:page'>
              <PostsPage />
            </Route>
          </Switch>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route path='/post/:id'>
            <PostPage />
          </Route>
          <Route exact path='/addPost'>
            <AddPostPage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/author/:id'>
            <AuthorPostsPage />
          </Route>
          <Route path='/edit/:id'>
            <EditPostPage />
          </Route>
        </Router>
      </BodyWrapper>

      <Footer />
    </Root>
  );
}

export default App;
