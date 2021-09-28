const selectedAll = document.querySelectorAll(".selected");

window.onload = addChild() //Page
window.onload = clickSelector(selectedAll)
window.onload = reset(selectedAll)

let array = [];

function eventStart(select) {
    select.forEach((selected) => {
        const optionsContainer = selected.previousElementSibling;

        const optionsList = optionsContainer.querySelectorAll(".option");

        selected.addEventListener("click", () => {
            if (optionsContainer.classList.contains("active")) {
                optionsContainer.classList.remove("active");
            } else {
                let currentActive = document.querySelector(".options-container.active");

                if (currentActive) {
                    currentActive.classList.remove("active");
                }

                optionsContainer.classList.add("active");
            }
        });

        optionsList.forEach((o) => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                selected.setAttribute('data-value',selected.innerHTML)
                optionsContainer.classList.remove("active");
            });
        });
    });
}

function clickSelector(selected) {
    document.getElementById('clickMe').addEventListener('click', () => {
        selected.forEach(select => {
            if (select.dataset.value) {
                array.push(select.dataset.value)
            }
        })
        console.log(array)
        array = [];
    })
}

function reset(selector) {
//Add button to reset value
    document.getElementById('reset').addEventListener('click', () => {
        selector.forEach(select => {
            select.innerText = 'Select...'
            select.setAttribute('data-value', "");
        })
        array = [];
    })
}

function addChild() {
    document.getElementById('add').addEventListener('click', () => {
        const div = document.querySelector('.container')
        let child = document.getElementById("child")
        const cloneChild = child.cloneNode(true);
        const allSelectors = cloneChild.querySelectorAll('.selected')
        eventStart(allSelectors)
        reset(allSelectors)
        clickSelector(allSelectors)
        document.querySelector(".container").appendChild(cloneChild);
    })
}

document.addEventListener('DOMContentLoaded', eventStart(selectedAll))

