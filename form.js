
const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const phraseSelect = document.querySelector('#phrase')

// form.addEventListener('submit', function(e) {
//  alert('Submitted the form');
//  console.log(`cc`, creditCardInput.value);
//  console.log(`terms`, termsCheckbox.checked);
// // checked is a better option than value
//  console.log(`phrase`, phraseSelect.value);
//  e.preventDefault();
// });

//  Lesson 161
const formData = {};
for(let input of [creditCardInput, termsCheckbox, phraseSelect]) {
    input.addEventListener('change', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
};

// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC Changed!', e);
//     formData['cc'] = e.target.value;
// });

// phraseSelect.addEventListener('input', (e) => {
//     console.log('Phrase Changed', e);
//     formData['phrase'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('Checkbox', e);
//     formData['agreeToTerms'] = e.target.checked;
// });

