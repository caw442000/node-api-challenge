const router = require("express").Router();

const projectsDB = require("../helpers/projectModel");

//GET All Projects
router.get("/", (req, res) => {
  projectsDB
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});

//GET Projects by :id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  projectsDB
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});

//GET Actions by project :id
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  projectsDB
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});

// POST
router.post("/", (req, res) => {
  const addedProject = req.body;
  projectsDB
    .insert(addedProject)
    .then(addedProject => {
      res.status(200).json(addedProject);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});

// PUT by :id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateProject = req.body;

  projectsDB
    .update(id, updateProject)
    .then(updateProject => {
      res.status(200).json(updateProject);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});
// DELETE by :id

module.exports = router;
