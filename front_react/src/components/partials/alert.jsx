function Alert({ att }) {
    const { header, body, footer, color, dimiss } = att
    return (
        <>
            <div className={`alert alert-${color} py-5 ${dimiss ? "alert-dismissible fade show" : ""}`} role="alert">
                {header && <><h4 class="alert-heading">{header}</h4><hr /></>}
                {!header && !footer ? <p className="m-0 w-100 text-center display-2">{body}</p> : body}
                {footer && <><hr /><p class="mb-0">{footer}</p></>}
            </div>
        </>
    )
}
export default Alert;