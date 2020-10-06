function form() {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };


    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(item);
            // const object = {};

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            document.querySelector('.status').textContent = message.loading;

            // formData.forEach(function (value, key) {
            //     object[key] = value;

            // });

            function clearInputs() {
                inputs.forEach(item => item.value = '');
            }



            fetch("../telegram.php", {
                method: 'POST',
                body: formData
            }).then(data => {
                statusMessage.textContent = message.success;
            }).catch(() => {
                statusMessage.textContent = message.failure;
            }).finally(() => {
                setTimeout(() => {
                    clearInputs();
                    statusMessage.remove();

                }, 5000);
            });
        });
    });
}
