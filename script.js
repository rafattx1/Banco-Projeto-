
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
      var chatBox = document.getElementById("chat-box");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerText = message;
      chatBox.appendChild(messageElement);
      
      messageInput.value = "";
    }
   }

   function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    return true;
   }
   
   function validatePaymentForm() {
    var cardholderName = document.getElementById("cardholder-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    if (cardholderName.trim() === "" || cardNumber.trim() === "" || expiryDate.trim() === "" || cvv.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    return true;
   }