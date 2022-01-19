import projects from "./data/projects.json";

function MyList() {
    return <>{projects.map(project => <span><b>[{project.priority}]</b>{project.title}</span>)}</>
}

export default MyList;