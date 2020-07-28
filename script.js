let numApplicants;
let numOfDependants;
let numOfPets;
let i;                  //iterator for all the for loops that want to bitch about it already being declared.
let applicants=[];
let dependants=[];
let pets=[];

// ^^^vvv wrapping the fillElemId() in an anonymous function prevents it from running automatically
addClickElemId("builder", function(){
    numApplicants = document.querySelector("#num_of_applicants").value;
    hideElemId("builder");
    fillElemId("applicant_form", buildIt(numApplicants));
    freezeElemId("num_of_applicants");
    showElemId("applicant_info");
    showElemId("section_1_buttons");
    document.querySelector(`#applicant_0_first_name`).focus();
});                                                                   

addEnterKeyEvent("#num_of_applicants", "#builder");

addEnterKeyEvent("#num_dependants", "#num_dependants_button");

addEnterKeyEvent("#num_pets", "#num_pets_button");

addClickElemId("section_1_submit", function(){
    hideElemId("section_0_container");
    hideElemId("section_1_buttons"); 
    hideElemId('applicant_form');
    showElemId('section_2_container');     
    fillElemId("applicant_list", buildApplicantListAsText(buildApplicantObjects(numApplicants)));
    document.querySelector('#num_dependants').focus();

});

addClickElemId("section_1_back", function() {
    hideElemId("applicant_info");
    showElemId('applicant_form');
    hideElemId("section_1_buttons"); 
    showElemId("builder");
    showElemId("section_0_container"); 
    document.querySelector("#num_of_applicants").disabled = false;
    
});

addClickElemId("num_dependants_button", function() {
    hideElemId("dependant_question_container");
    numOfDependants = document.querySelector("#num_dependants").value;
    
    if (document.querySelector("#num_dependants").value>0) {        
        showElemId('dependant_form_container');        
        fillElemId("dependant_form", buildDependants(numOfDependants));
        document.querySelector(`#dependant_0_name`).focus();
    }else {
        document.querySelector("#dependant_list_submit").click();
    }
});

addClickElemId("dependant_form_back", function() {
    hideElemId("dependant_form_container");
    showElemId("dependant_question_container");
});

addClickElemId("dependant_form_submit", function() {
    fillElemId("dependant_list", buildDependantsList(buildDependantObjects(numOfDependants)));
    hideElemId("dependant_form_container");
    showElemId("dependant_list_container");
});

addClickElemId("dependant_list_back", function() {
    hideElemId("dependant_list_container");
    showElemId("dependant_form_container");
});

addClickElemId("dependant_list_submit", function() {
    showElemId("section_3_container");
    showElemId("pet_question_container");
    hideElemId("section_2_container");
    hideElemId("section_1_container");
    document.querySelector(`#num_pets`).focus();    
});

addClickElemId("num_pets_button", function() {
    numOfpets = document.querySelector("#num_pets").value;
    if (numOfpets==0) {
        document.querySelector("#pet_list_submit").click();
    }else{
    hideElemId("pet_question_container");
    showElemId('pet_form_container');
    
    fillElemId("pet_form", buildpets(numOfpets));
    document.querySelector(`#pet_0_name`).focus();
    }
});

addClickElemId("pet_form_back", function() {
    hideElemId("pet_form_container");
    showElemId("pet_question_container");
});

addClickElemId("pet_form_submit", function() {
    fillElemId("pet_list", buildpetsList(buildpetObjects(numOfpets)));
    hideElemId("pet_form_container");
    showElemId("pet_list_container");
});

addClickElemId("pet_list_back", function() {
    hideElemId("pet_list_container");
    showElemId("pet_form_container");
});

addClickElemId("pet_list_submit", function() {
    hideElemId("section_3_container");
    showElemId("section_4_container");
});

addClickElemId("eviction_question_yes", function() {
    showElemId("eviction_explain_container");
    document.querySelector("#eviction_question_yes").disabled = true;
    document.querySelector("#eviction_question_no").disabled = true;
    document.querySelector("#eviction_explain").focus();
});

addClickElemId("eviction_question_no", function() {
    document.querySelector("#eviction_question_yes").disabled = true;
    document.querySelector("#eviction_question_no").disabled = true;
    showElemId("criminal_question_container");
});

