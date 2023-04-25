import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function BdConexion() {
  const [persona, setPersona] = useState([]);

  useEffect(() => {
    async function obtenerPersonas() {
      try {
        const response = await axios.get('http://localhost:4000/personas');
        const data = response.data;
        setPersona(data);
      } catch (error) {
        console.error(error);
      }
    }
    obtenerPersonas();
  }, []);
}

export default  BdConexion;