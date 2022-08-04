import React, { useState } from "react";
import "./../styles/task.css";
import TaskTable from "./TaskTable";

function Task() {
  const [taskData, settaskData] = useState({
    taskType: "",
    assignee: "",
    startDate: "",
    endDate: "",
    remindDate: "",
    subject: "",
    details: "",
  });
  const [taskList, settaskList] = useState([]);

  let addTask = () => {
    let taskListCopy = [...taskList];
    taskListCopy.push(taskData);
    settaskList(taskListCopy);
    settaskData({
      taskType: "",
      assignee: "",
      startDate: "",
      endDate: "",
      remindDate: "",
      subject: "",
      details: "",
    });
  };
  let cancelTask = () => {
    settaskData({
      taskType: "",
      assignee: "",
      startDate: "",
      endDate: "",
      remindDate: "",
      subject: "",
      details: "",
    });
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <p className="text-start">New Task</p>
      <div className="">
        <div className="row my-2">
          <div className="col-md-6 col-sm-12">
            <p className="text-start mb-0">
              Task Type <sup style={{ color: "red" }}>*</sup>
            </p>
            <select
              name="taskType"
              value={taskData.taskType}
              onChange={(e) =>
                settaskData({ ...taskData, taskType: e.target.value })
              }
              className="w-100 p-2"
            >
              <option> </option>
              <option>To Do One</option>
              <option>To Do Two</option>
              <option>To Do Three</option>
              <option>To Do Four</option>
              <option>To Do Five</option>
            </select>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="text-start mb-0">Subject</p>
            <input
              type="text"
              name="subject"
              className="py-1 w-100"
              value={taskData.subject}
              onChange={(e) =>
                settaskData({ ...taskData, subject: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row my-2">
          <div className="col-md-6 col-sm-12">
            <div className="px-1">
              <p className="text-start mb-0">
                Assgined to <sup style={{ color: "red" }}>*</sup>
              </p>
              <select
                className="w-100 py-2"
                name="assignee"
                value={taskData.assignee}
                onChange={(e) =>
                  settaskData({ ...taskData, assignee: e.target.value })
                }
              >
                <option> </option>
                <option>John</option>
                <option>Janardhan</option>
                <option>Amar</option>
                <option>Akbar</option>
                <option>Anthony</option>
              </select>
            </div>
            <div className="row my-2">
              <div className="col-sm-6 col-12">
                <p className="text-start mb-0">Start Date</p>
                <input
                  className="w-100"
                  type="date"
                  name="startDate"
                  value={taskData.startDate}
                  onChange={(e) =>
                    settaskData({ ...taskData, startDate: e.target.value })
                  }
                />
              </div>
              <div className="col-sm-6 col-12">
                <p className="text-start mb-0">End Date</p>
                <input
                  className="w-100"
                  type="date"
                  name="endDate"
                  value={taskData.endDate}
                  onChange={(e) =>
                    settaskData({ ...taskData, endDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="my-2">
              <p className="text-start mb-0">Reminder On</p>
              <input
                className="w-100"
                type="date"
                name="remindDate"
                value={taskData.remindDate}
                onChange={(e) =>
                  settaskData({ ...taskData, remindDate: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="text-start mb-0">Details</p>
            <textarea
              name="details"
              className="w-100"
              rows={6}
              value={taskData.details}
              onChange={(e) =>
                settaskData({ ...taskData, details: e.target.value })
              }
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            class="btn btn-outline-secondary mx-1 rounded-0 px-4"
            onClick={() => cancelTask()}
          >
            Cancel
          </button>
          <button
            class="btn btn-outline-danger mx-1 rounded-0 px-4"
            onClick={() => addTask()}
          >
            Apply
          </button>
        </div>
      </div>
      <TaskTable taskList={taskList} className="tasklist" />
    </div>
  );
}

export default Task;
