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

        // const userLanguages = getUserLanguages();
        // User.Languages = userLanguages;
        let languages = form.elements.languages;
        let checkedLanguages = getCheckedItemsFromCheckboxes(languages);
        for (let i = 0; i < checkedLanguages.length; i++) {
            User.Languages = languagesMatches[checkedLanguages[i]];
            console.log(User.Languages);
        }

        if (!inputFirstName.value){
            inputFirstName.style.border = '1px solid red';
            return false;
        } else if (!inputSecondName.value){
            inputSecondName.style.border = '1px solid red';
            return false;
        } else if (!inputBirthday.value){
            inputBirthday.style.border = '1px solid red';
            return false;
        } else if (!inputAddress.value){
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

// saveButton.addEventListener('click', function() {
//     form.remove();

//     let formContainer = document.getElementById('form__container');
//     let box = document.createElement('div');
//     box.setAttribute('class', 'dataResultBox'); 
//     formContainer.prepend(box);  
//     box.innerHTML = showData(User);

// });

