// AES encryption and decryption functions

// AES encryption
function encrypt() {
  var message = document.getElementById("input").value;
  var key = document.getElementById("key").value;

  if (key.length !== 16) {
    alert("Key must be 16 bytes (128 bits) long.");
    return;
  }

  var encrypted = CryptoJS.AES.encrypt(message, key).toString();
  document.getElementById("encrypted").value = encrypted;
}

// AES decryption
function decrypt() {
  var encrypted = document.getElementById("encrypted").value;
  var key = document.getElementById("key").value;

  if (key.length !== 16) {
    alert("Key must be 16 bytes (128 bits) long.");
    return;
  }

  var decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(
    CryptoJS.enc.Utf8
  );
  document.getElementById("decrypted").value = decrypted;
}
