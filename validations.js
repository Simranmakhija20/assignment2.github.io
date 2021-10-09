var form = document.getElementById("form1");
form.addEventListener('submit', function(e) {
    e.preventDefault();


    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let Tagline = document.getElementById("Tagline").value;
    let size = document.getElementById("size").value;
    let quantity = document.getElementById("quantity").value;
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let letters = /^[A-Za-z]+$/;
    if(name === "" )
    {
        alert("Name should be filled");
        return;
    }
    else if(!(name.match(letters)))
    {
        alert("Please enter valid name");
        return;
    }
    
    if(phone.toString().length < 10)
    {
        alert("Phone number should be of 10 digits");
        return;
    }         
    else if(phone.toString().length > 10)
    {
        alert("Phone number cannot be more than 10 digits");
        return;
    }
                  
    if (email === "") {
        alert("Enter email");
        return;
    }

    if(quantity===0 || quantity < 0){
        alert("Quantity cannot be zero or negative");
        return;
    }
    if (pincode === "") {
        alert("Enter pincode");
        return;
    }
    else if(pincode === 0 || pincode < 0){
        alert("Pincode cannot be zero or negative");
        return;
    }
    receipt = `Thankyou!.. \nYour Order has placed Successfully \nYour RECEIPT : \nName:  ${name} \nPhone no : ${phone} \nEmail : ${email} \nAddress : ${address} \nPin Code : ${pincode}  \nTagline : ${Tagline} \nSize : ${size} \nQuantity : ${quantity} \nReceipt issued on date : ${date}`;
    alert(receipt);

});
