document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" 
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.boxSizing = 0

var colors = {
    default: '#ffffff',
    black: '#000000',
    darkenBlack: "#1D1E22",
    next: '#50c878',
    stop: '#ed2939',
    wait: '#ffbb00',
    heaven: '#0f52ba',
    hoverColors: {
        default: '#ededed',
        next: '#44a665',
        stop: '#ba202c',
        wait: '#dba100',
        heaven: '#0b449c'
    }
}


var styles = {
    table: {
        border: "1px solid #ccc",
        borderCollapse: "collapse",
        margin: 0,
        padding: 0,
        width: '100%',
        tableLayout: "collapse",
        th: {
            fontSize: "18px",
        },
        tr: {
            border: "1px solid #ddd",
            padding: ".35rem"
        },
        tableTh: {
            padding: ".625em",
            textAlign: "center"
        },
        tableTd: {
            padding: ".625em",
            textAlign: "center"
        }
    },
    navbar: {
        navLogo: {
            flex: 1,
            width: '120px',
        },
        navImg: {
            width: 100 + "%"
        },
        nav: {
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            background: "rgb(248, 246, 246)",
            padding: "20px"
        },
        linkItem: {
            display: "flex",
            marginLeft: "50px"
        },
        link: {
            marginRight: "20px",
            textDecoration: "none",
            color: "black"
        }
    }
}


function itemColor(item) {
    item.forEach((it) => {
        it.style.color = colors.default
    })
}


function color() {
    var defaultColor = document.querySelectorAll('.i-bg-def')
    var nextColor = document.querySelectorAll('.i-bg-next')
    var darkenBlackColor = document.querySelectorAll('.i-bg-darken-black')
    var stopColor = document.querySelectorAll('.i-bg-stop')
    var waitColor = document.querySelectorAll('.i-bg-wait')
    var heavenColor = document.querySelectorAll('.i-bg-heaven')


    defaultColor.forEach((def) => {
        def.style.background = colors.default
    })
    nextColor.forEach((next) => {
        next.style.background = colors.next
        next.style.color = colors.default

        itemColor(document.querySelectorAll('a'))
    })
    darkenBlackColor.forEach((darken) => {
        darken.style.background = colors.darkenBlack
        darken.style.color = colors.default

        itemColor(document.querySelectorAll('a'))
    })
    stopColor.forEach((stop) => {
        stop.style.background = colors.stop
        stop.style.color = colors.default

        itemColor(document.querySelectorAll('a'))
    })
    waitColor.forEach((wait) => {
        wait.style.background = colors.wait
        wait.style.color = colors.default

        itemColor(document.querySelectorAll('a'))
    })
    heavenColor.forEach((heaven) => {
        heaven.style.background = colors.heaven
        heaven.style.color = colors.default

        itemColor(document.querySelectorAll('a'))
    })
}


function calculateMargin(el) {
    el.forEach(function(element) {
        if(element.classList.contains('m-1')) {
            element.style.margin = '10px'
        }
        else if(element.classList.contains('m-2')) {
            element.style.margin = '20px'
        }
        else if(element.classList.contains('m-3')) {
            element.style.margin = '30px'
        }
        else if(element.classList.contains('m-4')) {
            element.style.margin = '40px'
        }
        else if(element.classList.contains('m-5')) {
            element.style.margin = '50px'
        }
        else {
            return;
        }
    })
}


function calculateMarginTop(el) {
    el.forEach(function(element) {
        if(element.classList.contains('mt-1')) {
            element.style.marginTop = '10px'
        }
        else if(element.classList.contains('mt-2')) {
            element.style.marginTop = '20px'
        }
        else if(element.classList.contains('mt-3')) {
            element.style.marginTop = '30px'
        }
        else if(element.classList.contains('mt-4')) {
            element.style.marginTop = '40px'
        }
        else if(element.classList.contains('mt-5')) {
            element.style.marginTop = '50px'
        }
        else {
            return;
        }
    })
}


