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

  const insertarApellido = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s\-\']+$/; 
    if (value === "" || regex.test(value)) {
      setPersona({
          ...persona,
          apellido: value,
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

  const insertarGenero = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s\-\']+$/; 
    if (value === "" || regex.test(value)) {
      setPersona({
          ...persona,
          genero: value,
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
export default axios;
