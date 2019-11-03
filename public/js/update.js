function populateFields(elem){
    console.log(elem.value)
    if(elem.value == "new")
        document.getElementById('textfield1').value = "New";
    else
        document.getElementById('textfield1').value = "Popular";
}