function calculateMarginBottom(el) {
    el.forEach(function(element) {
        if(element.classList.contains('mb-1')) {
            element.style.marginBottom = '10px'
        }
        else if(element.classList.contains('mb-2')) {
            element.style.marginBottom = '20px'
        }
        else if(element.classList.contains('mb-3')) {
            element.style.marginBottom = '30px'
        }
        else if(element.classList.contains('mb-4')) {
            element.style.marginBottom = '40px'
        }
        else if(element.classList.contains('mb-5')) {
            element.style.marginBottom = '50px'
        }
        else {
            return;
        }
    })
}

function calculateMarginLeft(el) {
    el.forEach(function(element) {
        if(element.classList.contains('ml-1')) {
            element.style.marginLeft = '10px'
        }
        else if(element.classList.contains('ml-2')) {
            element.style.marginLeft = '20px'
        }
        else if(element.classList.contains('ml-3')) {
            element.style.marginLeft = '30px'
        }
        else if(element.classList.contains('ml-4')) {
            element.style.marginLeft = '40px'
        }
        else if(element.classList.contains('ml-5')) {
            element.style.marginLeft = '50px'
        }
        else {
            return;
        }
    })
}


function calculateMarginRight(el) {
    el.forEach(function(element) {
        if(element.classList.contains('mr-1')) {
            element.style.marginRight = '10px'
        }
        else if(element.classList.contains('mr-2')) {
            element.style.marginRight = '20px'
        }
        else if(element.classList.contains('mr-3')) {
            element.style.marginRight = '30px'
        }
        else if(element.classList.contains('mr-4')) {
            element.style.marginRight = '40px'
        }
        else if(element.classList.contains('mr-5')) {
            element.style.marginRight = '50px'
        }
        else {
            return;
        }
    })
}


function calculatePadding(el) {
    el.forEach(function(element) {
        if(element.classList.contains('p-1')) {
            element.style.padding = '10px'
        }
        else if(element.classList.contains('p-2')) {
            element.style.padding = '20px'
        }
        else if(element.classList.contains('p-3')) {
            element.style.padding = '30px'
        }
        else if(element.classList.contains('p-4')) {
            element.style.padding = '40px'
        }
        else if(element.classList.contains('p-5')) {
            element.style.padding = '50px'
        }
        else {
            return;
        }
    })
}



function calculatePaddingTop(el) {
    el.forEach(function(element) {
        if(element.classList.contains('pt-1')) {
            element.style.paddingTop = '10px'
        }
        else if(element.classList.contains('pt-2')) {
            element.style.paddingTop = '20px'
        }
        else if(element.classList.contains('pt-3')) {
            element.style.paddingTop = '30px'
        }
        else if(element.classList.contains('pt-4')) {
            element.style.paddingTop = '40px'
        }
        else if(element.classList.contains('pt-5')) {
            element.style.paddingTop = '50px'
        }
        else {
            return;
        }
    })
}


function calculatePaddingBottom(el) {
    el.forEach(function(element) {
        if(element.classList.contains('pb-1')) {
            element.style.paddingBottom = '10px'
        }
        else if(element.classList.contains('pb-2')) {
            element.style.paddingBottom = '20px'
        }
        else if(element.classList.contains('pb-3')) {
            element.style.paddingBottom = '30px'
        }
        else if(element.classList.contains('pb-4')) {
            element.style.paddingBottom = '40px'
        }
        else if(element.classList.contains('pb-5')) {
            element.style.paddingBottom = '50px'
        }
        else {
            return;
        }
    })
}

function calculatePaddingLeft(el) {
    el.forEach(function(element) {
        if(element.classList.contains('pl-1')) {
            element.style.paddingLeft = '10px'
        }
        else if(element.classList.contains('pl-2')) {
            element.style.paddingLeft = '20px'
        }
        else if(element.classList.contains('pl-3')) {
            element.style.paddingLeft = '30px'
        }
        else if(element.classList.contains('pl-4')) {
            element.style.paddingLeft = '40px'
        }
        else if(element.classList.contains('pl-5')) {
            element.style.paddingLeft = '50px'
        }
        else {
            return;
        }
    })
}


function calculatePaddingRight(el) {
    el.forEach(function(element) {
        if(element.classList.contains('pr-1')) {
            element.style.paddingRight = '10px'
        }
        else if(element.classList.contains('pr-2')) {
            element.style.paddingRight = '20px'
        }
        else if(element.classList.contains('pr-3')) {
            element.style.paddingRight = '30px'
        }
        else if(element.classList.contains('pr-4')) {
            element.style.paddingRight = '40px'
        }
        else if(element.classList.contains('pr-5')) {
            element.style.paddingRight = '50px'
        }
        else {
            return;
        }
    })
}


class specialMarginStyles {
    //margins
    margin() {
        var elementOne = document.querySelectorAll('.m-1')
        var elementTwo = document.querySelectorAll('.m-2')
        var elementThree = document.querySelectorAll('.m-3')
        var elementFour = document.querySelectorAll('.m-4')
        var elementFive = document.querySelectorAll('.m-5')

        calculateMargin(elementOne)
        calculateMargin(elementTwo)
        calculateMargin(elementThree)
        calculateMargin(elementFour)
        calculateMargin(elementFive)
    }
    marginTop() {
        var elementOne = document.querySelectorAll('.mt-1')
        var elementTwo = document.querySelectorAll('.mt-2')
        var elementThree = document.querySelectorAll('.mt-3')
        var elementFour = document.querySelectorAll('.mt-4')
        var elementFive = document.querySelectorAll('.mt-5')

        calculateMarginTop(elementOne)
        calculateMarginTop(elementTwo)
        calculateMarginTop(elementThree)
        calculateMarginTop(elementFour)
        calculateMarginTop(elementFive)
   }
    marginBottom() {
        var elementOne = document.querySelectorAll('.mb-1')
        var elementTwo = document.querySelectorAll('.mb-2')
        var elementThree = document.querySelectorAll('.mb-3')
        var elementFour = document.querySelectorAll('.mb-4')
        var elementFive = document.querySelectorAll('.mb-5')

        calculateMarginBottom(elementOne)
        calculateMarginBottom(elementTwo)
        calculateMarginBottom(elementThree)
        calculateMarginBottom(elementFour)
        calculateMarginBottom(elementFive)
    }
    marginLeft() {
        var elementOne = document.querySelectorAll('.ml-1')
        var elementTwo = document.querySelectorAll('.ml-2')
        var elementThree = document.querySelectorAll('.ml-3')
        var elementFour = document.querySelectorAll('.ml-4')
        var elementFive = document.querySelectorAll('.ml-5')

        calculateMarginLeft(elementOne)
        calculateMarginLeft(elementTwo)
        calculateMarginLeft(elementThree)
        calculateMarginLeft(elementFour)
        calculateMarginLeft(elementFive)
    }
    marginRight() {
        var elementOne = document.querySelectorAll('.mr-1')
        var elementTwo = document.querySelectorAll('.mr-2')
        var elementThree = document.querySelectorAll('.mr-3')
        var elementFour = document.querySelectorAll('.mr-4')
        var elementFive = document.querySelectorAll('.mr-5')

        calculateMarginRight(elementOne)
        calculateMarginRight(elementTwo)
        calculateMarginRight(elementThree)
        calculateMarginRight(elementFour)
        calculateMarginRight(elementFive)
    }
}


