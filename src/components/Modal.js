import React, {useRef} from 'react'

function Modal({ children, showModal, setShowModal,history }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(true)
        }
    };
    return (
        showModal &&
        <div className="myModal" ref={modalRef} onClick={closeModal}>
            <div className="myContainer" >
            <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Payment successful!</h5>
        {/* <button type="button" onClick={() =>setShowModal(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body">
        Your order has been placed.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={() =>history.push('/')}>Back to store</button>
        <button type="button" class="btn btn-primary" onClick={() =>history.push('/orders')}>Go to orders</button>
      </div>
    </div>
  </div> 
                {/* {children} */}
            </div>
        </div>
    );
}

export default Modal
