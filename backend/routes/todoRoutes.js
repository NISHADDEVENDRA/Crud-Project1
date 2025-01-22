const {Router} = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controller/todoController");
const { upload } = require( "../Middleware/Multer.js");
const router = Router()

router.get('/', getTodo)
router.post('/save', upload.single('img'), saveTodo)
router.put('/update', updateTodo)
router.post('/delete', deleteTodo)

module.exports = router;