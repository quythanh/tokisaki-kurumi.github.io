var script1 = document.createElement('script')
var script2 = document.createElement('script')
var script3 = document.createElement('script')
var script4 = document.createElement('script')

var scripts = [script1, script2, script3]

script1.src = './static/js/react/react.development.js'
script2.src = './static/js/react/react-dom.development.js'
script3.src = './static/js/babel/babel.min.js'

script4.src = './static/js/index.js'
script4.type = 'text/babel'
script4.defer = true

scripts.map(script => document.head.appendChild(script))

document.body.appendChild(script4)