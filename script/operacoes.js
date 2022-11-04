// ERRO! Em subtrair, projeto abandonado...
const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const innum = document.getElementById('num')
const button = document.getElementById('button')
const p = document.querySelectorAll('p')[1]
function clock() {
    const fdate = new Date()
    const hour = fdate.getHours()
    const min =  fdate.getMinutes()
    const sec = fdate.getSeconds()
    let res = (59 - min) * 60 + (60 - sec)  
    if (hour < 6) {
        body.style.backgroundColor = 'rgb(41, 69, 131)'
        header.style.backgroundColor = '#0B2161'
        footer.style.backgroundColor = '#0B2161'
    } else if (hour < 12 ) {
        body.style.backgroundColor = 'rgb(69, 190, 53)'
        header.style.backgroundColor = '#0B610B'
        footer.style.backgroundColor = '#0B610B'
    } else if (hour < 19) {
        body.style.backgroundColor =  '#FE9A2E'
        header.style.backgroundColor = '#DF7401'
        footer.style.backgroundColor = '#DF7401'
    } else {
        body.style.backgroundColor = 'rgb(40, 60, 131)'
        header.style.backgroundColor = '#0B2161'
        footer.style.backgroundColor = '#0B2161'
    }
    setTimeout (() => {
        clock()
    }, res * 1000)
}
function somar() {
    let num = Number(innum.value)
    res += num
    p.innerText = res
    innum.value = undefined
    innum.focus()
}
function subtrair() {
    let num = Number(innum.value)
    res -= num
    p.innerText = res
    innum.value = undefined
    innum.focus()
}
function limpar() {
    res = 0
    innum.value = undefined
    p.innerText = 'O resultado aparecerá aqui...'
}
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && button.value == '+') return somar()
    if (e.key === "Enter" && button.value == '-') return subtrair()
})