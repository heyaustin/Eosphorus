
function selectOption(optionIndex) {
    selectedOption = optionIndex;
}

function sendSelection() {
    fetch('/save_selection/', {
        method: 'POST',
        headers: {
            'csrfmiddlewaretoken': CSRF_TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "selectedOption": selectedOption
        })
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function checkAnswers() {
    let allAnswered = true;

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
        window.location.href = '/score/';
    }
}