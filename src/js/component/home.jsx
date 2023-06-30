import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([])

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			setListaTareas(listaTareas.concat(tarea));
			setTarea("")
			e.preventDefault();
		}
	}

	const deleteTask = (tarea) => {
		const neArray = listaTareas.filter((item) => item != tarea);
		setListaTareas(neArray);
	}


	return (
		<div className="container border border-dark ">
			<form>
				<h1>TO DO LIST</h1>
				<input type="text" placeholder="What needs to be done?" onChange={(e) => setTarea(e.target.value)} value={tarea} onKeyDown={handleSubmit}/>
				<div>
					<ul>{listaTareas.map((item, i) => <li key= {i}>{item} <span onClick={() => deleteTask(item)} >X</span> </li>)}</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;
