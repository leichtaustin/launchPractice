import { useState } from "react";
import ProgressBar from "./PorgressBar";
import TickIcon from "./TickIcon";
import Modal from "./Modal";

const ListItem = ({task, getData}) => {
    const [ showModal, setShowModal ] = useState(false);

    const deleteItem = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                getData();
            }
        } catch(err) {
            console.error(err);
        }
    }
    
    return (
        <li className="listItem">
            <div className="infoContainer">
                <TickIcon/>
                <p className="taskTitle">{task.title}</p>
                <ProgressBar progress = {task.progress}/>
            </div>

            <div className="button-container">
                <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
                <button className="delete" onClick={deleteItem}>DELETE</button>
            </div>
            {showModal && <Modal mode = {'edit'} setShowModal={setShowModal} task={task} getData={getData}/>}
        </li>
    )
}

export default ListItem;