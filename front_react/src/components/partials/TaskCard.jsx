import { dateFormat } from "../../utils/functions";

function TaskCard({ task, modalId, onButtonClick, taskStatus }) {
    const { title, description, created_date, status } = task;

    return (
        <>
            <div className="col-12 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-0">{title}</h5>
                        <small className="fst-italic text-secondary">Creado el {dateFormat(created_date)}</small>
                        <p className="card-text mt-2">{description == "No description." ? "" : description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <a href="#" className="btn btn-secondary me-2">Editar</a>
                                <button type="button" className="btn btn-outline-primary" onClick={() => {onButtonClick(task)}}>Detalles</button>
                            </div>
                            <p className={`mb-0 text-${taskStatus(status)}`}>● {status}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskCard;