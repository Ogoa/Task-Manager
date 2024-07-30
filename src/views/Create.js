import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAxios from "../utils/useAxios";

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const axiosInstance = useAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description };

        setIsLoading(true);
        try {
            await axiosInstance.post('/tasks/', newTask);
            setIsLoading(false);
            navigate('/');
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    }

    return (
        <div className='create-task'>
            <h2>Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Description</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {!isLoading && <button>Add Task</button>}
                {isLoading && <button disabled>Adding Task...</button>}
            </form>
        </div>
    );
}

export default Create;
