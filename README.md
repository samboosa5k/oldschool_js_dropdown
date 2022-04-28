### THIS IS WHATEVER YOUR ACCOUNT ID IS

```
const ACCOUNT_ID = "abc123";
```

### THIS IS THE FETCH RESPONSE

```lang-js
const fetchResponse = [
  { id: "option1", name: "option 1", value: 1 },
  { id: "option2", name: "option 2", value: 2 },
  { id: "option3", name: "option 3", value: null },
];
```

### THIS IS THE CALLBACK FUNCTION

```lang-js
const callbackFunction = (value, accountID) => {
  if (typeof value === "number") {
    console.log(`I am addind ${value} to yout bank account ${accountID}`);
  } else {
    console.log("The provided value is not a number");
  }
};
```

### THIS GENERATES THE OPTIONS AND ATTACHES TO THE `<SELECT>`

```lang-js
const optionList = (callback, parentID, accountID) =>
  fetchResponse.map((sqlObject, i) => {
    const dropdownOption = document.createElement("option");
    const dropdownLabel = document.createTextNode(sqlObject.name);
    dropdownOption.setAttribute("id", sqlObject.id);

    
    // this is where the click listener is added to the <option>
    // and triggers the callback
    
    dropdownOption.addEventListener("click", () =>
      callback(sqlObject.value, accountID)
    );
    dropdownOption.appendChild(dropdownLabel);

    document.querySelector(parentID).appendChild(dropdownOption);
  });
```
