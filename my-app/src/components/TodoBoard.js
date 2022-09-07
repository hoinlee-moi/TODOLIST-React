import React from "react";

/**
 * 1. 현재 입력하는 Input 이 특정 Id 를 수정할 것인지 아닌지 알아야 함.
 * 2. 1번이 만족된 상태에서 input 에 유효한 값을 입력하고 버튼을 클릭해 수정 행동을 해야 함.
 */

const TodoBoard = ({ todoList }) => {
  if (!Array.isArray(todoList)) todoList = [];

  return (
    <div className="todolist-container">
      {todoList.map(({ id, label }) => (
        <div key={id}>
          <div className="todo-item">
            {id} : {label} <button>수정</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoBoard;
