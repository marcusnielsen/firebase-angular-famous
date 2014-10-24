//TODO: Make it with gulp. -MANI

var b = require('browserify')({debug:true}),
    fs = require('fs'),
    p = require('partialify'),
    bs = require('browserify-shim')

b.add('./client/app.js')
b.transform(p)
b.transform(bs)
b.bundle().pipe(fs.createWriteStream('./dist/bundle.js'))

fs.createReadStream('./client/index.html').pipe(fs.createWriteStream('./dist/index.html'))