addClickElemId("eviction_explain_submit", function() {
    showElemId("criminal_question_container");
    hideElemId("eviction_explain_submit");
});

addClickElemId("criminal_question_yes", function() {
    showElemId("criminal_explain_container");
    document.querySelector("#criminal_question_yes").disabled = true;
    document.querySelector("#criminal_question_no").disabled = true;
    document.querySelector("#criminal_explain").focus();
});

addClickElemId("criminal_question_no", function() {
    document.querySelector("#criminal_question_yes").disabled = true;
    document.querySelector("#criminal_question_no").disabled = true;
    showElemId("money_question_container");
});

addClickElemId("criminal_explain_submit", function() {
    showElemId("money_question_container");
    hideElemId("criminal_explain_submit");
});

addClickElemId("money_question_no", function() {
    document.querySelector("#money_question_yes").disabled = true;
    document.querySelector("#money_question_no").disabled = true;
    showElemId("money_explain_container");
    document.querySelector("#money_explain").focus();
});

addClickElemId("money_question_yes", function() {
    document.querySelector("#money_question_yes").disabled = true;
    document.querySelector("#money_question_no").disabled = true;
    showElemId("approve_question_container");
});

addClickElemId("money_explain_submit", function() {
    showElemId("approve_question_container");
    hideElemId("money_explain_submit");
});

addClickElemId("approval_submit", function() {
    hideElemId("section_4_container");
    hideElemId("approve_question_container");
    showElemId("thank_you");
});






function addEnterKeyEvent(targetElement, buttonToClick) {
    document.querySelector(targetElement).addEventListener("keyup", function(event) {            
        if (event.keyCode===13){
            document.querySelector(buttonToClick).click();
        }
    })
}

function addClickElemId(targetElement, clickFunction) {                 // shorthand function to apply click event listeners to elements by id
    document.getElementById(targetElement).addEventListener("click", clickFunction);
}

function buildIt(numOfAdults) {                                         //contstructs html form string with the correct number of applicants                                     
    // specific and overloaded function to create the name/income section of the form 
    // depending on how many people the user specifies will be living at the property.    
    let applicantNameFormString;

    for (i=0; i<numOfAdults; i++) {                                        
        if (i==0){ 
            applicantNameFormString = `<div id="Applicant_${i}"><h3>Primary Applicant: </h3>`;      // sets section header for the first applicant as primary
        } else {
            applicantNameFormString = applicantNameFormString + `<div id="Applicant_${i}"><h3>Co-Applicant ${i}: </h3>`;    // numbers the header of additional Co-Applicants.
        }  
        
        /*  VVVVVV
         *  applicantIdForm below is the basic template for each individual applicant form. 
         *  It is a string which is built by the loop function and applied to the innerHTML at the end.
         *  ID and Name attributes are itterated by the for loop above to allow unique useable form elements.
         *  VVVVVV
         */
        let applicantIdForm = `<span class="chunk">                             
            <label for="applicant_${i}_first_name" id="name_label">Name:</label>
            <input id="applicant_${i}_first_name" name="applicant_${i}_first_name" class="applicant_entry applicant_first_name" type="text" placeholder="First" required>
            <input id="applicant_${i}_middle_name" name="applicant_${i}_middle_name" class="applicant_entry applicant_middle_name" type="text" placeholder="Middle" required>
            <input id="applicant_${i}_last_name" name="applicant_${i}_last_name" class="applicant_entry applicant_last_name" type="text" placeholder="Last" required>
        </span>
    
        <span class="chunk">
            <label for="applicant_${i}_other_names">Any other name you may have used:</label>
            <input id="applicant_${i}_other_names" name="applicant_${i}_other_names" type="text" placeholder="(optional)"><br>
            <label for="applicant_${i}_name_pref">What name do you prefer to go by? </label>
            <input id="applicant_${i}_name_pref" name="applicant_${i}_name_pref" type="text" placeholder="(optional)">
        </span>

        <span class="chunk">
            <label for="applicant_${i}_email">E-Mail Address: </label>
            <input id="applicant_${i}_email" name="applicant_${i}_email" type="email"><br>
            <label for="applicant_${i}_phone">Telephone Number: </label>
            <input id="applicant_${i}_phone" class="phone_number" name="applicant_${i}_phone" type="tel"><br>
            <label for="applicant_${i}_current_address">Current Address: </label>
            <input id="applicant_${i}_current_address" class="current_address" name="applicant_${i}_current_address" type="text"><br>
            <label for="applicant_${i}_textOk">Is it OK to text message you? </label>
            <input type="radio" name="applicant_${i}_textOk" value="Yes" checked>Yes</input>
            <input type="radio" name="applicant_${i}_textOk" value="No">No</input><br>
        </span>

        <span class="chunk" id="income_container">
            <label for="applicant_${i}_income_amt" class="income_label">Monthly Income: $</label>
            <input id="applicant_${i}_income_amt" name="applicant_${i}_income_amt" class="applicant_entry applicant_income_amt" type="text" required>
            <label for="applicant_${i}_income_source">Source(s):</label>
            <input id="applicant_${i}_income_source" name="applicant_${i}_income_source" class="applicant_entry applicant_income_source" type="text" required><br>
            <label for="applicant_${i}_employer">Employer:</label>
            <input id="applicant_${i}_employer" name="applicant_${i}_employer" class="applicant_entry applicant_employer" type="text">
            <label for="applicant_${i}_employer_phone">Employer's Phone Number:</label>
            <input id="applicant_${i}_employer_phone" name="applicant_${i}_employer_phone" class="applicant_entry applicant_employer_phone phone_number" type="tel"><br>
        </span>
        
    </div>`; 

    applicantNameFormString = applicantNameFormString + applicantIdForm;       // Appends applicant templates to headers (above) and combines them into one string. 
    }
    return applicantNameFormString;
    
}


