
let newArray2 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', "\\", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '&#9668', '&#9660', '&#9658']
let newArray3 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", "\\", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '&#9668', '&#9660', '&#9658']

// document.addEventListener('keydown', (value) => {
//     keyArray.push(value.code)
//     console.log(keyArray)
// })


const div = document.createElement('div');
const body = document.querySelector('body');
const textZone = document.createElement('div');
const inputText = document.createElement('textarea');
const keyborde = document.createElement('div');
let span = document.createElement('span')
let textSite = document.createElement('p')

div.classList.add('container');
body.appendChild(div);

textZone.classList.add('textZone');
inputText.classList.add('inputText');
keyborde.classList.add('keyborde');
textSite.classList.add('textSite')
div.appendChild(textZone);

textZone.appendChild(inputText)
div.appendChild(textSite)
div.appendChild(keyborde);
inputText.type = "text";
textSite.innerHTML = "Перекоючение языка Shift+Alt"


function init() {
    let out = '';
    for (let i = 0; i < newArray3.length; i++) {
        if (i == 13) {
            out += '<div class="keyBackspace" data="' + newArray3[i] + '" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 14) {
            out += '<div class="keyTab" data="Tab">' + newArray3[i] + '</div>'
        }
        else if (i == 27) {
            out += '<div class="delKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 28) {
            out += '<div class="capsKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 41) {
            out += '<div class="enterKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 42) {
            out += '<div class="shiftKeyleft" >' + newArray3[i] + '</div>'
        }

        else if (i == 53) {
            out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
        }
        else if (i == 54) {
            out += '<div class="shiftKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 55 || i == 60) {
            out += '<div class="ctrlKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 56) {
            out += '<div class="keyWin" >' + newArray3[i] + '</div>'
        }
        else if (i == 57 || i == 59) {
            out += '<div class="keyAlt" >' + newArray3[i] + '</div>'
        }
        else if (i == 58) {
            out += '<div class="spaceKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 61) {
            out += '<div class="keyLeft" >' + newArray3[i] + '</div>'
        }
        else if (i == 62) {
            out += '<div class="keyDown" >' + newArray3[i] + '</div>'
        }
        else if (i == 63) {
            out += '<div class="keyRight" >' + newArray3[i] + '</div>'
        }
        else {
            out += '<div class="keys" data="' + newArray3[i] + '" >' + newArray3[i] + '</div>'
        }

    }
    document.querySelector('.keyborde').innerHTML = out
}
init()

function shiftBtn() {
    if (event.key == "Shift") {
        out = " "
        for (let i = 0; i < newArray2.length; i++) {
            if (i == 13) {
                out += '<div class="keyBackspace" data="' + newArray2[i] + '" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 14) {
                out += '<div class="keyTab" data="Tab">' + newArray3[i] + '</div>'
            }
            else if (i == 27) {
                out += '<div class="delKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 28) {
                out += '<div class="capsKey" >' + newArray3[i] + '</div>'
            }
            else if (i == 41) {
                out += '<div class="enterKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 42) {
                out += '<div class="shiftKeyleft" >' + newArray3[i] + '</div>'
            }

            else if (i == 53) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else if (i == 54) {
                out += '<div class="shiftKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 55 || i == 60) {
                out += '<div class="ctrlKey" >' + newArray3[i] + '</div>'
            }
            else if (i == 56 || i == 57 || i == 59) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else if (i == 58) {
                out += '<div class="spaceKey" >' + newArray3[i] + '</div>'
            }
            else if (i >= 61) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else {
                out += '<div class="keys" data="' + newArray2[i] + '" >' + newArray3[i].toLocaleUpperCase() + '</div>'
            }
        }
        document.querySelector('.keyborde').innerHTML = out
    }
}
function capsBtn() {
    if (event.key == "CapsLock") {
        out = " "
        for (let i = 0; i < newArray2.length; i++) {
            if (i == 13) {
                out += '<div class="keyBackspace" data="' + newArray2[i] + '" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 14) {
                out += '<div class="keyTab" data="Tab">' + newArray3[i] + '</div>'
            }
            else if (i == 27) {
                out += '<div class="delKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 28) {
                out += '<div class="capsKey" >' + newArray3[i] + '</div>'
            }
            else if (i == 41) {
                out += '<div class="enterKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 42) {
                out += '<div class="shiftKeyleft" >' + newArray3[i] + '</div>'
            }

            else if (i == 53) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else if (i == 54) {
                out += '<div class="shiftKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
            }
            else if (i == 55 || i == 60) {
                out += '<div class="ctrlKey" >' + newArray3[i] + '</div>'
            }
            else if (i == 56 || i == 57 || i == 59) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else if (i == 58) {
                out += '<div class="spaceKey" >' + newArray3[i] + '</div>'
            }
            else if (i >= 61) {
                out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
            }
            else {
                out += '<div class="keys" data="' + newArray2[i] + '" >' + newArray3[i].toLocaleUpperCase() + '</div>'
            }
        }
        document.querySelector('.keyborde').innerHTML = out
    }
}

document.addEventListener('keydown', capsBtn)
document.addEventListener('keydown', shiftBtn)
document.addEventListener('keyup', init)
document.addEventListener('keydown', (event) => {
    if (event.key == "Tab") {
        document.querySelector('.keyTab').classList.add('active');
    }
    else if (event.key == "Backspace") {
        document.querySelector('.keyBackspace').classList.add('active');
    }
    else if (event.key === "Delete") {
        document.querySelector('.delKey').classList.add('active');
    }
    else if (event.key === "CapsLock") {
        document.querySelector('.capsKey').classList.add('active');
    }
    else if (event.key === "Enter") {
        document.querySelector('.enterKey').classList.add('active');
    }
    else if (event.key === "Shift") {
        document.querySelector('.shiftKeyleft').classList.add('active');
    }
    else if (event.key === "Shift") {
        document.querySelectorAll('.shiftKey').classList.add('active');
    }
    else if (event.key === "ArrowUp") {
        document.querySelector('.keyArrow').classList.add('active');
    }
    else if (event.key === "ArrowLeft") {
        document.querySelector('.keyLeft').classList.add('active');
    }
    else if (event.key === "ArrowDown") {
        document.querySelector('.keyDown').classList.add('active');
    }
    else if (event.key === "ArrowRight") {
        document.querySelector('.keyRight').classList.add('active');
    }
    else if (event.key === "Control") {
        document.querySelector('.ctrlKey').classList.add('active');
    }
    else if (event.key === "Alt") {
        document.querySelector('.keyAlt').classList.add('active');
    }
    else if (event.key === "Meta") {
        document.querySelector('.keyWin').classList.add('active');
    }
    else if (event.key === " ") {
        document.querySelector('.spaceKey').classList.add('active');
    }
    else {
        document.querySelector('.keyborde .keys[data="' + event.key + '"]').classList.add('active');
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == "Tab") {
        document.querySelector('.keyTab').classList.remove('active');
    }
    else if (event.key == "Backspace") {
        document.querySelector('.keyBackspace').classList.remove('active');
    }
    else if (event.key === "Delete") {
        document.querySelector('.delKey').classList.remove('active');
    }
    else if (event.key === "CapsLock") {
        document.querySelector('.capsKey').classList.remove('active');
    }
    else if (event.key === "Enter") {
        document.querySelector('.enterKey').classList.remove('active');
    }
    else if (event.key === "Shift") {
        document.querySelector('.shiftKeyleft').classList.remove('active');
    }
    else if (event.key === "Shift") {
        document.querySelectorAll('.shiftKey').classList.remove('active');
    }
    else if (event.key === "ArrowUp") {
        document.querySelector('.keyArrow').classList.remove('active');
    }
    else if (event.key === "ArrowLeft") {
        document.querySelector('.keyLeft').classList.remove('active');
    }
    else if (event.key === "ArrowDown") {
        document.querySelector('.keyDown').classList.remove('active');
    }
    else if (event.key === "ArrowRight") {
        document.querySelector('.keyRight').classList.remove('active');
    }
    else if (event.key === "Control") {
        document.querySelector('.ctrlKey').classList.remove('active');
    }
    else if (event.key === "Alt") {
        document.querySelector('.keyAlt').classList.remove('active');
    }
    else if (event.key === "Meta") {
        document.querySelector('.keyWin').classList.remove('active');
    }
    else if (event.key === " ") {
        document.querySelector('.spaceKey').classList.remove('active');
    }
    else {
        document.querySelector('.keyborde .keys[data="' + event.key + '"]').classList.remove('active');
    }
})


document.querySelectorAll('.keys').forEach(
    each => {
        each.addEventListener('click', function () {
            document.querySelector('.keyborde .keys[data="' + String(each.textContent) + '"]').classList.toggle('active')
            inputText.innerHTML += String(each.textContent);
            setTimeout(function () { document.querySelector('.keyborde .keys[data="' + each.textContent + '"]').classList.remove('active') }, 200)
        })
    })

let space = document.querySelector('.spaceKey');
space.addEventListener('click', function () {
    inputText.innerHTML += '&nbsp;'
});

function changeLang(func, ...codes) {
    let change = new Set();

    document.addEventListener('keydown', function (event) {
        change.add(event.code);

        for (let code of codes) {
            if (!change.has(code)) {
                return;
            }
        }
        change.clear();
        func();
    });

    document.addEventListener('keyup', function (event) {
        change.delete(event.code);
    });

}

changeLang(
    () => initEng(),
    "ShiftLeft",
    "AltLeft",
);


function initEng() {
    let out = '';
    for (let i = 0; i < newArray3.length; i++) {
        if (i == 13) {
            out += '<div class="keyBackspace" data="' + newArray3[i] + '" >' + newArray2[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 14) {
            out += '<div class="keyTab" data="Tab">' + newArray3[i] + '</div>'
        }
        else if (i == 27) {
            out += '<div class="delKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 28) {
            out += '<div class="capsKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 41) {
            out += '<div class="enterKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 42) {
            out += '<div class="shiftKeyleft" >' + newArray3[i] + '</div>'
        }
        else if (i == 53) {
            out += '<div class="keyArrow" >' + newArray3[i] + '</div>'
        }
        else if (i == 54) {
            out += '<div class="shiftKey" >' + newArray3[i] + '</div>' + '<div class="clearfix" ></div>';
        }
        else if (i == 55 || i == 60) {
            out += '<div class="ctrlKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 56) {
            out += '<div class="keyWin" >' + newArray3[i] + '</div>'
        }
        else if (i == 57 || i == 59) {
            out += '<div class="keyAlt" >' + newArray3[i] + '</div>'
        }
        else if (i == 58) {
            out += '<div class="spaceKey" >' + newArray3[i] + '</div>'
        }
        else if (i == 61) {
            out += '<div class="keyLeft" >' + newArray3[i] + '</div>'
        }
        else if (i == 62) {
            out += '<div class="keyDown" >' + newArray3[i] + '</div>'
        }
        else if (i == 63) {
            out += '<div class="keyRight" >' + newArray3[i] + '</div>'
        }
        else {
            out += '<div class="keys" data="' + newArray2[i] + '" >' + newArray2[i] + '</div>'
        }

    }
    document.querySelector('.keyborde').innerHTML = out
}