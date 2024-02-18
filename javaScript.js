function formvelidate() {
    var firstName = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;

    var Password = document.getElementById("pass").value;
    var Cpassword = document.getElementById("cpass").value;
    var Add = document.getElementById("add").value;





    if (firstName == "") {
        document.getElementById("fname").innerHTML = "** Please fill the fields";
        return false;
    }
    else {
        document.getElementById("fname").innerHTML = " ";
    }

    if (!isNaN(firstName)) {
        document.getElementById("fname").innerHTML = "** Name must be character";
        return false;
    }
    else {
        document.getElementById("fname").innerHTML = " ";
    }



    if (firstName.length <= 2 || firstName.length >= 20) {
        document.getElementById("fname").innerHTML = "** Name character must be 20 latter";
        return false;
    }
    else {
        document.getElementById("fname").innerHTML = " ";
    }









    if (lastname == "") {
        document.getElementById("lname").innerHTML = "** Please fill the fields";
        return false;
    }

    if (!isNaN(lastname)) {
        document.getElementById("lname").innerHTML = "** Name must be character";
        return false;
    }

    if (lastname.length <= 2 || lastname.length >= 20) {
        document.getElementById("lname").innerHTML = "** Name character must be 20 latter";
        return false;
    }








    var x = document.getElementById("email").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");

    if (x == "") {
        document.getElementById("emails").innerHTML = "** Please enter the email";
        return false;
    }

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        document.getElementById("emails").innerHTML = "Please enter valid email";
        return false;

    }






    if (Password == "") {
        document.getElementById("passdata").innerHTML = "** Please enter password";
        return false;
    }

    if (Password.length < 5 || Password.length > 20) {
        document.getElementById("passdata").innerHTML = "** Please enter valid  password";
        return false;
    }







    if (Cpassword == "") {
        document.getElementById("cpassdata").innerHTML = "** Please enter address";
        return false;
    }

    if (Password != Cpassword) {
        document.getElementById("cpassdata").innerHTML = "** No match password";
        return false;
    }




    if (Add == "") {
        document.getElementById("addres").innerHTML = "** Please enter address";
        return false;
    }



}

