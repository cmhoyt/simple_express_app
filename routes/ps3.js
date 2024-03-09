const express = require('express');
const router = express.Router();

// GET route that returns a fixed string as a JSON object
router.get('/', (req, res) => {
    res.json({ string: 'Hey now' });
});

// POST route that retrieves its parameter from the request body
router.post('/', (req, res) => {
    const inputString = req.body.inputString;
    res.json({ originalString: inputString, length: inputString.length });
});

// GET route that reads its input parameter as a named value on the URL
router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json({ name: name });
});

module.exports = router;