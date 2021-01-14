import { useEffect } from "react";
import styled from "styled-components";
import Kanban from "../../components/Kanban";
import { BigReview, SmallReview } from "../../components/Post";
import { selectPosts } from "../../redux/selectors";
import {
  setIsLoadingPost,
  setPosts,
  getPostsByPage,
} from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const SmallReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;

  & > * + * {
    margin-top: 32px;
  }

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
    justify-content: center;

    & > * + * {
      margin-top: 0px;
      margin-left: 32px;
    }
  }
`;

const Body = styled.div`
  background: white;
`;

export default function HomePage() {
  const limit = 4;
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPostsByPage(1, limit));

    return () => {
      dispatch(setIsLoadingPost(false));
      dispatch(setPosts([]));
    };
  }, [dispatch]);

  return (
    <Body>
      <Kanban />
      {posts[0] && <BigReview post={posts[0]} />}
      <SmallReviewWrapper>
        {posts[0] &&
          posts.slice(1).map((post) => {
            return <SmallReview key={post.id} post={post} />;
          })}
      </SmallReviewWrapper>
    </Body>
  );
}