function buildpets(numOfpets) {                             //constructs html form string with the correct number of pets
    let petFormString='';

    for (i=0; i<numOfpets; i++) {                                        
        
            petFormString = petFormString + `
                <div id="pet_${i}">
                    <h3>Pet ${i+1}: </h3>
                    <span class="chunk">
                        <label for="pet_${i}_name">Name: </label>
                        <input id="pet_${i}_name" name="pet_${i}_name" type="text">
                        <label for="pet_${i}_age">Age: </label>
                        <input id="pet_${i}_age" class="age" name="pet_${i}_age" type="text">
                        <label for="pet_${i}_type">Type: </label>
                        <input id="pet_${i}_type" class="type" name="pet_${i}_type" type="text">
                    </span>
                </div>
            `;
        }  
        return petFormString;
        
}

function buildpetsList(petObjects) {                        //constructs list string from form above        
    let petListString = '';
    
    for (i=0; i<numOfpets; i++) {                
        petListString = petListString + `<p id="pet_entry_${i}"><b>Pet #${i+1}:</b>${petObjects[i].name}, <b>Age:</b> ${petObjects[i].age}, <b>Type:</b> ${petObjects[i].type}</p>`;
    }
    return petListString;
}

function buildpetObjects(n) {                                     //constructs an array of objects containing pets form info.
    
    for (i=0; i<n; i++) {
        pets[i] = {
            name:           document.querySelector(`#pet_${i}_name`).value,
            age:            document.querySelector(`#pet_${i}_age`).value,
            type:           document.querySelector(`#pet_${i}_type`).value,
        };
    }
    return pets;
}

function buildDependants(numOfDependants) {                             //constructs html form string with the correct number of dependants
    let dependantFormString='';

    for (i=0; i<numOfDependants; i++) {                                        
        
            dependantFormString = dependantFormString + `
                <div id="dependant_${i}">
                    <h3>Dependant ${i+1}: </h3>
                    <span class="chunk">
                        <label for="dependant_${i}_name">Name: </label>
                        <input id="dependant_${i}_name" name="dependant_${i}_name" type="text">
                        <label for="dependant_${i}_age">Age: </label>
                        <input id="dependant_${i}_age" class="age" name="dependant_${i}_age" type="text">
                        <label for="dependant_${i}_relationship">Relationship: </label>
                        <input id="dependant_${i}_relationship" class="relationship" name="dependant_${i}_relationship" type="text">
                    </span><br>
                </div>
            `;
        }  
        return dependantFormString;
        
}

