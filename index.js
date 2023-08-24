document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".send");
    const footerFieldset = document.querySelector(".footer_field");
    let isPopulated = false;

    sendButton.addEventListener("click", function () {
        if (!isPopulated) {
            const inputDivs = document.querySelectorAll(".input_txt");

            inputDivs.forEach(function (inputDiv) {
                const inputValue = inputDiv.nextElementSibling.value;
                const inputLabel = inputDiv.textContent.trim();

                const newParagraph = document.createElement("p");
                newParagraph.textContent = `${inputLabel} : ${inputValue}`;

                footerFieldset.appendChild(newParagraph);
            });

            footerFieldset.classList.add("pristine");
            isPopulated = true;
        }
    });
});