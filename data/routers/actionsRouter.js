const router = require('express').Router();


actionsDB = require('../helpers/actionModel');


//GET All Actions
router.get("/", (req, res) => {
  actionsDB
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});


//GET Actions by :id

router.get("/:id", (req, res) => {
  const { id } = req.params;

  actionsDB
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});



// POST 
router.post("/", (req, res) => {
  const addedAction = req.body;
  actionsDB
    .insert(addedAction)
    .then(addedAction => {
      res.status(201).json(addedAction);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});


// PUT by :id

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateAction = req.body;

  actionsDB
    .update(id, updateAction)
    .then(updateAction => {
      res.status(200).json(updateAction);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});


// DELETE by :id

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  actionsDB
    .remove(id)
    .then(deleteAction => {
      res.status(200).json(deleteAction);
    })
    .catch(err => {
      res.status(500).json({ error: `There was an error: ${err}` });
    });
});

module.exports = router;