class specialPaddingStyles {
    //paddings
    padding() {
        var elementOne = document.querySelectorAll('.p-1')
        var elementTwo = document.querySelectorAll('.p-2')
        var elementThree = document.querySelectorAll('.p-3')
        var elementFour = document.querySelectorAll('.p-4')
        var elementFive = document.querySelectorAll('.p-5')

        calculatePadding(elementOne)
        calculatePadding(elementTwo)
        calculatePadding(elementThree)
        calculatePadding(elementFour)
        calculatePadding(elementFive)
    }
    paddingTop() {
        var elementOne = document.querySelectorAll('.pt-1')
        var elementTwo = document.querySelectorAll('.pt-2')
        var elementThree = document.querySelectorAll('.pt-3')
        var elementFour = document.querySelectorAll('.pt-4')
        var elementFive = document.querySelectorAll('.pt-5')

        calculatePaddingTop(elementOne)
        calculatePaddingTop(elementTwo)
        calculatePaddingTop(elementThree)
        calculatePaddingTop(elementFour)
        calculatePaddingTop(elementFive)
   }
    paddingBottom() {
        var elementOne = document.querySelectorAll('.pb-1')
        var elementTwo = document.querySelectorAll('.pb-2')
        var elementThree = document.querySelectorAll('.pb-3')
        var elementFour = document.querySelectorAll('.pb-4')
        var elementFive = document.querySelectorAll('.pb-5')

        calculatePaddingBottom(elementOne)
        calculatePaddingBottom(elementTwo)
        calculatePaddingBottom(elementThree)
        calculatePaddingBottom(elementFour)
        calculatePaddingBottom(elementFive)
    }
    paddingLeft() {
        var elementOne = document.querySelectorAll('.pl-1')
        var elementTwo = document.querySelectorAll('.pl-2')
        var elementThree = document.querySelectorAll('.pl-3')
        var elementFour = document.querySelectorAll('.pl-4')
        var elementFive = document.querySelectorAll('.pl-5')

        calculatePaddingLeft(elementOne)
        calculatePaddingLeft(elementTwo)
        calculatePaddingLeft(elementThree)
        calculatePaddingLeft(elementFour)
        calculatePaddingLeft(elementFive)
    }
    paddingRight() {
        var elementOne = document.querySelectorAll('.pr-1')
        var elementTwo = document.querySelectorAll('.pr-2')
        var elementThree = document.querySelectorAll('.pr-3')
        var elementFour = document.querySelectorAll('.pr-4')
        var elementFive = document.querySelectorAll('.pr-5')

        calculatePaddingRight(elementOne)
        calculatePaddingRight(elementTwo)
        calculatePaddingRight(elementThree)
        calculatePaddingRight(elementFour)
        calculatePaddingRight(elementFive)
    }
}

function container() {
    var container = document.querySelectorAll('.i-container')

    container.forEach(function(containerSec) {
        containerSec.style.width = 90 + '%'
        containerSec.style.margin = 'auto'
    })
}

function text() {
    var paragraph = document.querySelectorAll('.i-text')
    var textCenter = document.querySelectorAll('.i-center')

    for(var i = 0; i < paragraph.length; i++) {
        paragraph[i].style.fontSize = '18px'
    }
    for(var i = 0; i < textCenter.length; i++) {
        textCenter[i].style.textAlign = 'center'
    }
}


function h1Title() {
    var h1Title = document.querySelectorAll('.i-title', 'fw-default')
    var h1Bolder = document.querySelectorAll('.fw-bold')

    h1Title.forEach(function (title){
        title.style.fontWeight = 500;
    })
    h1Bolder.forEach((function(bold) {
        bold.style.fontWeight = 'bold'
    }))
}


