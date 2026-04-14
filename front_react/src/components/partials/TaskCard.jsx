import { dateFormat } from "../../utils/functions";


function TaskCard({ task, onButtonClick, taskColorStatus, dateOptions }) {

    const { title, description, created_date, status } = task;

    const showButtons = (onClickFunction) => {
        if (onClickFunction) {
            return (
                <>
                    <a href="#" className="btn btn-secondary me-2">Editar</a>
                    <button type="button" className="btn btn-outline-primary" onClick={() => { onButtonClick(task) }}>Detalles</button>
                </>
            )
        }
        return null;
    };

    return (
        <>
            <div className="col-12 mb-4">
                <div className="card bg-body-tertiary">
                    <div className="card-body">
                        <h5 className="card-title mb-0">{title ? title : "Agrega un título..."}</h5>
                        <small className="fst-italic text-secondary">Creado el {dateFormat(created_date, dateOptions)}</small>
                        <p className="card-text mt-2 text-truncate">{description && description != "No description." ? description : "Sin descripción..."}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                {showButtons(onButtonClick)}
                            </div>
                            <p className={`mb-0 text-${taskColorStatus ? taskColorStatus(status) : "secondary"}`}>● {status}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskCard;