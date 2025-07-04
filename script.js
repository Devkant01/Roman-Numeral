const ip = document.querySelector('#number');
const op = document.querySelector('#output');
const cbtn1 = document.querySelector('#convert-btn');
const cbtn2 = document.querySelector('#convert-btn2');

function romanValue(num) {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    let res = "";
    
    for (let [symbol, value] of ref) {
        const count = Math.floor(num / value);
        if (count > 0) {
            res += symbol.repeat(count);
            num -= value * count;
        }
        if (num === 0) break;
    }
    
    return res;
}


function numeralValue(roman) {
    const ref = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    let ans = 0;
    let n = roman.length;

    for (let i = 0; i < n; i++) {
        let curr = ref[roman[i]];
        let next = ref[roman[i + 1]];

        if (!curr) {
            return 0;  // invalid character
        }

        // if next exists and is bigger, it means subtract
        if (next && curr < next) {
            ans -= curr;
        } else {
            ans += curr;
        }
    }

    return ans;
}



function cbtn1Action() {
    if (ip.value == '') {
        op.innerHTML = `<p class='error'>Please enter a number</p>`;
        setTimeout(() => {
            op.innerHTML = '';
        }, 5000);
    }
    else if (isNaN(ip.value)) {
        op.innerHTML = `<p class='error'>Please enter a valid number</p>`;
    }
    else if (ip.value <= 0) {
        op.innerHTML = `<p class='error'>Please enter a number greater than or equal to 1.</p>`;
    }
    else if (ip.value >= 4000) {
        op.innerHTML = `<p class='error'>Please enter a number less than or equal to 3999</p>`;
    }
    else {
        op.innerHTML = `<p class='accepted'>${romanValue(ip.value)}</p>`;
    }
}

cbtn1.addEventListener('click', () => {
    cbtn1Action()

})

ip.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        cbtn1Action();
    }
})

function cbtn2Action() {
    if (ip.value == '') {
        op.innerHTML = `<p class='error'>Please enter a String</p>`;
        setTimeout(() => {
            op.innerHTML = '';
        }, 5000);
    }
    else {
        let ans = numeralValue(ip.value.toUpperCase());
        if (ans === 0) {
            op.innerHTML = `<p class='error'>Please enter a Valid String</p>`;
        }
        else {
            op.innerHTML = `<p class='accepted'>${ans}</p>`;
        }
    }
}

cbtn2.addEventListener('click', () => {
    cbtn2Action();
})

const placeholderLines = [
    'Enter a positive number',
    'Enter a valid Roman numeral'
];

let currentLineIndex = 0;
const input = document.querySelector('input[type="text"]');

setInterval(() => {
    input.placeholder = placeholderLines[currentLineIndex];
    currentLineIndex = (currentLineIndex + 1) % placeholderLines.length;
}, 1000);



// numeralValue by github Copilot
// function numeralValue(roman) {
//     const ref = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;
//     let prevValue = 0;

//     for (let i = roman.length - 1; i >= 0; i--) {
//         const currentChar = roman[i].toUpperCase();
//         const currentValue = ref[currentChar];

//         if (!currentValue) {
//             return false;
//         }

//         if (currentValue >= prevValue) {
//             result += currentValue;
//         } else {
//             result -= currentValue;
//         }

//         prevValue = currentValue;
//     }

//     return result;
// }
