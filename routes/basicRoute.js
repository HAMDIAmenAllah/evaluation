const router = require('express').Router();
const {getvoiture, addvoiture, updatevoiture, deletevoiture, showvoiture} = require('../controllers/basicController');

router.get('/greetings/:name', (req, res) => {
    res.send(`Bonjour ${req.params.name}`);
})


router.get('/voiture', getvoiture);
router.get('/voiture/:id', showvoiture);
router.post('/voiture/add', addvoiture);
router.put('/voiture/update/:id', updatevoiture);
router.delete('/voiture/delete/:id', deletevoiture);

module.exports = router;