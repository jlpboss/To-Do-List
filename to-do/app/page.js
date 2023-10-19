"use client"
import Navbar from "./Components/Navbar/navbar";
import React, { useState, useEffect } from "react";
import TaskInput from "./Components/TaskInput/taskInput";
import makeTask from "./Components/TaskOther/makeTask";
import "bootstrap/dist/css/bootstrap.css";
import TaskList from "./Components/TaskList/taskList";
import FilterBtns from "./Components/FIlterButtons/fIlterButtons";
import TaskCount from "./Components/TaskOther/taskCount";
import CheckAllBtns from "./Components/TaskOther/checkAllBtns";


export default function Home() {

  const time = new Date();
  const [taskList, setTaskList] = useState([])
  const [inputFeild, setInputFeild] = useState("")
  const [filter, setFilter] = useState("all")
  const [filteredTaskList, SetFilteredTaskList] = useState([])

  useEffect(() => {
    switch(filter){
      case "all":
        SetFilteredTaskList(taskList)
        break
      case "todo":
        SetFilteredTaskList(taskList.filter((task) => !task.isCompleated))
        break
      case "done":
        SetFilteredTaskList(taskList.filter((task) => task.isCompleated))
        break
    }
  }, [filter, taskList]);

  useEffect(() => {
    if(localStorage.getItem("taskList") != "") {
      setTaskList(JSON.parse(localStorage.getItem("taskList")))
    }
  }, []);

  // useEffect(() => {
  //   console.log("b")
  //   localStorage.setItem("taskList", JSON.stringify(taskList));
  // }, [taskList]);

  function handleNewTaskButton() {
    
    let task = makeTask({
      time: time.getTime(),
      task: inputFeild,
      isCompleated: false
    })
    
    localStorage.setItem("taskList", JSON.stringify([...taskList, task]));
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
    localStorage.setItem("taskList", JSON.stringify(temp));
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

  function handleCheckAllBtns(e) {
    switch(e.target.id){
      case "check":
        setTaskList(taskList.map((currentTask) => {
          return {
            id: currentTask.id,
            task: currentTask.task,
            isCompleated: true
        }
        } ))
        break
      case "uncheck":
        setTaskList(taskList.map((currentTask) => {
          return {
            id: currentTask.id,
            task: currentTask.task,
            isCompleated: false
        }
        } ))
        break
    }
  }

  return (
    <>
      <Navbar />
      <TaskInput
      inputVal={inputFeild}
      handleInputChange={handleInputChange}
      onButtonClick={handleNewTaskButton}
      />
      <TaskCount
      remaining={taskList.filter((task) => !task.isCompleated).length}
      />
      <TaskList
      data={filteredTaskList}
      onButtonClick={handleRemoveTaskButton}
      checkHandler={handleCheckTaskBox}
      />
      <FilterBtns
      onButtonClick={handleFilterButton}
      />
      <CheckAllBtns
      onButtonClick={handleCheckAllBtns}
      />
    </>
  )
}
