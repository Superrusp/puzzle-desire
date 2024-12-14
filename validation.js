const FORM_URL = 'https://hooks.zapier.com/hooks/catch/19819704/26o1mfm/';

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    let valid = true;

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';

    if (name.length > 40) {
        document.getElementById('nameError').textContent =
            'Name should not exceed 40 characters.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    const nameRegex = /^[A-Za-zÀ-ÿА-ЯЁа-яёІЇЄҐіїєґáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent =
            'Name should not contain numbers or special characters.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }
    const wordCount = name.trim().split(/\s+/).length;
    if (wordCount > 4) {
        document.getElementById('nameError').textContent =
            'Name should not exceed 4 words.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // const phoneRegex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    // if (!phoneRegex.test(phone)) {
    //     document.getElementById('phoneError').textContent =
    //         'Please enter a valid phone number (e.g., 123-456-7890 or (123) 456-7890).';
    //     document.getElementById('phoneError').style.display = 'block';
    //     valid = false;
    // }

    return valid;
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('message').value = '';
}

document.getElementById("contactForm")
    .addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        if (validateForm()) {
            document.querySelector('.form-success').style.display = 'block';
            resetForm();
            this.style.display = 'none';
            await fetch('https://script.google.com/macros/s/AKfycbyCB3vgF30SKiTmOcSN7aTSweuhb514UaLiuH2hZwo1dw_YVvmg1sielNLjxH_IYxlQ/exec', {
                mode: 'no-cors',
                redirect: "follow",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                method: 'POST',
                body: jsonData
            })
        }
    });
