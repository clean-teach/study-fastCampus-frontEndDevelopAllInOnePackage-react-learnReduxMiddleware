import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CounterContainer from "./containers/CounterContainer";
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <h1>리덕스 미들웨어</h1>
      <hr />
      <h2>카운터</h2>
      <CounterContainer />
      <hr />
      <h2>프로미스 다루기</h2>
      <Routes>
        <Route path="/" element={<PostListPage />} exact={true} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
