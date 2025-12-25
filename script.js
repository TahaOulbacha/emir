let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
const phone = "212663028837";
document.getElementById("basic-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%20I%20am%20interested%20in%20the%20Basic%20plan!`,
    "_blank"
  );
};

document.getElementById("premium-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%I%20am%20interested%20in%20the%20Premium%20plan!`,
    "_blank"
  );
};

document.getElementById("ultra-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%20I%20am%20interested%20in%20the%20Ultra%20plan!`,
    "_blank"
  );
};
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // empêche la page de refresh

    emailjs.sendForm("service_tyf34fi", "template_22acoeo", this).then(
      () => {
        alert("Message sent successfully!");
      },
      (err) => {
        alert("Error sending message.");
        console.log(err);
      }
    );
  });
