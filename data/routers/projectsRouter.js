const router = require('express').Router();

const projectsDB = require('../helpers/projectModel');

//GET All Projects
router.get('/', (req, res) => {

  projectsDB.get().then(projects => {
    res.status(200).json(projects)
  }).catch(err => {
    res.status(500).json({ error: `There was an error: ${err}`})
  })
})


//GET Projects by :id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectsDB.get(id).then(project => {
    res.status(200).json(project)
  }).catch(err => {
    res.status(500).json({ error: `There was an error: ${err}`})
  })

})


//GET Actions by project :id


// POST 


// PUT by :id


// DELETE by :id



module.exports = router;