import React, { useContext } from "react"
import { Context } from "../store/appContext";
import Modal from "../component/Modal.jsx";
import { Link } from "react-router-dom";


const Contacts = () => {
    const { actions, store } = useContext(Context)

    return (
        <>
            <h1 className="text-center"> Your contacts</h1>

            <div className=" d-flex justify-content-end me-4">
                <Link to="/form"><button className="btn btn-success mb-2"> Add Contact</button></Link>
            </div>

            {
                store.contactList.map((contact, index) => {
                    return (
                        <div className="container col-12" key={`contact-${index}`}>
                            <div className="card" >
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-center">

                                        <img src="https://picsum.photos/id/1/150/150" className="img-fluid rounded-circle p-3" alt="..." />

                                    </div>
                                    <div className="col-7 d-flex">
                                        <div className="card-body">
                                            <h5 className="card-title">{contact.name}</h5>
                                            <p className="card-text text-body-secondary"> <i className="fa-solid fa-location-dot me-2"></i>{contact.address}</p>
                                            <p className="card-tex text-body-secondary"> <i className="fa-solid fa-phone me-3"></i>{contact.phone}</p>
                                            <p className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-envelope me-3"></i>{contact.email}</small></p>
                                        </div>
                                    </div>

                                    <div className="col-2 d-flex align-items-start">

                                        <Link to={`/edit/${index}`}><button className="btn mt-2"> <i className="fa-solid fa-pen"></i></button></Link>
                                        <Modal index={index} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}












export default Contacts;