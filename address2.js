/*import { information } from "./address1.js";*/
const details = new information();
function displayStudentDetails( name, email, mobile, landline, website, address) {
    var form = document.getElementById('myform');
    var detailsContainer = document.getElementById('details');
    var studentBox = document.createElement("div");
    studentBox.classList.add('box');
    studentBox.id = 'box' + numberToChange;
    var id1 = 'box' + numberToChange;
    studentBox.innerHTML = `<p id="name">${name}</p>
    <p id="mail">${email}</p>
    <p id="number">${mobile}</p>`;
    numberToChange = numberToChange + 1;
    detailsContainer.appendChild(studentBox);
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('individual');
    contactDetails.innerHTML = `<p id="nameOfUser">${name}</p>
    <p id="emailOfUser">${email}</p>
    <p id="mobile">${mobile}</p>
    <p id="landline">${landline}</p>
    <p id="websiteLink">${website}</p>
    <pre id="addressOfUser">${address}</pre>
    <img src="./edit1.jpg" alt="image" id="editImage">
    <input type="button" id="edit" value="Edit" onclick='editing(${id1})'><br>
    <img src="./delete1.png" alt="image" id="deleteImage">
    <input type="button" id="delete"  value="delete" onclick='details.delete(${id1})'><br>`
    myarr.push(contactDetails);
    /*const formData = {
        fullName: name,
        email: email
       
    };
    saveFormData(formData);*/
    studentBox.addEventListener('click', function () {
        document.getElementById('demo2').style.display = 'block';
        displaydetails(this.id);
    })
};
function displaydetails(id) {
    var myelement = document.getElementById(id);
    var stringId = parseInt(myelement.id.slice(-1));
    document.getElementById("demo2").innerHTML = myarr[stringId - 1].innerHTML;
    document.getElementById('myform').style.display = 'none';
}
function editForm(id1,name,email,mobile,landline,website,address){
    document.getElementById('demo2').style.display = 'none';
    updateForm = 0;
    intergerNumber = parseInt(id1.id.slice(-1));
    var stringId2 = parseInt(id1.id.slice(-1));
    const formContainer = document.getElementById('myform');
    formContainer.style.display = 'block';
    var ele = myarr[stringId2 - 1];
    var nameValue = ele.querySelector('#nameOfUser').innerHTML;
    var emailValue = ele.querySelector('#emailOfUser').innerHTML;
    var mobValue = ele.querySelector('#mobile').innerHTML;
    var landValue = ele.querySelector('#landline').innerHTML;
    var websiteValue = ele.querySelector('#websiteLink').innerHTML;
    var addressValue = ele.querySelector('#addressOfUser').innerHTML;
    const forms = document.getElementById('myform');
    forms.elements.fname.value = nameValue;
    forms.elements.email.value = emailValue;
    forms.elements.land.value = landValue;
    forms.elements.mob.value = mobValue;
    forms.elements.website.value = websiteValue;
    forms.elements.address.value = addressValue;
   /* const formData = {
        fullName:forms.elements.fname.value,
        email: email
       
    };
    editFormdata(formData,stringId2);*/
}
var numberToChange = 1;
var updateForm = 1;
var intergerNumber = 0;
document.getElementById('addForm').addEventListener('click', function () {
    var form = document.getElementById('myform');
    document.getElementById('demo2').style.display = 'none';
    form.reset();
    form.style.display = 'block';
})
document.getElementById('myform').addEventListener('submit',
    function (e) {
        var form = document.getElementById('myform');
        document.getElementById('demo2').style.display = 'none';
        if (updateForm == 0) {
            editingreplace(form);
        }
        else {
            if (form.elements.fname.value != "") {
                var form = document.getElementById('myform');
                const name = form.elements.fname.value;
                const email = form.elements.email.value;
                const mobile = form.elements.mob.value;
                const landline = form.elements.land.value;
                const website = form.elements.website.value;
                const address = form.elements.address.value;
                const myobj = new addressBook(form, name, email, mobile, landline, website, address);
                detailInformation.detailsBox(myobj.name, myobj.email, myobj.mobile, myobj.landline, myobj.website, myobj.address);
                form.reset();
                form.style.display = 'none';
            }
           
        }
    
    })
function editing(id1){
    var form = document.getElementById('myform');
    const detailedit = new information();
    const editobj = new addressBook(form, name, email, mobile, landline, website, address);
    detailedit.update(editobj.name, editobj.email, editobj.mobile, editobj.landline, editobj.website, editobj.address,id1);
    updateForm = 0;
 }
 function editingreplace(f){
    {
        var el = myarr[intergerNumber - 1];
        var detailid = 'box' + (intergerNumber);
        var div = document.querySelector('#' + detailid);
        el.querySelector('#nameOfUser').innerHTML = f.elements.fname.value;
        el.querySelector('#emailOfUser').innerHTML = f.elements.email.value;
        el.querySelector('#mobile').innerHTML = f.elements.mob.value;
        el.querySelector('#landline').innerHTML = f.elements.land.value;
        el.querySelector('#websiteLink').innerHTML = f.elements.website.value;
        el.querySelector('#addressOfUser').innerHTML = f.elements.address.value;
        div.querySelector('#name').innerHTML = f.elements.fname.value;
        div.querySelector('#mail').innerHTML = f.elements.email.value;
        div.querySelector('#number').innerHTML = f.elements.mob.value;
        updateForm = 1;
        f.reset();
        f.style.display = 'none';
        
    }
 }
 function deleteForm(id2) {
    var stringId3 = parseInt(id2.id.slice(-1));
    var detail = 'box' + (stringId3);
    var divs = document.querySelector('#' + detail);
    document.getElementById("demo2").innerHTML = "";
    divs.parentNode.removeChild(divs);
}
function getitems(myarr){
     if(myarr.length!=null){
         return myarr;
     }
}
function getidelement(userinputId){
    userinputId="";
    return document.getElementById(userinputId);
   
}
function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}

function editFormdata(formData,position){
    const data=localStorage.getItem('formData')
    localStorage.setItem('formData', JSON.stringify('replace'));
  
   
}
function validateName() {
    var names = document.getElementsByClassName("name");
    var emailBox = document.getElementById("email").value;
    var validation_status = false;
    for (var i = 0; i < names.length; i++) {
        if (names[i].value == "") {
            document.getElementById("name" + (i + 1)).innerText = "Required";
            document.getElementById('mobileid').innerText = "Required";
        }
        else {
            document.getElementById("name" + (i + 1)).innerText = "*";
            validation_status = true;
        }
    }

    if (emailBox != "") {
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.value.match(mailformat)) {
            document.getElementById("myEmail").innerText = "*";

        }
        else {
            alert("Invalid email address.");
            validation_status = false;
        }

    }
    else {
        document.getElementById("myEmail").innerText = "Required";
        validation_status = false;
    }
    return validation_status;

}
function mobileNumber() {
    var phoneno = /^\d{10}$/;
    if(mob.value==""){
        document.getElementById('mobileid').innerText = "Required";
    }
    if (mob.value.match(phoneno)) {
        document.getElementById('mobileid').innerText = "*";
        return true;
    }
    else {
        document.getElementById('mobileid').innerText = "Required";
        alert("please enter valid 10 digit number");

        return false;
    }
}
function landlineNumber() {
    var phoneno = /^\d{10}$/;

    if (land.value.match(phoneno)) {
        document.getElementById('mobileid').innerText = "*";
        return true;
    }
    else {
        document.getElementById('mobileid').innerText = "Required";
        alert("please enter valid 10 digit number");
        return false;
    }

}
