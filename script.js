addClickElemId("swaper", function() {fillElemId("unit_address", document.getElementById("new_text").value)});        
addClickElemId("builder", buildIt);

function addClickElemId(targetElement, clickFunction) {                     // shorthand function to apply click event listeners to elements by id
    document.getElementById(targetElement).addEventListener("click", clickFunction);
}

/*function swapIt() {                                                         //  appends text onto the end of the main header.
    fillElemId("unit_address", document.getElementById("new_text").value);
}
*/
function buildIt() {                                                        // specific and overloaded function to create the name/income section of the form 
    const theNumber=document.getElementById("num_of_applicants").value;     // depending on how many people the user specifies will be living at the property.    
    let applicantNameFormString;

    for (let i=0; i<theNumber; i++) {                                        
        if (i==0){ 
            applicantNameFormString = `<div id="Applicant_${i}"><h3>Primary Applicant: </h3>`;      // sets section header for the first applicant as primary
        } else {
            applicantNameFormString = applicantNameFormString + `<div id="Applicant_${i}"><h3>Co-Applicant ${i}: </h3>`;    // numbers the header of additional Co-Applicants.
        }  
        
        /*  
         *  applicantIdForm below is the basic template for each individual applicant form. 
         *  It is a string which is built by the loop function and applied to the innerHTML at the end.
         *  ID and Name attributes are itterated by the for loop above to allow unique useable form elements.
         *  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
         */
        let applicantIdForm = `<span class="chunk">                             
            <label for="applicant_${i}_first_name" id="name_label">Name:</label>
            <input id="applicant_${i}_first_name" name="applicant_${i}_first_name" class="applicant_entry applicant_first_name" type="text" placeholder="First" required>
            <input id="applicant_${i}_middle_name" name="applicant_${i}_middle_name" class="applicant_entry applicant_middle_name" type="text" placeholder="Middle" required>
            <input id="applicant_${i}_last_name" name="applicant_${i}_last_name" class="applicant_entry applicant_last_name" type="text" placeholder="Last" required>
        </span>
    
        <span class="chunk">
            <label for="prev_${i}_names">Any other name you may have used:</label>
            <input id="prev_${i}_names" name="prev_${i}_names" type="text" placeholder="(optional)"><br>
            <label for="prev_${i}_name_pref">What name do you prefer to go by? </label>
            <input id="prev_${i}_name_pref" name="prev_${i}_name_pref" type="text" placeholder="(optional)">
        </span>

        <span class="chunk">
            <label for="prev_${i}_email">E-Mail Address: </label>
            <input id="prev_${i}_email" name="prev_${i}_email" type="email"><br>
            <label for="appplicant_${i}_phone">Telephone Number: </label>
            <input id="appplicant_${i}_phone" class="phone_number" name="appplicant_${i}_phone" type="tel"><br>
            <label for="appplicant_${i}_current_address">Current Address: </label>
            <input id="appplicant_${i}_current_address" class="current_address" name="appplicant_${i}_current_address" type="text"><br>
            <label for="text_${i}_permission">Is it OK to text message you? </label>
            <input type="radio" name="text_${i}_permission" value="Y">Yes</input>
            <input type="radio" name="text_${i}_permission" value="N">No</input><br>
        </span>

        <span class="chunk" id="income_container">
            <label for="applicant_${i}_income_amt" class="income_label">Income: $</label>
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


    fillElemId("applicant_info", applicantNameFormString);                  // The above for-loop is complete and this fills the resulting string into the div.
                                                                            // TODO this should be split between a few functions so this function call can use 
                                                                            // a function call as the second argument.
    document.getElementById("num_of_applicants").innerHTML=`${theNumber}`;
    document.getElementById("builder").style.display="none";
    document.getElementById("section_1_buttons").style.display="block";
    
    
}

function fillElemId(targetElement, input) {                         // writes string data into an html element (by ID)
    document.getElementById(targetElement).innerHTML = input;       // Syntax: fillElemId("example_element_id", string);
}                                                                   // each argument must be in quotes unless it is a string variable 