function buildDependantsList(dependantObjects) {                        //constructs list string from form above        
    let dependantListString = '';
    
    for (i=0; i<numOfDependants; i++) {                
        dependantListString = dependantListString + `<p id="dependant_entry_${i}"><b>Dependant #${i+1}:</b>${dependantObjects[i].name}, <b>Age:</b> ${dependantObjects[i].age}, <b>Relationship:</b> ${dependantObjects[i].relationship}<br>`;
    }
    return dependantListString;
}

function buildDependantObjects(n) {                                     //constructs an array of objects containing dependants form info.
    
    for (i=0; i<n; i++) {
        dependants[i] = {
            name:           document.querySelector(`#dependant_${i}_name`).value,
            age:            document.querySelector(`#dependant_${i}_age`).value,
            relationship:   document.querySelector(`#dependant_${i}_relationship`).value,
        };
    }
    return dependants;
}

function buildApplicantObjects(n) {                                     //constructs an array of objects containing applicants form info.
    
    for (i=0; i<n; i++) {
        applicants[i] = {
            nameFirst:      document.querySelector(`#applicant_${i}_first_name`).value,
            nameMiddle:     document.querySelector(`#applicant_${i}_middle_name`).value,
            nameLast:       document.querySelector(`#applicant_${i}_last_name`).value,
            aka:            document.querySelector(`#applicant_${i}_other_names`).value,
            namePrefer:     document.querySelector(`#applicant_${i}_name_pref`).value,
            emailAddress:   document.querySelector(`#applicant_${i}_email`).value,
            phoneNumber:    document.querySelector(`#applicant_${i}_phone`).value,
            currentAddress: document.querySelector(`#applicant_${i}_current_address`).value,
            textOK:         document.querySelector(`input[name=applicant_${i}_textOk]:checked`).value,
            incomeAmt:      document.querySelector(`#applicant_${i}_income_amt`).value,
            incomeSource:   document.querySelector(`#applicant_${i}_income_source`).value,
            employer:       document.querySelector(`#applicant_${i}_employer`).value,
            employerPhone:  document.querySelector(`#applicant_${i}_employer_phone`).value,
            notes:          document.querySelector(`#applicant_${i}_notes`),
        };
    }
    return applicants;
}

function buildApplicantListAsText(applicantList){                       //constructs html text display of applicant info as entered when submited
    let result='<div id="final_applicant_list">';
    let nextApplicant;
    for (i=0; i<applicantList.length; i++){
        if (i==0){
            nextApplicant=`
        
            <h3>Primary Applicant:</h3>
        `;} else {
            nextApplicant =`
            <h4>Co-Applicant ${i}:<h4>
            `;}
        nextApplicant=nextApplicant+`
            <h5>${applicantList[`${i}`].namePrefer}</h5>
            <p><b>Full Name:</b> ${applicantList[`${i}`].nameFirst} ${applicantList[`${i}`].nameMiddle} ${applicantList[`${i}`].nameLast}</p>
            <p><b>AKA:</b> ${applicantList[`${i}`].aka}</p>
            <p><b>Current Address:</b> ${applicantList[`${i}`].currentAddress}</p>
            <p><b>Telephone #:</b> ${applicantList[`${i}`].phoneNumber} <b>OK to text:</b> ${applicantList[`${i}`].textOK}</p>
            <p><b>Employer:</b> ${applicantList[`${i}`].employer} ${applicantList[`${i}`].employerPhone}</p>
        </div>
        `;
        result=result+nextApplicant;
    }
    result=result+`</div>`
    return result;
}

function freezeElemId(targetElement) {                                  //disables a text or number input field and makes it a type="text"
    document.getElementById(targetElement).disabled = true;
    document.getElementById(targetElement).type = "text";
}

function fillElemId(targetElement, input) {                             // writes string data into an html element (by ID)
    document.getElementById(targetElement).innerHTML = input;       // Syntax: fillElemId("example_element_id", string);
}                                                                       // each argument must be in quotes unless it is a string variable 

function hideElemId(targetElement) {                                    // adds class="hidden" to targetElement if it does not already contain class="hidden"
    if (!(document.getElementById(targetElement).classList.contains("hidden"))){
    document.getElementById(targetElement).classList.add("hidden");
    }
}

function showElemId(targetElement) {                                   // removes class="hidden" from targetElement if it currently contains class="hidden"
    if (document.getElementById(targetElement).classList.contains("hidden")){
    document.getElementById(targetElement).classList.remove("hidden");
    }
}