// const overlay = document.getElementById('overlay');
// const modal = document.getElementById('modal');
// const modalTitle = document.getElementById('modal-title');
// const modalMessage = document.getElementById('modal-message');
// const promptInput = document.getElementById('prompt-input');
// const okBtn = document.getElementById('ok-btn');
// const cancelBtn = document.getElementById('cancel-btn');

// function openModal(title, message, showCancel = false, showPrompt = false, callback = null) {
//   modalTitle.textContent = title;
//   modalMessage.textContent = message;

//   // handle prompt input
//   promptInput.style.display = showPrompt ? 'block' : 'none';
//   if (showPrompt) promptInput.value = '';

//   // handle cancel button
//   cancelBtn.style.display = showCancel ? 'inline-block' : 'none';

//   // show modal
//   overlay.style.display = 'block';
//   modal.style.display = 'block';

//   // button events
//   okBtn.onclick = () => {
//     closeModal();
//     if (callback) {
//       callback(showPrompt ? promptInput.value : true);
//     }
//   };

//   cancelBtn.onclick = () => {
//     closeModal();
//     if (callback) {
//       callback(false);
//     }
//   };
// }

// function closeModal() {
//   overlay.style.display = 'none';
//   modal.style.display = 'none';
// }

// // Wrappers for alert, confirm, prompt
// function showAlert() {
//   openModal('Alert', 'This is a custom alert box!');
// }

// function showConfirm() {
//   openModal('Confirm', 'Are you sure you want to continue?', true, false, function(result) {
//     alert('User clicked: ' + result);
//   });
// }

// function showPrompt() {
//   openModal('Prompt', 'Please enter your name:', true, true, function(result) {
//     if (result !== false) {
//       alert('Hello ' + result + '!');
//     } else {
//       alert('Prompt cancelled');
//     }
//   });
// }

function add(a,b){
  return a+b
}
result= add(45,45)
console.log(result)


function greet(){
  return "Hello Raiyan Bhavnagri"
}
console.log(greet())