const express = require('express');
const { getdashboard, addblogpage, addblog, viewblog, deleteblog, editblog, updateblog, view } = require('../controller/admin.controller');
const uploadsimage = require('../middleware/image.uploads');

const router = express.Router();

router.get("/", getdashboard)
router.get("/blogs/add-blog", addblogpage);
router.post("/blogs/add-blog", uploadsimage.single("BlogImage") ,addblog);
router.get("/blogs/view-blog",viewblog);
router.get("/blogs/delete-blog/:id",deleteblog);
router.get("/blogs/edit-blog/:id",editblog);
router.post("/blogs/update-blog/:id",uploadsimage.single("BlogImage"),updateblog);
router.get("/blogs/view/:id", view);
module.exports = router;