import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [persona, setPersona] = useState({
    nombre: '',
    dni: '',
  });
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    obtenerPersonas();
  }, []);

  async function obtenerPersonas() {
    try {
      const response = await axios.get('http://localhost:3000/personas');
      const data = response.data;
      setPersonas(data);
    } catch (error) {
      console.error(error);
    }
  }
  const insertarNombre = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s\-\']+$/; 
    if (value === "" || regex.test(value)) {
      setPersona({
          ...persona,
          nombre: value,
      });
    }

  }

  const insertarDNI = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/; 
    if (value === "" || regex.test(value)) {
      setPersona({
          ...persona,
          dni: value,
      });
    }

  }

const enviarInformacion = async (e) => {
  e.preventDefault();
  if ((persona.dni.length === 8) ){
  try {
    const response = await axios.post('http://localhost:3000/personas', persona);
    console.log(response.data);
    alert('Persona registrada exitosamente');
    obtenerPersonas();
  } catch (error) {
    console.error(error);
    alert('Error al registrar la persona');
  }
  }
}


  return (
    <div className='parent'>
      <div className="container">
        <div className="form">
          <p className="title">Registro</p>
          <div className="form-row">
            <label className="name">
              <span>Nombre</span>
              <input className="input" type="text" value={persona.nombre || ""} onChange={insertarNombre} />
            </label>
            <br />
            <label className="dni">
              <span>DNI</span>
              <input className="input" type="text" value={persona.dni || ""} maxLength={8} onChange={insertarDNI} />
            </label>
            <br />
            <button id="btn" onClick={enviarInformacion}>Enviar</button>
          </div>
          </div>
      </div>
      <div>
      <h1>Lista Personas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {personas.map(persona => (
            <tr key={persona.id}>
              <td>{persona.nombre}</td>
              <td>{persona.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  );
}

export default App;
