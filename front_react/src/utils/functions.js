const dateFormat = (taskDate, options) => {
    if (!taskDate) return "";

    const dateTime = new Date(taskDate);

    if (isNaN(dateTime.getTime())) return "";

    return dateTime.toLocaleString("es-PE", options)
}

const setColorStatus = (status) => {
    return status == "Completed" ? "success" : "danger";
}

const showSuccessButton = (taskStatus, successBtn) => {
    return taskStatus == "danger" ? successBtn : null;
}

const isEmpty = (iterable) => {
    if (!Array.isArray(iterable) || iterable.length === 0) {
        return true;
    }
    return false;
}

export {dateFormat, setColorStatus, showSuccessButton, isEmpty}
