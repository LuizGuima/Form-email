function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "luizinhoomeloo@gmail.com",
        Password : "zinhonogoogle",
        To : 'luizgmeloneto@gmail.com',
        From : document.getElementById("email").value,
        Subject : "oiee",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " +document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}