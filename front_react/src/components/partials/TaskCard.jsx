function TaskCard({ task }) {
    const dateFormat = (taskDate) => {
        const options = {
            dateStyle: "full",
            timeStyle: "short",
        }

        let dateTime = new Date(taskDate)

        return dateTime.toLocaleString("es-PE", options)
    }

    const { title, description, created_date } = task

    return (
        <>
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Creado el {dateFormat(created_date)}</h6>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-secondary me-2">Editar</a>
                        <a href="#" className="btn btn-success">Completada!</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskCard;