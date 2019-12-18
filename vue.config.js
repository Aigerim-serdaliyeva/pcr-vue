module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/main.scss";`
            }
        }
    }
};

// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminPngquant = require('imagemin-pngquant');
// const imageminSvgo = require('imagemin-svgo');

// (async () => {
// 	const files = await imagemin(['src/assets/images/*.{jpg,png,svg}'], 'build/images', {
// 		plugins: [
// 			imageminJpegtran(),
// 			imageminPngquant({
// 				quality: [0.8, 1]
//             }),
//             imageminSvgo({
//                 plugins: [
//                     {removeViewBox: false}
//                 ]
//             })
// 		]
// 	});

// 	console.log(files);
// })();
