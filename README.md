# Will You Be My Valentine? 

This project is designed to be an interactive webpage to ask someone to be your Valentine. Please use this code as inspiration.
---
## Respect Open-Source
I built this for **fun & learning**. If you fork or modify it:  
✔ **Use it for creativity, personal projects, or learning**  
✔ **Give proper credit when using it in public**  
✔ **Respect the original creator’s work**  
 




## How It Works

This project is an interactive webpage that allows you to create personalized Valentine messages and share them via URL. It includes:

1. **Message Generator**: Create a personalized message by entering your name (From) and your Valentine's name (To)
2. **Shareable Link**: Generate a URL encoded with base64 that contains the message data
3. **Interactive Response**: When someone opens your shared link, they see your personalized message and can respond with "Yes" or "No"
4. **Dynamic UI**: The "No" button cycles through playful messages while the "Yes" button grows larger

### Features:
- **Personalized Messages**: Create custom Valentine messages to share
- **URL Encoding**: Messages are encoded in base64 and passed as query parameters
- **Interactive Buttons**: The "No" button cycles through messages, while the "Yes" button grows in size
- **Single Page App**: Everything is handled in one HTML file without redirects
- **Responsive Design**: The webpage is designed to work on all screen sizes

---

## How to Use

1. **Download the Files**:
   - Clone this repository or download the `index.html`, `styles.css`, and `script.js` files.

2. **Open the Project**:
   - Open the `index.html` file in your web browser.

3. **Create a Message**:
   - Enter your name in the "From" field
   - Enter your Valentine's name in the "To" field
   - Click "Generate Link"

4. **Share the Link**:
   - Copy the generated link
   - Send it to your Valentine

5. **Receive a Response**:
   - When your Valentine opens the link, they'll see your personalized message
   - They can respond with "Yes" or "No"


---


## Code Overview

### Files:

- `index.html`: The main HTML file that structures the webpage (contains all three views: form, message display, and celebration page)
- `styles.css`: The CSS file that styles the webpage
- `script.js`: The JavaScript file that handles all interactions and message encoding/decoding

### Key Functions:

- `checkForSharedMessage()`: Checks the URL for encoded message parameters and displays them
- `displaySharedMessage(from, to)`: Shows the personalized message when a shared link is opened
- `generateLink()`: Creates a shareable URL with base64-encoded message data
- `copyToClipboard()`: Copies the generated link to the clipboard
- `handleNoClick()`: Changes the "No" button text and increases the size of the "Yes" button
- `handleYesClick()`: Shows the celebration page

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

