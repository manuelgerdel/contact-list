import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const contact = {
    name: "",
    email: "",
    phone: "",
    address: "",
};



const Form = () => {
    const { actions } = useContext(Context)
    const [newContact, setNewContact] = useState(contact)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const userInput = { ...newContact, [e.target.name]: e.target.value };
        setNewContact(userInput)
    };

    const addNewContact = () => {
        actions.addContact(newContact);
        navigate("/contacts");

    };

    return <>
        <h1 className="text-center">Add a new contact</h1>


        <div className="container col-6">
            <label htmlFor="inputPassword5" className="form-label text-decoration-underline">Full Name</label>
            <input type="text" id="xampleFormControlInput1" className="form-control mb-2" name="name" onChange={handleChange} placeholder="Example: Antonio Alberto Perez Ronaldo" aria-describedby="passwordHelpBlock" />
            <label htmlFor="inputPassword5" className="form-label text-decoration-underline">Email</label>
            <input type="text" id="xampleFormControlInput1" className="form-control mb-2" name="email" onChange={handleChange} placeholder="Example: antonioesloquesoy@gmail.com" aria-describedby="passwordHelpBlock" />
            <label htmlFor="inputPassword5" className="form-label text-decoration-underline">Phone</label>
            <input type="text" id="xampleFormControlInp>ut1" className="form-control mb-2" name="phone" onChange={handleChange} placeholder="Example: 04121010024" aria-describedby="passwordHelpBlock" />
            <label htmlFor="inputPassword5" className="form-label text-decoration-underline">Address</label>
            <input type="text" id="xampleFormControlInput1" className="form-control mb-2" name="address" onChange={handleChange} placeholder="Example: Urb. Acer, conj. Este, calle 1, casa" aria-describedby="passwordHelpBlock" />
        </div>

        <div className="container d-flex justify-content-center mt-1">
            <button className="btn btn-primary" type="button" onClick={addNewContact}>Save</button>

        </div>

    </>
}

export default Form;