import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';
import TypeFuncComp from './components/TypeFuncComp';
import TypeArrowFuncComp from './components/TypeArrowFuncComp';
import FetchComp from './components/FetchComp';

function App() {
  return (
    <div className="App">
      <NoProps/>
      {/** 클래스형에서 props를 interface로 지정하면 호출할때도 자동완성으로 쓸수있다 */}
      <TypeClassComp startNumber={3} name='손예진' check/>
      <TypeFuncComp startNumber={1} name='예진' check/>
      <TypeArrowFuncComp startNumber={5}/>
      <hr />
      <FetchComp/>
    </div>
  );
}

export default App;
