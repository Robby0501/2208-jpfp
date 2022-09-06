const router = require('express').Router();
const { Campus, Student } = require('../db');

// GET api/campuses
router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({ 
          include: Student 
        });
        res.send(campuses);
    }
    catch (err) {
        next(err);
    }
});

// GET api/campuses/id
router.get('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findAll({
            where: {
                id: req.params.id,
            },
            include: Student,
        });

        res.send(campus);
    }
    catch (err) {
        next(err);
    }
})

//POST api/campuses
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Campus.create(req.body));
    }
    catch (err) {
        next(err);
    }
})

//PUT /api/campuses/:id
router.put('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        res.send(await campus.update(req.body));
    }
    catch (err) {
        next(err);
    }
})

//DELETE /api/campuses/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        await campus.destroy();
        res.send(campus);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;