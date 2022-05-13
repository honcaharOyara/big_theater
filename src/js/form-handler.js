export default function formHandler(e) {
  e.preventDefault();
  const target = e.target;
  const submitBtn = target.querySelector('.js-btn');
  const formControlInputs = target.querySelectorAll('.js-form-value');

  setPreloader(submitBtn);
  getFormData(formControlInputs);

  formControlInputs.forEach((input) => {
    input.value = '';
  });
}

function getFormData(formControlInputs) {
  const formData = {};

  formControlInputs.forEach((input) => {
    formData[input.dataset.key] = input.value;
  });

  return formData;
}

function setPreloader(btn) {
  const btnTextContent = btn.textContent;

  btn.style.width = btn.offsetWidth + 'px';
  btn.style.height = btn.offsetHeight + 'px';
  btn.classList.add('p-0-20');
  btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="visually-hidden">Отправка...</span>`;
  btn.setAttribute('disabled', 'disabled');

  const timeoutID = setTimeout(() => {
    btn.innerHTML = btnTextContent;
    btn.removeAttribute('style');
    btn.classList.remove('p-0-20');
    btn.removeAttribute('disabled');
    clearTimeout(timeoutID);
  }, 2000);
}
