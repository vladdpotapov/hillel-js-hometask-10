function getCheckedItemsFromCheckboxes(list) {
    let checkedItems = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
            checkedItems.push(list[i].value);
        }
    }
    return checkedItems;
}

function getUserGender() {
    let checkedGender = form.elements.gender.value;
    let gender = genderMatches[checkedGender];
    return gender;
}

// function getUserLanguages() {
//     let languages = form.elements.languages;
//     let checkedLanguages = getCheckedItemsFromCheckboxes(languages);
//     for (let i = 0; i < checkedLanguages.length; i++) {
//         langs = languagesMatches[checkedLanguages[i]];
//         console.log(langs);
//     }
// }

function showData(obj) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += key + ":" + ' ' + obj[key] + "<hr>";
        }
    }
    return result;
}

// function validate(userInputId) {
//     if (!userInputId.value) {
//         userInputId.style.border = '1px solid red';
//         return false;
//     }
// }
