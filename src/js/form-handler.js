export default function formHandler(e) {
  e.preventDefault();
  const target = e.target;
  const submitBtn = target.querySelector('.js-btn');
  const formControlInputs = target.querySelectorAll('.js-form-value');

  fakeSendingData(submitBtn);
  getFormData(formControlInputs);

  formControlInputs.forEach((input) => (input.value = ''));
}

function getFormData(formControlInputs) {
  const formData = {};

  formControlInputs.forEach(
    (input) => (formData[input.dataset.key] = input.value)
  );

  return formData;
}

function fakeSendingData(btn) {
  const btnTextContent = btn.textContent;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="visually-hidden">Отправка...</span>`;

  const timeoutID = setTimeout(() => {
    btn.innerHTML = btnTextContent;
    clearTimeout(timeoutID);
  }, 2000);
}
