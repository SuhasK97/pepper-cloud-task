import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import "./../styles/task.css"
import TaskTable from './TaskTable'

function Task() {
    const [taskData, settaskData] = useState({
        taskType: "",
        assignee: "",
        startDate: "",
        endDate: "",
        remindDate: "",
        subject: "",
        details: ""
    })
    const [taskList, settaskList] = useState([])

    let addTask = () => {
        let taskListCopy = [...taskList]
        taskListCopy.push(taskData)
        settaskList(taskListCopy)
        settaskData({
            taskType: "",
            assignee: "",
            startDate: "",
            endDate: "",
            remindDate: "",
            subject: "",
            details: ""
        })
    }
    let cancelTask = () => {
        settaskData({
            taskType: "",
            assignee: "",
            startDate: "",
            endDate: "",
            remindDate: "",
            subject: "",
            details: ""
        })
    }
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Row>
                <div className='col-lg-12'>
                    <div>
                        <p className="taskName">New Task</p>
                        <div className="newTask"  >
                            <div style={{ display: "flex" }}>
                                <div className='newTask__item' >

                                    <p style={{ paddingRight: "65%" }}>Task Type <sup style={{ color: "red" }}>*</sup></p>
                                    <select className='taskType' name="taskType" value={taskData.taskType} onChange={(e) => settaskData({ ...taskData, taskType: e.target.value })}>
                                        <option>  </option>
                                        <option>To Do One</option>
                                        <option>To Do Two</option>
                                        <option>To Do Three</option>
                                        <option>To Do Four</option>
                                        <option>To Do Five</option>
                                    </select>

                                    <p style={{ paddingRight: "62%", marginTop: "15px" }}>Assgined to <sup style={{ color: "red" }}>*</sup></p>
                                    <select className='taskType' name="assignee" value={taskData.assignee} onChange={(e) => settaskData({ ...taskData, assignee: e.target.value })}>
                                        <option>  </option>
                                        <option>John</option>
                                        <option>Janardhan</option>
                                        <option>Amar</option>
                                        <option>Akbar</option>
                                        <option>Anthony</option>
                                    </select>
                                    < div className='date1txt'>
                                        <p>Start Date</p>
                                        <p style={{ marginLeft: "130px" }}
                                        >End Date</p>
                                    </div>
                                    <div className='date1input' >
                                        <input
                                        style={{width:'35%'}}
                                            type="date"
                                            name="startDate"
                                            value={taskData.startDate}
                                            onChange={(e) => settaskData({ ...taskData, startDate: e.target.value })}
                                        />
                                        <input
                                             style={{width:'35%',marginLeft: "9px" }}
                                            type="date"
                                            name="endDate"
                                           
                                            value={taskData.endDate}
                                            onChange={(e) => settaskData({ ...taskData, endDate: e.target.value })}
                                        />
                                    </div>
                                    <p style={{ textAlign: "start", marginLeft: "50px", marginTop: "15px" }}>Reminder On</p>
                                    <input
                                        className='taskType'
                                        type="date"
                                        name="remindDate"
                                        value={taskData.remindDate}
                                        onChange={(e) => settaskData({ ...taskData, remindDate: e.target.value })}
                                    />
                                </div>
                                <div style={{ marginLeft: "30px", width: "50%" }}>
                                    <p className='subjecttext'>Subject</p>
                                    <input
                                        type="text"
                                        name="subject"
                                        className='subject'
                                        value={taskData.subject}
                                        onChange={(e) => settaskData({ ...taskData, subject: e.target.value })}
                                    />
                                    <p className='detailtextarea'>Details</p>
                                    <textarea
                                        name="details"
                                        className='textarea'
                                        value={taskData.details}
                                        onChange={(e) => settaskData({ ...taskData, details: e.target.value })}
                                    />
                                    <button class="btn btn-outline-secondary"
                                        onClick={() => cancelTask()}
                                        style={{
                                            marginRight: "20px",
                                            width: "45%",
                                        }}>
                                        Cancel
                                    </button>
                                    <button class="btn btn-outline-warning" 
                                    onClick={() => addTask()}
                                    style={{
                                        marginRight: "20px",
                                        width: "45%",
                                    }}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TaskTable taskList={taskList} className="tasklist" />
                </div>
            </Row >
        </div >
    )
}

export default Task