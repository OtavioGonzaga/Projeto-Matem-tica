const body = document.querySelector('body')
const header = document.querySelector('header')
const footer =  document.querySelector('footer')
const p = document.querySelector('p')
const img = document.querySelectorAll('div')[3]
function clock() {
    const fdate = new Date()
    const year = fdate.getFullYear()
    let mes = fdate.getMonth()
    let week = fdate.getDay()
    const day = fdate.getDate()
    const hour = fdate.getHours()
    const min = fdate.getMinutes()
    const sec = fdate.getSeconds()
    let res = 60 - sec
    let sdd = 'Olá'
    switch (mes) {
        case 0:
        mes = 'janeiro'
        break
        case 1:
        mes = 'fevereiro'
        break
        case 2:
        mes = 'março'
        break
        case 3:
        mes = 'abril'
        break
        case 4:
        mes = 'maio'
        break
        case 5:
        mes = 'junho'
        break
        case 6:
        mes = 'julho'
        break
        case 7:
        mes = 'agosto'
        break
        case 8:
        mes = 'setembro'
        break
        case 9:
        mes = 'outubro'
        break
        case 10:
        mes = 'novembro'
        break
        case 11:
        mes = 'dezembro'
        break
    }
    switch (week) {
        case 0:
        week = 'domingo'
        break
        case 1:
        week = 'segunda-feira'
        break
        case 2:
        week = 'terça-feira'
        break
        case 3:
        week = 'quarta-feira'
        break
        case 4:
        week = 'quinta-feira'
        break
        case 5:
        week = 'sexta-feira'
        break
        case 6:
        week = 'sábado'
        break
    }
    if (hour < 6) {
        sdd = 'Boa madrugada'
        img.innerHTML = '<img width="40%" src="img/Noite.png">'
        body.style.backgroundColor = 'rgb(41, 69, 131)'
        header.style.backgroundColor = '#0B2161'
        footer.style.backgroundColor = '#0B2161'
    } else if (hour < 12 ) {
        sdd = 'Bom dia'
        img.innerHTML = '<img width="40%" src="img/Manhã.png">'
        body.style.backgroundColor = 'rgb(69, 190, 53)'
        header.style.backgroundColor = '#0B610B'
        footer.style.backgroundColor = '#0B610B'
    } else if (hour < 19) {
        sdd = 'Boa tarde'
        img.innerHTML = '<img width="40%" src="img/Tarde.png">'
        body.style.backgroundColor =  '#FE9A2E'
        header.style.backgroundColor = '#DF7401'
        footer.style.backgroundColor = '#DF7401'
    } else {
        sdd = 'Boa noite'
        img.innerHTML = '<img width="40%" src="img/Noite.png">'
        body.style.backgroundColor = 'rgb(40, 60, 131)'
        header.style.backgroundColor = '#0B2161'
        footer.style.backgroundColor = '#0B2161'
    }
    if (min < 10) {
        p.innerText = `${sdd}! Hoje é dia ${day} de ${mes} de ${year}, ${week}. Agora é ${hour}:0${min}.`
    } else {
        p.innerText = `${sdd}! Hoje é dia ${day} de ${mes} de ${year}, ${week}. Agora é ${hour}:${min}.`
    }
    setTimeout (() => {
        clock()
    }, res * 1000)
}