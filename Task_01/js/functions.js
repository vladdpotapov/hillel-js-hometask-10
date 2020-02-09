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

function showData(obj) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += key + ":" + ' ' + obj[key] + "<hr>";
        }
    }
    return result;
}

