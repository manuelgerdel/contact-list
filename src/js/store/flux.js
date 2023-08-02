const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
		},
		actions: {
			addContact: (contact) => {
				const store = getStore();
				setStore({ contactList: [...store.contactList, contact] })
			},

			edit: (id, contact) => {
				const store = getStore();
				let newList = store.contactList.filter((contact, index) => index !== id);
				setStore({ contactList: [...newList, contact] });
			},

			delete: (id) => {
				const store = getStore();
				setStore({
					contactList: store.contactList.filter((contact, index) =>
						id !== index),
				});
			}
		}
	};
};

export default getState;
