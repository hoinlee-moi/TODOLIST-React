import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 (유효한)값을 입력하고 버튼을 클릭하면 아이템이 추가된다 + 입력된 Input을 초기화 한다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능
// 4. 수정버튼을 누르면 수정이 가능

/**
 * 기본 공부: Javascript 기본 문법/패턴 공부는 계속 해야함 + HTML/CSS 마크업 스타일 공부 -> 동영상 강의 구매하지 마시고 책 한권 사서 그거 쭉 따라 가세요.
 */

// arrow function + React func component(Class Component)
// 최신 트렌드를 위주로 공부해야하는건 맞지만, 그 트렌드가 왜 시작되었는지도 알아야 함.
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      label: "더미데이터 1",
    },
    {
      id: 1,
      label: "더미데이터 2",
    },
  ]);

  // ES6
  const onInputChange = (evt) => {
    const { value } = evt.target; // 비구조화 할당
    setInputValue(value);
  };

  const getNewItemId = () => {
    const arrayLength = todoList.length;
    let nextId = 0;
    if (arrayLength > 0) nextId = todoList[arrayLength - 1].id + 1;
    return nextId;
  };

  const addItem = () => {
    if (Boolean(inputValue)) {
      setTodoList([
        ...todoList,
        {
          id: getNewItemId(),
          label: inputValue,
        },
      ]);
      setInputValue("");
    } else alert("유효한 값을 입력해 주세요.");
  };

  // JSX
  return (
    <main>
      <h1>Todo List</h1>
      <div className="input-container">
        <input value={inputValue} type="text" onChange={onInputChange}></input>
        <button onClick={addItem}>Add</button>
      </div>
      <TodoBoard todoList={todoList} />
    </main>
  );
};

export default App;
