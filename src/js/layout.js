import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import Form from "./views/Form.js";
import Contacts from "./views/Contacts.js";
import EditContact from "./views/EditContact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const basename = process.env.BASENAME || "";
const Layout = () => {

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/form" element={<Form />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/edit/:index" element={<EditContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
