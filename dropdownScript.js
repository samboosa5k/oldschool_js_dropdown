//THIS IS WHATEVER YOUR ACCOUNT ID IS
const ACCOUNT_ID = "abc123";

//THIS IS THE FETCH RESPONSE
const fetchResponse = [
  { id: "option1", name: "option 1", value: 1 },
  { id: "option2", name: "option 2", value: 2 },
  { id: "option3", name: "option 3", value: null },
];

//THIS IS THE CALLBACK FUNCTION
const callbackFunction = (value, accountID) => {
  if (typeof value === "number") {
    console.log(`I am addind ${value} to yout bank account ${accountID}`);
  } else {
    console.log("The provided value is not a number");
  }
};

/**
 * 
 * @param {callbackFunction} callback - The callback function to be called when the <option> is selected
 * @param {string} parentID - the id of the <selector> wrapper
 * @param {string} accountID - the id of the account to be updated
 * 
 * 
 * @todo - change the optionList function to accept an object instead of separate arguments
 * 
 * 
 * @returns {void[]} = it just attaches creates the dropdown
 */
const optionList = (callback, parentID, accountID) =>
  fetchResponse.map((sqlObject, i) => {
    const dropdownOption = document.createElement("option");
    const dropdownLabel = document.createTextNode(sqlObject.name);
    dropdownOption.setAttribute("id", sqlObject.id);

    // THIS IS WHERE YOU ADD THE CLICK LISTENER TO RETURN THE CALLBACK & PARAMETERS
    dropdownOption.addEventListener("click", () =>
      callback(sqlObject.value, accountID)
    );
    dropdownOption.appendChild(dropdownLabel);

    document.querySelector(parentID).appendChild(dropdownOption);
  });
