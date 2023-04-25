function home(){

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
            <label className="apellido">
              <span>Apellido</span>
              <input className="input" type="text" value={persona.apellido || ""} onChange={insertarApellido} />
            </label>
            <br />

            <br />
            <label className="dni">
              <span>DNI</span>
              <input className="input" type="text" value={persona.dni || ""} maxLength={8} onChange={insertarDNI} />
            </label>
            <br />

            <br />
            <label className="genero">
              <span>Genero</span>
              <select className="input" type="text" value={persona.genero || ""} onChange={insertarGenero} >
                 <option> masculino </option>
                 <option> femenino </option>  
                 </select>
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

export default home;
