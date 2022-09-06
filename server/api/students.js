const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET api/students
router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({ include: Campus, });
        res.send(students);
    }
    catch (err) {
        next(err);
    }
});

// GET api/students/id
router.get('/:id', async (req, res, next) => {
    try {
        const student = await Student.findAll({
            where: {
                id: req.params.id,
            },
            include: Campus,
        });
        res.send(student);
    } catch (err) {
        next(err);
    }
})

// POST api/students
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Student.create(req.body));
    }
    catch (err) {
        next(err);
    }
})

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        res.send(await student.update(req.body));
    }
    catch (err) {
        next(err);
    }
})

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        await student.destroy();
        res.send(student);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;