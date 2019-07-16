var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');



router.post('/', async (req, res) => {
  const chat = new Chat(req.body)
  try {
    await chat.save()
    res.status(201).send({ chat })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const chat = await Chat.find({})
    res.send(chat)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const chat = await Chat.findByIdAndRemove(req.params.id)
    if (!chat) {
      return res.status(404).send()
    }
    res.send({ chat })
  } catch (error) {
    res.status(500).send()
  }
})

// /* GET users listing. */
// router.get('/', (req, res) => {
//   chat.find().then(data => {
//     res.json(data);
//   }).catch(err => {
//     res.json(err);
//   })
// });


// router.post('/', (req, res) => {
//   chat.insertMany({
//     id: req.body.id,
//     name: req.body.name,
//     message: req.body.message
//   }).then(data => {
//     res.json(data);
//   }).catch(err => {
//     res.json(err);
//   })
// })


// router.delete('/:id', (req, res) => {
//   chat.deleteOne({ id: req.params.id })
//     .then(data => {
//       res.json(data);
//     }).catch(err => {
//       res.json(err);
//     })
// })




module.exports = router;
