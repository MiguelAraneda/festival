import {src, dest} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

// export function hola(done){
//     console.log('Hola desde Gulpfile.js')

//     done()//finaliza la función
// }

const sass = gulpSass(dartSass)

export function css( done ){
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('dist/css'))

    done()
}