import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
// import myLogger from './middlewares/myLogger'; /* 직접 만들어본 미들웨어 (리덕스 상태와 디스패치를 로깅 하는 미들웨어) */
import reduxLogger from 'redux-logger'; /* redux logger : 객체와 상태를 콘솔창에 로깅 */
import { composeWithDevTools } from '@redux-devtools/extension'; /* 브라우저의 개발자 도구에서 redux를 확인 할 수 있게 해주는 확장기능 */
import reduxThunk from 'redux-thunk'; /* redux thunk : 함수를 dispatch 할 수 있게 해주는 middleware */
import { BrowserRouter } from 'react-router-dom'; /* 라우터, 히스토리 사용 */

// const store = createStore(rootReducer, applyMiddleware(myLogger, reduxLogger));  // 미들웨어 직접 만들어보기 실습, redux-logger와 비교
  // applyMiddleware()에는 여러개의 미들웨어를 적용 가능

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger))); // redux-logger, @redux-devtools 적용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
