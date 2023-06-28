import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([])

	const handleTarea = (e) => {
		setTarea(e.target.value);
		console.log(tarea);
	}

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			setListaTareas(listaTareas.concat(tarea));
			setTarea("")
			e.preventDefault();
		}
	}

	const deleteTask = (item) => {
		const newArr = listaTareas.filter((param, i) => i != item);
		setListaTareas(newArr);
	}

	const tareaHTML = listaTareas.map((task, index)=> {
		return (
			<li key={index}>
				{task}
				<span onClick={() => deleteTask(index)}>x</span>
			</li>
		)
	}) 

	return (
		<div className="container">
			<form>
				<h1>TO DO LIST</h1>
				<input type="text" placeholder="What needs to be done?" onChange={handleTarea} value={tarea} onKeyDown={handleSubmit}/>
				<div>
					<ul>{tareaHTML}</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;
