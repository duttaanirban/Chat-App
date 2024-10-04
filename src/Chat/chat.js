// document.addEventListener("DOMContentLoaded", function() {
    const contactItems = document.querySelectorAll('.contact-item');
    const chatWindow = document.getElementById('chatWindow');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const addContactButton = document.getElementById('addContactButton');
    const contactList = document.getElementById('contactList');
    const emojiButton = document.getElementById('emojiButton');
    const emojiPicker = document.getElementById('emojiPicker');
    const messageInputSection = document.getElementById('messageInputSection');

    
    // Function to display chat window and message input when a contact is clicked
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactName = this.getAttribute('data-contact');
            chatWindow.classList.remove('hidden');
            chatMessages.innerHTML = ''; // Clear previous messages
            displayContactName(contactName);
            messageInputSection.classList.remove('hidden'); // Show input section
        });
    });

    function displayContactName(name) {
        const header = document.createElement('div');
        header.className = 'text-lg font-bold mb-2';
        header.textContent = `Chat with ${name}`;
        chatMessages.appendChild(header);
    }

    // Function to send message
    document.getElementById('sendButton').addEventListener('click', function() {
        const message = messageInput.value.trim();
        
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.className = 'bg-purple-200 p-2 rounded-lg self-end';
            messageElement.textContent = message;
            
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
            
            // Scroll to the bottom of the chat window
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('sendButton').click();
        }
    });

    // Functionality to add a new contact
    addContactButton.addEventListener('click', function() {
        const newContactInput = document.createElement('input');
        newContactInput.type = 'text';
        newContactInput.placeholder = 'Enter contact name';
        newContactInput.className = 'mt-2 h-12 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-purple-300';

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.className = 'mt-2 bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition duration-200';

        // Handle save contact
        saveButton.addEventListener('click', function() {
            const contactName = newContactInput.value.trim();
            if (contactName) {
                const newContact = document.createElement('div');
                newContact.className = 'contact-item p-2 cursor-pointer hover:bg-gray-200';
                newContact.setAttribute('data-contact', contactName);
                newContact.textContent = contactName;

                // Add event listener to new contact
                newContact.addEventListener('click', function() {
                    chatWindow.classList.remove('hidden');
                    chatMessages.innerHTML = ''; // Clear previous messages
                    displayContactName(contactName);
                    messageInputSection.classList.remove('hidden'); // Show input section
                });

                contactList.appendChild(newContact);
                newContactInput.remove();
                saveButton.remove();
            }
        });

        // Append the input and save button to the contact list
        contactList.appendChild(newContactInput);
        contactList.appendChild(saveButton);
    });

    

 
    // Emoji picker functionality
    emojiButton.addEventListener('click', (event) => {
        event.stopPropagation()
        emojiPicker.classList.toggle('hidden');
        console.log("clivked to open") // Toggle emoji picker visibility
    });

    emojiPicker.addEventListener('emoji-click', event => {
        const emoji = event.detail.unicode; // Get selected emoji
        messageInput.value += emoji; // Append emoji to input
    });

    // Hide emoji picker when clicking outside
    document.addEventListener('click', (event) => {
        // Check if the emoji picker is visible and the click is outside the picker and button
        if (!emojiPicker.contains(event.target) && event.target !== emojiButton) {
            emojiPicker.classList.add('hidden'); // Hide the emoji picker
        }
    });

    
// });

// In your chat.js file
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const fileNames = Array.from(files).map(file => file.name).join(', ');
    alert(`You selected: ${fileNames}`);
});

