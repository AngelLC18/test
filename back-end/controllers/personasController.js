
const {  Router } = require('express');
const Persona = require ('../models//Persona');
const personasRouter = Router()

personasRouter.get("/personas", async (req, res) => {
  try {
    const personas = await Persona.findAll()
    res.json(personas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

personasRouter.get("/personas/:id", async (req, res) => {
  try {
    const { id } = req.params
    const persona = await Personas.findByPk(id)
    res.json(persona)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

personasRouter.post("/personas", async (req, res) => {
  try {
    const { nombre, dni } = req.body
    const newPersona = await Persona.create({
      nombre,
      dni,
    })
    res.status(201).json(newPersona)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

personasRouter.put("/personas/:id", async (req, res) => {
  try {
    const { id } = req.params
    const persona = await Persona.findByPk(id)
    persona.set(req.body)
    await persona.save()
    res.status(202).json(persona)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

personasRouter.delete("/personas/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Persona.destroy({
      where: { id },
    })
    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})
module.exports = personasRouter;