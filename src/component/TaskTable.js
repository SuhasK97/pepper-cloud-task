import React from 'react'
import { Table } from 'react-bootstrap'
import "./../styles/tasktable.css"

function TaskTable({ taskList }) {
    // console.log("taskList >>", taskList)
    return (
        <div style={{marginTop:"80px"}}>
            <hr></hr>
            <p className='tabName'>Task List</p>
            <Table striped hover>
                <thead >
                    <tr style={{ color: "grey" }}>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Type</th>
                        <th>Assigned to</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((item, idx) => {
                        return <tr key={idx} style={{ borderLeft: "1px solid #cbcbed", borderRight: "1px solid #cbcbed" }}>
                            <td>{idx + 1}</td>
                            <td style={{ color: "#0058d3" }}>{item.subject}</td>
                            <td>{item.taskType}</td>
                            <td>{item.assignee}</td>
                            <td>{item.remindDate}</td>
                            <td></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TaskTable