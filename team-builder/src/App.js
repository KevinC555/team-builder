import React, { useState } from 'react';
import './App.css';
import Form from './Form'

const memberList = [
	{ firstName: 'Kevin', lastName: 'Corcoran', role: 'Student' }
]

function App() {
	const [formValues, setFormValues] = useState({ firstName: "", lastName: "" });
	const [members, setMembers] = useState(memberList);

	const change = (event) => {
		console.log(event.target.value);
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	}

	const submit = (event) => {
		event.preventDefault();
		const newMember = {
			firstName: formValues.firstName,
			lastName: formValues.lastName,
			role: formValues.role
		}
		setMembers(members.concat(newMember));
		setFormValues({ firstName: "", lastName: "" });
	}

	return (
		<Form
			values={formValues}
			change={change}
			submit={submit}
			members={members}
		/>
	)
}


export default App;
