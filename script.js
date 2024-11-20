document.getElementById('submitBtn').addEventListener('click', function () {
    const message = document.getElementById('message').value.trim();
    if (message) {
        const messageList = document.getElementById('messages');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        messageList.appendChild(newMessage);
        document.getElementById('message').value = '';
    } else {
        alert('Please write a message first!');
    }
});
