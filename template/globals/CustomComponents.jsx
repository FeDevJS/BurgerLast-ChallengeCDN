export function OfcanvasStart(props) {
    const id = props.id;
    const title = props.title;
    const BodyOffcanvas = props.body;

    return (
        <div className="offcanvas offcanvas-start" id={id} aria-labelledby={id + "Label"}>
            <div className="offcanvas-header">
                <h5 id={id + "Label"} className='side-menu-title'>{title}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <BodyOffcanvas />
            </div>
        </div>
    );
}
export function ButtonOffcanvasStart(props) {
    const id = props.id;
    const title = props.title;
    const BodyOffcanvas = props.body;
    const button = props.button;
    const callback = props.callback;
    return (
        <div className='openMenuButton'>
            <button className='show-menu-btn' type="button" data-bs-toggle="offcanvas" data-bs-target={'#' + id} aria-controls={id}>
                <span className='navbar-toggler-icon'></span> {button}
            </button>
            <OfcanvasStart title={title} id={id} body={BodyOffcanvas} />
        </div>
    );
}