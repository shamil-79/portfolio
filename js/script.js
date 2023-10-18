let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


// window.onscroll = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

function sendmail(){
    var params = {
        name: document.getElementById("inputname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("area").value,
        mobile: document.getElementById("inputnumber").value,
        emailsub: document.getElementById("emailsub").value
      };

      const serviceID="service_jld24hd";
      const templateID="template_oqp7gtl";
      emailjs.send(serviceID,templateID,params).then(
        res=>
        {
            document.getElementById("inputname").value="";
            document.getElementById("email").value="";
            document.getElementById("inputnumber").value="";
            document.getElementById("emailsub").value="";
            document.getElementById("area").value="";
            alert("Email send successfully");
        }
       
      ).catch(err=>console.log(err));


}