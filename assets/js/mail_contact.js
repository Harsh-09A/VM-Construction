(function () {
  //   emailjs.init("to9PlFrMMimgruuH0");
  emailjs.init("BnRoAjGd5ec2E2VQn");
})();

// Get IP Address
async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org");
    const ip = await response.text();
    console.log(`IP: ${ip}`);
    return ip;
  } catch (error) {
    console.log(error);
    return null; // or throw error if you want to handle it differently
  }
}

// Form Submit
const handleFormSubmit = async (formId, nameField, phoneField, emailField) => {
  const templateParams = {
    user_name: document.getElementById(nameField).value,
    contact_number: document.getElementById(phoneField).value,
    user_email: document.getElementById(emailField).value,
    ip_address: await getIpAddress(),
    website_url: window.location.href,
    to_email: "harsh.autowebbed@gmail.com",
    // to_email: "adeehomesindia00@gmail.com",
    company_name: "VM Construction ",
  };

  // Send Form
  emailjs.send("contact_service", "contact_form", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // alert("Message Sent Final");
      document.getElementById(formId).reset();
      if (response.status === 200) {
        callAlert(
          "Thank You, Your Form is Submitted.<br/>  We will contact you shortly",
          10000
        );
        // window.location.href = "thank-you.php";
      }
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Message Not Sent");
    }
  );
};

window.onload = function () {
  document
    .getElementById("contact-page-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-page-form",
        "user_name",
        "user_phone",
        "user_email"
      );
    });
};

function callAlert(msg) {
  window.alert(msg, 10000);
}
