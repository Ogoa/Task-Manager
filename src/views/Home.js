import TaskList from "./TaskList";
import useFetch from "../useFetch";

const Home = () => {
    const { data: tasks, loading, error } = useFetch('/tasks/');

    return (
        <div className='home'>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {tasks && <TaskList tasks={tasks} title='My Tasks' />}
        </div>
    );
}

export default Home;
