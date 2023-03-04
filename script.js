let birthInputElem = document.querySelector('#birthday')
let loginBtn = document.querySelector('#login-btn')


loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let birthRegex = /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/

    let checkValueOfBirthday = birthRegex.test(birthInputElem.value)

    if (checkValueOfBirthday) {
        Swal.fire(
            'عملیات موفق',
            'با موفقیت وارد پنل کاربری شدید',
            'success',
        )
    } else {
        Swal.fire(
            'تاریخ تولد نامعتبر',
            'لطفا تاریخ تولد خود را بررسی نمایید',
            'warning'
        )
    }
})





