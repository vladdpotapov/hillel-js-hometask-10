const form   = document.querySelector('form[name="mainForm"]');

const inputFirstName = document.getElementById('fName');
const inputSecondName = document.getElementById('sName');
const inputBirthday = document.getElementById('bDay');
const inputAddress = document.getElementById('addr');

const saveButton = document.querySelector('input[name="saveButton"]');
saveButton.addEventListener('click', function() {
        const userFirstName = form.elements.firstName.value;    
        User.Name = userFirstName;

        const userSecondName = form.elements.secondName.value;
        User.Surname = userSecondName;

        const userBirthday = form.elements.birthday.value;
        User.Birthday = userBirthday;

        const userAddress = form.elements.address.value;
        User.Address = userAddress;

        const userGender = getUserGender();
        User.Gender = userGender;

        const userCity = form.elements.city.options[form.elements.city.selectedIndex].text;
        User.City = userCity;

        let languages = form.elements.languages;
        let checkedLanguages = getCheckedItemsFromCheckboxes(languages);
        const languagesString = [];
        for (let i = 0; i < checkedLanguages.length; i++) {
            languagesString.push(languagesMatches[checkedLanguages[i]]);
        }

        User.Languages = languagesString.join(', ');

        if (!inputFirstName.value || !inputSecondName.value || !inputBirthday.value || !inputAddress.value){
            inputFirstName.style.border = '1px solid red';
            inputSecondName.style.border = '1px solid red';
            inputBirthday.style.border = '1px solid red';
            inputAddress.style.border = '1px solid red';
            return false;
        }

        form.remove();
        let formContainer = document.getElementById('form__container');
        let box = document.createElement('div');
        box.setAttribute('class', 'dataResultBox'); 
        formContainer.prepend(box);  
        box.innerHTML = showData(User);
});


