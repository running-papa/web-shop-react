import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React,{useState} from "react";


function App(props) {
    // const takList = props.tasks?.map((task) => task.name)
    //const takList = props.tasks?.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} ket={task.id} />);
    
    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks.map((task) => (
        <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
    ));

    function addTask(name) {
        alert(name);
        const newTasks = { id: "id", name, completed: false };
        setTasks([...tasks, newTasks])
    }
    
    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    )
}
export default App
