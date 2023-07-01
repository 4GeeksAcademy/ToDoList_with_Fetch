import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([])
	const [item, setItem] = useState ("")

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

	const itemLeft = () => {
		let total = listaTareas.length
		setItem(total)

		console.log(total);
	}


	return (
		<div className="container principal">
			<div className="titulo"><h1>TO DO LIST</h1></div>
			<form className=""> 
				<input type="text" placeholder="What needs to be done?" onChange={(e) => setTarea(e.target.value)} value={tarea} onKeyDown={handleSubmit}/>
				<div className="lista">
					<ul>{listaTareas.map((item, i) => <li key= {i}>{item} <span className="equis" onClick={() => deleteTask(item)} style={{cursor: "pointer"}}>X</span> </li>)}</ul>
				</div>
				<div className="items">
					<span onChange={() => itemLeft}>{listaTareas.length + item} Items Left</span>
				</div>
			</form>
		</div>
	);
};

export default Home;
