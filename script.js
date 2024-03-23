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
    const res = [];
    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join('');
}

function numeralValue(roman) {
    res = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }

    let result = roman.split('');

    let ans = 0;
    var i = 0;
    var j = result.length;

    while (j--) {
        let val = 0;
        val = res[result[i]];

        if (!val) {
            return 0;
        } else if (i < result.length - 1 && (result[i] < result[i + 1])) {
            ans = ans - val;
        }
        else {
            ans = ans + val;
        }

        i++;

    }
    return ans;
}

cbtn1.addEventListener('click', () => {
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

})


cbtn2.addEventListener('click', () => {
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