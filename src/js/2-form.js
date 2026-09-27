const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('email') != null) {
  refs.feedbackForm.elements.email.value = localStorage.getItem('email');
  formData.email = localStorage.getItem('email');
}
if (localStorage.getItem('message') != null) {
  refs.feedbackForm.elements.message.value = localStorage.getItem('message');
  formData.message = localStorage.getItem('message');
}
function onInput(event) {
  formData = {
    email: refs.feedbackForm.elements.email.value.trim(),
    message: refs.feedbackForm.elements.message.value.trim(),
  };
  localStorage.setItem('email', formData.email);
  localStorage.setItem('message', formData.message);
}
function onSubmit(event) {
  event.preventDefault();
  if (Object.values(formData).includes('')) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData)

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    refs.feedbackForm.reset();
    formData = { email: '', message: '' }
    localStorage.removeItem('email')
    localStorage.removeItem('message')
  }
}
refs.feedbackForm.addEventListener('input', onInput);
refs.feedbackForm.addEventListener('submit', onSubmit);