function button() {
    var button = document.querySelectorAll('.btn')

    function buttonHover(btn, newColor, prevColor) {
        btn.onmouseover = function() {
            btn.style.background = newColor
        }
        btn.onmouseout = function() {
            btn.style.background = prevColor
        }
    } 

    button.forEach(function(btn) {
        if(btn.nodeName === "BUTTON") {
           btn.style.border = 0;
           btn.style.outline = 0;
           btn.style.padding = '10px 30px';
           btn.style.cursor = 'pointer'
           btn.style.borderRadius = '4px'
           btn.style.transition = '0.3s ease'
           btn.style.fontSize = '14px'

           if(btn.classList.contains('btn-default')) {
               btn.style.background = colors.default;
               buttonHover(btn, colors.hoverColors.default, colors.default)
           }
           else if(btn.classList.contains('btn-next')) {
               btn.style.background = colors.next
               btn.style.color = colors.default
               buttonHover(btn, colors.hoverColors.next, colors.next)
           }
           else if(btn.classList.contains('btn-stop')) {
                btn.style.background = colors.stop
                btn.style.color = colors.default
                buttonHover(btn, colors.hoverColors.stop, colors.stop)
           } 
           else if(btn.classList.contains('btn-wait')) {
               btn.style.background = colors.wait
               btn.style.color = colors.default
               buttonHover(btn, colors.hoverColors.wait, colors.wait)
           }
            else if(btn.classList.contains('btn-heaven')) {
               btn.style.background = colors.heaven
               btn.style.color = colors.default
               buttonHover(btn, colors.hoverColors.heaven, colors.heaven)
           }
        }
    })
}


function table() {
    var table = document.querySelectorAll('.table') 

    table.forEach(function(tb) {
        if(tb.nodeName === "TABLE") {
            tb.style.border = styles.table.border,
            tb.style.margin = styles.table.margin
            tb.style.borderCollapse = styles.table.borderCollapse
            tb.style.tableLayout = styles.table.tableLayout
            tb.style.width = styles.table.width

            var th = document.querySelectorAll("th")
            var tr = document.querySelectorAll('tr')
            var td = document.querySelectorAll('td')

            th.forEach(function(tableTh) {
                tableTh.style.fontSize = styles.table.th.fontSize
                tableTh.style.padding = styles.table.tableTh.padding
                tableTh.style.textAlign = styles.table.tableTh.textAlign
            })

            tr.forEach(function(tableTr) {
                tableTr.style.border = styles.table.tr.border
                tableTr.style.padding = styles.table.tr.padding

                if(tableTr.classList.contains('i-tr-dark')) {
                    tableTr.style.background = colors.darkenBlack
                    tableTr.style.color = colors.default
                }
            })
            
            td.forEach(function(tableTd) {
                tableTd.style.padding = styles.table.tableTd.padding
                tableTd.style.textAlign = styles.table.tableTd.textAlign
            })
        }
        else {
            return
        }
    })
}


function navbar() {
    var nav = document.querySelectorAll('.i-nav.navbar')
    var navLogo = document.querySelectorAll(".i-nav-logo")
    var img = document.querySelectorAll('.i-nav-logo.img')
    var li = document.querySelectorAll('.i-link-item')
    var a = document.querySelectorAll('a')
    
    nav.forEach(function(navtag) {
        navtag.style.display = styles.navbar.nav.display
        navtag.style.alignItems = styles.navbar.nav.alignItems
        navtag.style.fontSize = styles.navbar.nav.fontSize
        navtag.style.padding = styles.navbar.nav.padding

        navLogo.forEach(function(logo) {
            logo.style.flex = styles.navbar.navLogo.flex
            logo.style.width = styles.navbar.navLogo.width

            img.forEach(function(image){
                image.style.width = styles.navbar.navImg.width
            })
        })
        li.forEach(function(item){
            item.style.display = styles.navbar.linkItem.display
        })
        a.forEach(function(navLink){
            navLink.style.marginRight = styles.navbar.link.marginRight
            navLink.style.textDecoration = styles.navbar.link.textDecoration
            navLink.style.color = styles.navbar.link.color
        })
    })
}

color()
container()
text()
h1Title()
button()

const paddingStyles = new specialPaddingStyles()


paddingStyles.padding()
paddingStyles.paddingTop()
paddingStyles.paddingBottom()
paddingStyles.paddingLeft()
paddingStyles.paddingRight()


const marginStyles = new specialMarginStyles()
marginStyles.marginTop()
marginStyles.marginBottom()
marginStyles.marginLeft()
marginStyles.marginRight()
marginStyles.margin()

table()
navbar()