const { validationResult } = require('express-validator')
const BlogPost = require('../models/blog')
// untuk mengetahui path image
const path = require('path')
// untuk menghapus gambar
const fs = require('fs')

// Create Blog Post
exports.createBlogPost = (req, res, next) => {
    const errors = validationResult(req);

    // Validasi data
    if(!errors.isEmpty()) {
        console.log(errors)
        const err = new Error('Input value tidak valid');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // validasi jika tidak ada image
    if(!req.file) {
        const err = new Error('Image harus di upload');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {
            uid: '1',
            name: 'arrizkyhp'
        }
    })

    Posting.save()
    .then(result => {
        const hasil = {
            message: "Create Blog Post Success",
            data: result
        }
    
        res.status(201).json(hasil);
    })
    .catch(err => {
        console.log(`err: ${err}`)
    });


}

// Get All Article Blog Post
// exports.getAllBlogPost = (req, res, next) => {
//     // Memanggil data dari database
//     BlogPost.find()
//     .then(result => {
//         res.status(200).json({
//             message: 'Data Blog Post Berhasil dipanggil',
//             data: result
//         })
//     })
//     .catch(err => {
//         // mengirim error ke index.js
//         next(err);
//     })
// }


// Get All Article Blog Post Pagination
exports.getAllBlogPost = (req, res, next) => {
    // Memanggil Query dari params (cek routes/blog.js)
    // jika client tidak menggunakan query defaultnya 1
    const currentPage = req.query.page || 1;
    // jika client tidak menggunakan query defaultnya 5
    const perPage = req.query.perPage || 5;

    // Memanggil total data
    let totalData;
    BlogPost.find()
    .countDocuments()
    .then(count => {
        totalItems = count;
        return BlogPost.find()
        // jika (0) * 5 = 0 diskip 
        // jika (1) * 5 = 5 diskip dst
        .skip((currentPage -1) * perPage)
        // maximal
        .limit(perPage)
    })
    .then(result => {
        res.status(200).json({
            message: 'Data Blog Post Berhasil dipanggil',
            data: result, 
            total_data: totalItems,
            per_page: perPage,
            current_page: currentPage
        })
    })
    .catch(err => {
        next(err)
    })
}

// Get Article Blog Post By Id
exports.getBlogPostById = (req, res, next) => {
    // Memanggil data dari database
    const postId = req.params.postId
    BlogPost.findById(postId)
    .then(result => {
        // jika id tidak ditemukan
        if(!result) {
            const error = new Error('Blog Post tidak ditemukan')
            error.errorStatus = 404;
            throw error;
        }

        // jika id ditemukan
        res.status(200).json({
            message: 'Data Blog Post Berhasil dipanggil',
            data: result
        })

    })
    .catch(err => {
        // mengirim error ke index.js
        next(err);
    })
}

// Update Article Blog Post (PUT)
exports.updateBlogPost = (req, res, next) => {
    const errors = validationResult(req);

    // Validasi data
    if(!errors.isEmpty()) {
        console.log(errors)
        const err = new Error('Input value tidak valid');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // validasi jika tidak ada image
    if(!req.file) {
        const err = new Error('Image harus di upload');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    // get id di url
    const postId = req.params.postId;

    BlogPost.findById(postId)
    .then( post => {
        // jika id tidak ditemukan
        if(!post) {
            const err = new Error('log Post tidak ditemukan')
            err.errorStatus = 404;
            throw err;
        }   

        // jika id ditemukan
        post.title = title;
        post.body = body;
        post.image = image;

        return post.save();

    })
    .then(result => {
        res.status(200).json({
            message: 'Update berhasil',
            data: result
        })
    })
    .catch( err => {
        // mengirim error ke index.js
        next(err);
    })
    
}

// Delete Article Blog Post
exports.deleteBlogPost = (req, res, next) => {
    // get id dari param/url
    const postId = req.params.postId

    BlogPost.findById(postId)
    .then(post => {
         // jika id tidak ditemukan
        if(!post) {
            const err = new Error('log Post tidak ditemukan')
            err.errorStatus = 404;
            throw err;
        } 
        
        // jika id ditemukan
        // hapus image
        removeImage(post.image);
        // Hapus Postingan di DB
        return BlogPost.findByIdAndRemove(postId)
    })
    .then(result => {
        res.status(200).json({
            message: 'Hapus Artikel Berhasil',
            data: result
        }) 
    })
    .catch(err => {
        next(err);
    })
}

const removeImage = (filePath) => {
    // dirname: D:\Arrizky\Latihan\latihan-web-programming\Belajar Mern\ph-mern\mern-api\src\controllers
    // ../.. (keluar 2x)
    // filePath: images\1651758214975-Ulaanbaatar, Mongolia.jpg

    // HASIL: D:\Arrizky\Latihan\latihan-web-programming\Belajar Mern\ph-mern\mern-api\images\1651758214975-Ulaanbaatar, Mongolia.jpg
    filePath = path.join(__dirname, '../..', filePath)

    // hapus gambar
    fs.unlink(filePath, err => console.log(err));
}