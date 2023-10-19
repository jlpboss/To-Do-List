"use client"
import Navbar from "./Components/Navbar/navbar";
import React, { useState, useEffect } from "react";
import TaskInput from "./Components/TaskInput/taskInput";
import makeTask from "./Components/TaskFunctions/makeTask";
import "bootstrap/dist/css/bootstrap.css";
import TaskList from "./Components/TaskList/taskList";
import FilterBtns from "./Components/FIlterButtons/fIlterButtons";


export default function Home() {

  const time = new Date();
  const [taskList, setTaskList] = useState([])
  const [inputFeild, setInputFeild] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    console.log(filter)
  }, [filter]);

  function handleNewTaskButton() {
    
    let task = makeTask({
      time: time.getTime(),
      task: inputFeild,
      isCompleated: false
    })

    setTaskList([...taskList, task])
  }

  function handleInputChange(e) {
    setInputFeild(e.target.value)
  }

  function handleRemoveTaskButton(e) {
    let temp = [...taskList];
    for(let item in temp){ 
      if (temp[item].id === parseInt(e.target.id)) { 
        temp.splice(item, 1); 
      }
    }
    setTaskList(temp)
  }

  function handleCheckTaskBox(e) {
    let temp = [...taskList];
    for(let item in temp){ 
      if (temp[item].id === parseInt(e.target.id)) { 
        temp[item].isCompleated = !temp[item].isCompleated
      }
    }
    setTaskList(temp)
  }

  function handleFilterButton(e) {
    setFilter(e.target.id)
  }

  return (
    <>
      <Navbar />
      <TaskInput
      inputVal={inputFeild}
      handleInputChange={handleInputChange}
      onButtonClick={handleNewTaskButton}
      />
      <TaskList
      data={taskList}
      onButtonClick={handleRemoveTaskButton}
      checkHandler={handleCheckTaskBox}
      />
      <FilterBtns
      onButtonClick={handleFilterButton}
      />
    </>
  )
}
