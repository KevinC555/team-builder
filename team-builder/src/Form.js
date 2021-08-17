import React from 'react';

export default function Form(props) {
	const { values, members, change, submit } = props;

	return (
		<div className="container">
			<h1>Form App</h1>
			{members.map((member, index) => (
				<div key={index}>
					{member.firstName} {member.lastName} is a {member.role}
				</div>
			))}
			<form onSubmit={submit}>
				<input placeholder="First Name" type="text" name="firstName" value={values.firstName} onChange={change} />
				<input placeholder="Last Name" type="text" name="lastName" value={values.lastName} onChange={change} />
				<label>
					{/* 🔥 STEP 5 - Make dropdown for role. */}
					<select
						value={values.role}
						name="role"
						onChange={change}>
						<option value=''>-- Select a Role --</option>
						<option value='Student'>Student</option>
						<option value='TL'>Team Lead</option>
						<option value='Instructor'>Instructor</option>
						<option value='Alumni'>Alumni</option>
					</select>
				</label>
				<button>CREATE A MEMBER</button>
			</form>
		</div>
	)
}