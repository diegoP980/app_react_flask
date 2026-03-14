const dateFormat = (taskDate) => {
    const options = {
        dateStyle: "full",
        timeStyle: "short",
    }

    let dateTime = new Date(taskDate)

    return dateTime.toLocaleString("es-PE", options)
}

const setStatus = (status) => {
    return status == "Complete" || status == "Completed" ? "success" : "danger";
}

const showSuccessButton = (taskStatus, successBtn) => {
    return taskStatus == "danger" ? successBtn : null;
}

export {dateFormat, setStatus, showSuccessButton}
