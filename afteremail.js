const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then(() => {
            Swal.fire({
            title: "Pesan Terkirim!",
            text: "Terimakasih telah Menghubungi saya!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: '#00A9FF',
            });
            contactForm.reset();
        })
        .catch((e) => alert("Error occured"));
});