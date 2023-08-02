import React, {useContext} from "react"
import {Context} from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Modal = ({index}) => {

    const {actions} = useContext(Context);
    const navigate = useNavigate();

     const handleDelete = (index) => {
         actions.delete(index);
         navigate("/contacts")
     };

return (
    <>
    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i className="fa-solid fa-trash-can mt-2 pt-1"/>
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete contact</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this contact? Think about it...</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => handleDelete(index)}>Borrar</button>
          </div>
        </div>
      </div>
    </div>

    </>


)



}



export default Modal;