if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const td1 = document.querySelector('#td1')
const td2 = document.querySelector('#td2')
const td3 = document.querySelector('#td3')
const td4 = document.querySelector('#td4')
const td5 = document.querySelector('#td5')
const td6 = document.querySelector('#td6')
const td7 = document.querySelector('#td7')
const td8 = document.querySelector('#td8')
const td9 = document.querySelector('#td9')
const tdClick = document.querySelectorAll('td')
const turn = document.querySelector('.circle h2')
const Oturn = document.querySelector('.square h2')
const modalWinner = document.querySelector('h3')
let moveCounter = 0
let currentTurn = 'X'
const modal = document.querySelector('body')
const possibleWins = [[td1, td2, td3], [td4, td5, td6], [td7, td8, td9], [td1, td4, td7], [td2, td5, td8], [td3, td6, td9], [td1, td5, td9], [td3, td5, td7]]

for (let i = 0; i < tdClick.length; i++) {
  tdClick[i].addEventListener('click', () => {
    if (tdClick[i].textContent !== '') {
      return
    }
    moveCounter++
    tdClick[i].textContent = currentTurn
    let winner = false

    for (let i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i][0].textContent === currentTurn && possibleWins[i][1].textContent === currentTurn &&
      possibleWins[i][2].textContent === currentTurn) {
        // setTimeOut(function () {
        turn.textContent = `${currentTurn} Wins the Game!`
        modalWinner.textContent = `${currentTurn} Wins the Game!`
        winner = true
        modal.className = 'modal'
        // }, 3000)
      }
    }
    if (!winner) {
      if (currentTurn === 'X') {
        currentTurn = 'O'
        tdClick[i].classList.add('oImg')
        Oturn.textContent = 'Now You Go, O'
        turn.textContent = ''
      } else {
        currentTurn = 'X'
        tdClick[i].classList.add('xImg')
        turn.textContent = 'X is up Now!'
        Oturn.textContent = ''
      }
    }
    if (moveCounter === 9) {
      modal.className = 'modal'
    }
  })
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
  modal.className = ''
  window.location.reload()
})
// document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
