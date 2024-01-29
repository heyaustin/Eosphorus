
function validateForm() {
    var questions = document.querySelectorAll('.question');
    var allQuestionsAnswered = true;

    for (const question of questions) {
        // 取得目前問題下的四個選項
        var options = [];
        var currentElement = question.nextElementSibling;
        while (currentElement && options.length < 4) {
            if (currentElement.querySelector('input[type="radio"]')) {
                options.push(currentElement.querySelector('input[type="radio"]'));
            }
            currentElement = currentElement.nextElementSibling;
        }

        // 檢查這四個選項中至少有一個是否被選中
        var optionsChecked = options.some(radio => radio.checked);

        if (!optionsChecked) {
            Swal.fire({
                title: "請回答所有問題",
                icon: "error"
            });
            allQuestionsAnswered = false;
            break; // 發現未回答的問題，跳出循環
        }
    }

    return allQuestionsAnswered; // 如果所有問題都回答了，允許表單提交
}
