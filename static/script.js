// Generate a unique conversation ID
let conversationId = crypto.randomUUID();

// Get HTML elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typing-indicator");


// Function to display messages
function addMessage(message, sender) {

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender + "-message");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = sender === "user" ? "You" : "S";

    const content = document.createElement("div");
    content.classList.add("message-content");

    // Display message safely as text
    content.textContent = message;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatBox.appendChild(messageDiv);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Function to send messages to Flask
async function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Display user's message
    addMessage(message, "user");

    userInput.value = "";

    sendBtn.disabled = true;
    typingIndicator.style.display = "block";

    try {

        // Send request to Flask backend
        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message,
                conversation_id: conversationId
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        // Display AI response
        addMessage(data.reply, "bot");

    } catch (error) {

        addMessage("Error: " + error.message, "bot");

    } finally {

        typingIndicator.style.display = "none";
        sendBtn.disabled = false;
        userInput.focus();

    }
}


// Send message when Enter key is pressed
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Start a new conversation
function newConversation() {

    conversationId = crypto.randomUUID();

    chatBox.innerHTML = "";

    addMessage(
        "Hello! 👋 Welcome to SmartChat. I'm your AI assistant. How can I help you today?",
        "bot"
    );

}