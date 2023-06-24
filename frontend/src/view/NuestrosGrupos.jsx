import React from 'react';
import { useState } from 'react';
import uuid from "react-uuid";
import Swal from "sweetalert2";


export const NuestrosGrupos = () => {
  const [tasks, setTasks] = useState([]);
  const [Nombre, setNombre] = useState("");
  const [Grupo, setGrupo] = useState("");
  
  const [edit, setEdit] = useState(false);


  const addTask = () => {
      const task = { id: uuid(), Nombre, Grupo };
      setTasks([...tasks, task]);
      clear();
  };
  const updateTask = () => {
    const id = localStorage.getItem("id");
    const newTask = { id, Nombre, Grupo };
    const newTasks = tasks.map((item) => (item.id === id ? newTask : item));
    setTasks(newTasks);
    clear();
};

const actions = (e) => {
    e.preventDefault();
    edit ? updateTask() : addTask();
};

const deleteTasks = (id) => {
  Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: "si continuas No podrás revertir el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
  }).then((result) => {
      if (result.isConfirmed) {
          const newTasks = tasks.filter((task) => task.id !== id);
          setTasks(newTasks);
          Swal.fire({
              title: "Eliminado",
              text: "Sus datos han sido eliminados correctamente.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500

          })
      }
  })
};

const getData = (id) => {
  const task = tasks.find((item) => item.id === id);
  localStorage.setItem("id", id);
  setNombre(task.Nombre);
  setGrupo(task.Grupo);
  setEdit(true);
};

const clear = () => {
  setNombre("");
  setGrupo("");
  setEdit(false);
  localStorage.removeItem("id");
};

return (

  <div className="container">
      <div className="row">
          <div className="col ">
              <div className="container  ">
                  <div className="mt-3 justify-content-center d-flex align-items-center">
                      <div className="col-12">
                          <div className="card">
                              <h3 className="card-title text-center">Integrantes</h3>
                              <div className="card-body">
                                  <form onSubmit={actions}>
                                      <div className="mb-3">
                                          <input
                                              type="text"
                                              placeholder="Nombre"
                                              value={Nombre}
                                              required
                                              autoFocus
                                              className="form-control"
                                              onChange={(e) => setNombre(e.target.value)}
                                          />
                                      </div>
                                      <div className="mb-3">
                                          <input
                                              type="text"
                                              placeholder="Grupo"
                                              value={Grupo}
                                              required
                                              className="form-control"
                                              onChange={(e) => setGrupo(e.target.value)}
                                          />
                                      </div>
                                     
                                      <button className="btn btn-primary form-control" type="submit">
                                          Save
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="col mt-3 ">
              <ul className="list-group list-group-numbered">
                  {tasks.map((task) => (
                      <li
                          className="list-group-item d-flex justify-content-between aling-item-start"
                          key={task.id}
                      >
                          <div className="ms-2 me-auto">
                              <div className="fw-bold">{task.title}</div>
                              {task.description}
                          </div>
                          <button
                              className="btn btn-danger me-2"
                              onClick={() => deleteTasks(task.id)}
                          >
                              <i className="fas fa-trash"></i>
                          </button>
                          <button
                              className="btn btn-warning"
                              onClick={() => getData(task.id)}
                          >
                              <i className="fas fa-edit"></i>
                          </button>
                      </li>
                  ))}
              </ul>
          </div>

      </div>
  </div>



)

}

export default NuestrosGrupos