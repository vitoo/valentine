// Check for shared message in URL params
function checkForSharedMessage() {
    const params = new URLSearchParams(window.location.search);
    const encodedMessage = params.get('msg');

    if (encodedMessage) {
        try {
            const decodedMessage = atob(encodedMessage);
            const { from, to } = JSON.parse(decodedMessage);
            displaySharedMessage(from, to);
        } catch (error) {
            console.error("Error decoding message:", error);
        }
    }
}

function displaySharedMessage(from, to) {
    const shareForm = document.getElementById('share-form');
    const messageDisplay = document.getElementById('message-display');
    const messageText = document.getElementById('message-text');

    shareForm.style.display = 'none';
    messageDisplay.style.display = 'block';
    messageText.textContent = `Hello ${to}, this is a message from ${from} ❤️`;
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