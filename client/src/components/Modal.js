import React, {useRef} from 'react'

function Modal({ children, showModal, setShowModal,history }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(true)
        }
    };
    return (
        showModal &&(
  //       <div className="myModal" ref={modalRef} onClick={closeModal}>
  //           <div className="myContainer bg-secondary" >
  //           <div class="modal-dialog bg-secondary">
  //   <div class="modal-content ">
  //     <div class="modal-header">
  //       <h5 class="modal-title" id="exampleModalLabel">Payment successful!</h5>
  //       {/* <button type="button" onClick={() =>setShowModal(false)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
  //     </div>
  //     <div class="modal-body">
  //       Your order has been placed.
  //     </div>
  //     <div class="modal-footer">
  //       <button type="button" class="btn btn-secondary" onClick={() =>history.push('/')}>Back to store</button>
  //       <button type="button" class="btn btn-primary" onClick={() =>history.push('/orders')}>Go to orders</button>
  //     </div>
  //   </div>
  // </div> 
               
  //           </div>
  //       </div>
  // <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" ref={modalRef} onClick={closeModal} aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="myModal" ref={modalRef} onClick={closeModal}>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-lead" id="exampleModalLongTitle">Payment successful</h5>
      </div>
      <div class="modal-body">
        <h3>Thank you for shoping with us!</h3>
      </div>
      <div class="modal-footer d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" onClick={() =>history.push('/')} data-dismiss="modal">Back to Store</button>
        <button type="button" class="btn btn-primary" onClick={() =>history.push('/orders')}>Go to Orders</button>
      </div>
    </div>
  </div>
</div>
        )


    );
}

export default Modal
