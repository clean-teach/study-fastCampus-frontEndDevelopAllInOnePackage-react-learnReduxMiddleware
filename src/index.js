import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
// import myLogger from './middlewares/myLogger'; /* 직접 만들어본 미들웨어 (리덕스 상태와 디스패치를 로깅 하는 미들웨어) */
import reduxLogger from 'redux-logger'; /* redux logger : 객체와 상태를 콘솔창에 로깅 */
import { composeWithDevTools } from '@redux-devtools/extension'; /* 브라우저의 개발자 도구에서 redux를 확인 할 수 있게 해주는 확장기능 */
import reduxThunk from 'redux-thunk'; /* redux thunk : 함수를 dispatch 할 수 있게 해주는 middleware */
import { BrowserRouter } from 'react-router-dom'; /* 라우터, 히스토리 사용 */
import createSagaMiddleware from 'redux-saga'; /* redux saga : 액션을 모니터링하고 특정 액션이 발생하면 특정 작업(자바스크립트, 액션 디스패치, 현재상태 불러오기 등)을 함. Generator 문법 사용! */

// const store = createStore(rootReducer, applyMiddleware(myLogger, reduxLogger));  // 미들웨어 직접 만들어보기 실습, redux-logger와 비교
  // applyMiddleware()에는 여러개의 미들웨어를 적용 가능

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      reduxThunk, 
      sagaMiddleware,
      reduxLogger
    )
  )
); // redux-logger, @redux-devtools, reduxThunk, saga middle ware 적용

sagaMiddleware.run(rootSaga); // 루트 사가를 실행 // 주의: 스토어 생성이 된 다음에 위 코드를 실행해야 한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
