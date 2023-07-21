import React, { useState, useEffect } from "react";

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

	// 1. Crear usuario

		function createUser() {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/angelica_zambrano", {
				method: "POST",
				header: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify([]),
			})
			.then((response) => response.json())
			.then((data => console.log(data)))
			.catch((error) => console.log(error))
		}

	// 2. Lista de tareas
		const traerListTarea = () => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/angelica_zambrano", {
				method: "GET",
			})
			.then((response) => {
				if (response.status === 400) {
					createUser()
				};
				return response.json()
			})
			.then((data => setListaTareas(data)))
			.catch((error) => console.log(error))
		}

		// 3. Actualizar Tarea

			const actualizarTarea = () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/angelica_zambrano", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(listaTareas)
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.log(error))
			}
		
		// 4. Borrar Contacto

			const deleteUser = () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/angelica_zambrano", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.log(error))
			}


		useEffect(() => {
			traerListTarea()
		}, [])

		useEffect(() => {
			if(listaTareas.length != 0){
				actualizarTarea()
			}
		},[listaTareas])




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
			<button className="btn btn-danger mt-2" onClick={deleteUser}>
				Eliminar Todo
			</button>
		</div>
	);
};

export default Home;
