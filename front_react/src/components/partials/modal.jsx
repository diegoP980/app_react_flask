import { useFetcher } from "react-router-dom";
import { useEffect, useState } from "react";
import { dateFormat, showSuccessButton } from "../../utils/functions";

function TaskModal({ task, taskColorStatus, onClose }) {
    /* VARIABLES DE ESTADO */
    const [show, setShow] = useState(false);
    const [modifying, setModifying] = useState(
        {
            isModifying: false,
            type: null
        }
    )

    /* FETCHER PARA MANEJAR SOLICITUDES DINAMICAMENTE */
    const fetcher = useFetcher();

    /* CAMBIAR EL COLOR DEL ESTADO DE LA TAREA */
    const theTaskStatus = taskColorStatus(task.status);

    /* MARCAR UNA TAREA COMO COMPLETADA */
    const handleCompleteTask = () => {
        setModifying(
            {
                isModifying: true,
                type: "complete"
            }
        );
        fetcher.submit(
            {
                title: task.title,
                description: task.description,
                status: "Completed"
            },
            {
                method: "PATCH",
                action: `/task/${task.id}/update`
            }
        );
    };

    /* ELIMINACION DINAMICA DE UNA TAREA */
    const handleDeleteTask = () => {
        setModifying(
            {
                isModifying: true,
                type: "delete"
            }
        );
        fetcher.submit(
            {},
            {
                method: "DELETE",
                action: `/task/${task.id}/delete`
            }
        )
    }

    /* MANEJAR EL CIERRE DEL MODAL CUANDO SE REALIZA ALGUN CAMBIO (COMPLETE, DELETE) */
    useEffect(() => {
        if (modifying.isModifying && fetcher.state === "idle") {
            setModifying(
                {
                    isModifying: false,
                    type: null
                }
            )
            handleClose()
        }
    }, [fetcher.state])

    /* BOTÓN PARA MARCAR UNA TAREA COMO COMPLETADA */
    const successBtn = (
        <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={handleCompleteTask}
            disabled={modifying.type === "complete" && fetcher.state === "submitting"}
        >
            {modifying.type === "complete" && fetcher.state === "submitting"
                ? "Actualizando..."
                : "Marcar como completada"}
        </button>
    );

    // fade in
    useEffect(() => {
        document.body.classList.add("modal-open");

        const timer = setTimeout(() => setShow(true), 10);

        return () => {
            document.body.classList.remove("modal-open");
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        setShow(false);

        setTimeout(() => {
            onClose();
        }, 150); // duración de transición bootstrap
    };

    return (
        <>
            {/* backdrop */}
            <div className={`modal-backdrop fade ${show ? "show" : ""}`}></div>

            {/* modal */}
            <div className={`modal fade ${show ? "show" : ""}`} tabIndex="-1" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Detalle de la tarea</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className="arg_container mb-3">
                                <strong>Título:</strong>
                                <p className="text-secondary mb-0">{task.title}</p>
                            </div>
                            <div className="arg_container mb-3">
                                <strong>Creada el:</strong>
                                <p className="text-secondary mb-0">{dateFormat(task.created_date)}</p>
                            </div>
                            <div className="arg_container mb-3">
                                <strong>Descripción:</strong>
                                <p className="text-secondary mb-0">{task.description}</p>
                            </div>
                            <div className="arg_container">
                                <strong>Estado:</strong>

                                <div className="d-flex align-items-center gap-3">
                                    <p className={`text-${theTaskStatus} mb-0`}>● {task.status}</p>
                                    {showSuccessButton(theTaskStatus, successBtn)}
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={handleDeleteTask} disabled={modifying.type === "delete" && fetcher.state === "submitting"}>
                                    {modifying.type === "delete" && fetcher.state === "submitting"
                                        ? "Eliminando..."
                                        : "Eliminar"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskModal;