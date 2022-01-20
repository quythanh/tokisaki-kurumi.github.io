// add css
const cssURL = [
    "./static/css/bootstrap/bootstrap.min.css",
    "./static/css/myCustom.css",
    "./static/css/fontawesomepro/all.css"
]

var link1, link2, link3, links = [link1, link2, link3]

links.map((link, index) => {
    link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = cssURL[index]
    document.head.appendChild(link)
})

// create root
var root = document.createElement('div')
root.id = 'react-root'
root.className = 'container'

document.body.appendChild(root)
document.body.id = 'background'