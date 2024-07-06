const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const localStorageKey = 'feedback-form-state';


// Обробка иппут и добавления в формДата
form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Завантаження з локального сховища якщо дани э
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}


// Обробка події відправки форми
form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields');
        return;
    }

    console.log('Submitted Data:', formData);

    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
});
