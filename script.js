// Check for shared message in URL params
function checkForSharedMessage() {
    const params = new URLSearchParams(window.location.search);
    const encodedMessage = params.get('msg');

    console.log("Checking for message...", { encodedMessage });

    if (encodedMessage) {
        try {
            const decodedMessage = atob(encodedMessage);
            console.log("Decoded message:", decodedMessage);
            const { from, to } = JSON.parse(decodedMessage);
            console.log("Parsed message:", { from, to });
            displaySharedMessage(from, to);
        } catch (error) {
            console.error("Error decoding message:", error);
        }
    } else {
        console.log("No message parameter found in URL");
    }
}

function displaySharedMessage(from, to) {
    console.log("Displaying shared message...");
    const shareForm = document.getElementById('share-form');
    const messageDisplay = document.getElementById('message-display');
    const messageText = document.getElementById('message-text');

    if (!shareForm || !messageDisplay || !messageText) {
        console.error("Required DOM elements not found");
        return;
    }

    shareForm.style.display = 'none';
    messageDisplay.style.display = 'block';
    messageText.textContent = `Hello ${to}, this is a message from ${from} ❤️`;
    console.log("Message displayed successfully");
}

function generateLink() {
    const fromInput = document.getElementById('from-input').value.trim();
    const toInput = document.getElementById('to-input').value.trim();

    if (!fromInput || !toInput) {
        alert('Please fill in both fields');
        return;
    }

    const messageData = { from: fromInput, to: toInput };
    const encodedMessage = btoa(JSON.stringify(messageData));
    const baseUrl = window.location.origin + window.location.pathname;
    const shareLink = `${baseUrl}?msg=${encodedMessage}`;

    const linkDisplay = document.getElementById('link-display');
    const shareLinkInput = document.getElementById('share-link');
    shareLinkInput.value = shareLink;
    linkDisplay.style.display = 'block';
}

async function copyToClipboard() {
    const shareLinkInput = document.getElementById('share-link');
    try {
        await navigator.clipboard.writeText(shareLinkInput.value);
        alert('Link copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy:', error);
        alert('Failed to copy link');
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkForSharedMessage);
} else {
    checkForSharedMessage();
}

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    const messageDisplay = document.getElementById('message-display');
    const yesPage = document.getElementById('yes-page');

    messageDisplay.style.display = 'none';
    yesPage.style.display = 'block';
}