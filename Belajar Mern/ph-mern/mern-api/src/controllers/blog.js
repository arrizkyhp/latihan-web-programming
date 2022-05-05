const { validationResult } = require('express-validator')

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        console.log(errors)
        const err = new Error('Input Value tidak valid');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;

    }

    const result = {
        message: "Create Blog Post Success",
        data: {
            post_id: 1,
            title: title,
            // image: "imageFile.png",
            body : body,
            created_at: "04/05/2022",
            author: {
                uid: 1,
                name: "arrizky"
            }
        }
    }

    res.status(201).json(result);
}