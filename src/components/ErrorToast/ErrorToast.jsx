import {Toast, ToastContainer} from "react-bootstrap";

const ErrorToast = ({showToast, onCloseClicked}) => {
    return (
        <ToastContainer position={"top-center"}>
            <Toast
                className="d-inline-block m-1"
                bg='danger'
                autohide={true}
                show={showToast}
                onClose={onCloseClicked}
            >
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body className={'text-white'}>
                    Wrong username and/or password
                </Toast.Body>
            </Toast>
        </ToastContainer>

    )
}

export default ErrorToast;