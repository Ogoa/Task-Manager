import { useState } from "react";

const TaskForm = ({ onSubmitHandler, formTitle }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueTime, setDueTime] = useState(null);

    return (
        <div classname='task-form'>
            <h2>{formTitle}</h2>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input
                    required
                    type='text'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Description</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
                {!isLoading}
            </form>
        </div>
    );
}

export default TaskForm;