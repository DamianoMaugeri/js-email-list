console.log('hello')
const ulFromdom = document.getElementById('emailList')
const buttonFromDom = document.getElementById('emailButton')

function generaEmail(number) {

    for (let i = 0; i < number; i++) {

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {

                const randomEmail = res.data.response
                const newElementemail = document.createElement('li')
                newElementemail.innerHTML = randomEmail
                ulFromdom.appendChild(newElementemail)

            }

            )
            .catch((err) => {
                console.log('errore', err)
            })
    }

}

buttonFromDom.addEventListener('click', function () {

    ulFromdom.innerHTML = ''
    const numberEmail = 10
    generaEmail(numberEmail)

})







