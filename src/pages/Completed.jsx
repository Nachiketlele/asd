import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/action";

const Completed = () => {
  const { data: todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getData)
  },[])
  return (
    <div>
      Completed
      {todo.map((el) => (
        <div key={el.id}>{el.isCompleted ? el.value : ""}</div>
      ))}
    </div>
  );
};

export default Completed;
