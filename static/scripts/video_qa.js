
function selectOption(optionIndex) {
    selectedOption = optionIndex;
}

function sendSelection() {
    fetch('/save_selection/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': CSRF_TOKEN,
            // https://stackoverflow.com/questions/43255819/why-do-i-get-a-csrf-token-missing-or-incorrect-error
            // the HEADER key should be X-CSRFToken as for Django 2.1, links goes here https://docs.djangoproject.com/en/2.1/ref/csrf/
        },
        credentials: "same-origin",
        body: JSON.stringify({ selectedOption: selectedOption })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}


function checkAnswers() {
    sendSelection();
    let allAnswered = true;

    if (typeof choose === 'string' || choose instanceof String) {
        choose = JSON.parse(choose)
    }
    choose[questionNumber] = selectedOption;

    for (let i = 0; i < choose.length; i++) {
        if (choose[i] === -1) {
            allAnswered = false;
            Swal.fire({
                title: "第" + String(i + 1) + "題未作答",
                icon: "error"
            });
            break;
        }
    }

    if (allAnswered) {
        Swal.fire({
            title: "送出成功",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/video_result';
            }
        });
    }
}
