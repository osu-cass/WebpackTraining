import { shuffle } from 'lodash-es'

const jumble = shuffle('Hello world!'.split(''))
document.getElementById('text').innerHTML = `<p>${jumble.join('')}</p>`
