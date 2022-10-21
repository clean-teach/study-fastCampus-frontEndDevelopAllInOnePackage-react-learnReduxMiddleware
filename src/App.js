import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from './containers/PostListContainer';

function App() {
  return (
    <>
      <h1>리덕스 미들웨어</h1>
      <hr />
      <h2>카운터</h2>
      <CounterContainer />
      <hr />
      <h2>프로미스 다루기</h2>
      <PostListContainer />
    </>
  );
}

export default App;
