import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, isLoading, error } = useFetch('');
    const history = useHistory();

    /* TODO: Add handleDelete */

    return (
        <div className='task-details'>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {task && (
                <article>
                    <h2>{task.title}</h2>
                    <p>Description:</p>
                    <div>{title.description}</div>
                </article>
            )}
        </div>
    );
}

export default TaskDetails;