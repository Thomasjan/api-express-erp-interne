const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: `Bienvenue dans l'API de l''ERP interne` })
})

module.exports = router