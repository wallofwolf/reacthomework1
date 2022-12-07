//* 보완할 점
// 1. 할일 제목과 내용을 각각 분리해서 표현하기
  // 제목, 내용, 상태를 객체로 저장하기
  // 객체를 스테이트에 저장하기
// 2. 완료 or 진행 상태 추가해서 스테이트 수정하기
// 3. done & working 라인 만들기



import React, { useState } from "react";
import TodoBoard from './components/TodoBoard'

import "./App.css";

function App() {
  const [titleValue, settitleValue] = useState("");
  const [descValue, setdescValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const addTodo = () => {
    setTodoArr([...todoArr], {
      id: 1,
      titleValue: titleValue,
      descValue: descValue,
      isDone: true
    });
  };

  return (
    <div className="app-wrapper">
      
      <div className="nav">
        <span>My Todo List</span>
        <span>React B반 박진산</span>
      </div>

      <div className="input-windows">
        <div className="inputs">
          <label for="titleValue">제목</label>
          <input
            value={titleValue}
            onChange={(event) => settitleValue(event.target.value)}
            type="text"
            name="titleValue"
          />
          <label for="descValue">내용</label>
          <input
            value={descValue}
            onChange={(event) => setdescValue(event.target.value)}
            name="descValue"
            type="text"
          />
        </div>

        <div className="addbtn">
          <button onClick={addTodo}>추가하기</button>
        </div>
      </div>

      <TodoBoard todoArr={todoArr} />
    </div>
  );
}

export default App;
