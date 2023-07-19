const skills = [
    {id: 345675, name: 'Node.js', level: 'Beginner'},
    {id: 345676, name: 'Problem Solving', level: 'Master'},
    {id: 345677, name: 'Express', level: 'Beginner'},
    {id: 345678, name: 'Git and GitHub', level: 'Beginner'},
    {id: 345679, name: 'Analytics', level: 'Intermediate'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find(skill => skill.id === id)
}

function getAll() {
  return skills;
}