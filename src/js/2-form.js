const refs = {
    feedbackForm: document.querySelector('.feedback-form')
}

let formData = {
    email: '',
    message: ''
}

function onPageVisit() {
    if (localStorage.getItem('email') != null) {
        refs.feedbackForm.elements.email.value = localStorage.getItem('email')
        formData.email = localStorage.getItem('email')
    }
    if (localStorage.getItem('message') != null) {
        refs.feedbackForm.elements.message.value = localStorage.getItem('message')
        formData.message = localStorage.getItem('message')
    }
    function onInput(event) {
        formData = {
            email: refs.feedbackForm.elements.email.value.trim(),
            message: refs.feedbackForm.elements.message.value.trim()
        }
        localStorage.setItem('email', formData.email)
        localStorage.setItem('message', formData.message)
    }
    function onSubmit(event) {
        event.preventDefault()
        if (Object.values(formData).includes('')) {
            alert('Fill please all fields')
            return
        } else {
            localStorage.setItem('feedback-form-state', JSON.stringify(formData))
            refs.feedbackForm.reset();
            localStorage.setItem('email', '')
            localStorage.setItem('message', '')
        }
    }
    refs.feedbackForm.addEventListener('input', onInput)
    refs.feedbackForm.addEventListener('submit', onSubmit)
}

onPageVisit()