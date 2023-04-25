const express = require('express');
const sequelize = require('./config/connection');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Modelo
const Persona = require('./models/Persona');

//Controlador y ruta
const personasRouter = require('./controllers/personasController');

(async () => {
  await sequelize.sync({ force: true });
})();

try {
  sequelize.authenticate();
  console.log('Conexión a la base de datos establecida');
}catch(error) {
  console.error('Error al conectar con la base de datos:', error);
}

app.get('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido ' });
});

app.use(personasRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
})