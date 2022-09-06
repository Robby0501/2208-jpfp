// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const {users} = require('../students.json');
const {campuses} = require('../campus.json');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(campuses.map(campus => Campus.create(campus)));
    await Promise.all(users.map(student => Student.create(student)));

    //use this area to sync your database
    console.log(`Seeding successful!`);
  } catch (err) {
    console.error(err)
  }
};

Student.belongsTo(Campus)
Campus.hasMany(Student)

module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus,

}