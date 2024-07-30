import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "../useFetch";
import useAxios from "../utils/useAxios";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, isLoading, error } = useFetch(`/tasks/${id}/`);
    const navigate = useNavigate();
    const axiosInstance = useAxios();

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/tasks/${id}/`);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='task-details'>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {task && (
                <article>
                    <h2>{task.title}</h2>
                    <p>Description:</p>
                    <div>{task.description}</div>
                    <button onClick={handleDelete}>Delete Task</button>
                </article>
            )}
        </div>
    );
}

export default TaskDetails;
