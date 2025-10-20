# Secure Note Vault

A simple, secure web app for encrypting and storing notes locally in your browser. Built with HTML, CSS, JavaScript, and AES encryption (via CryptoJS). Hosted on GitHub Pages.

## Features
- **Encryption**: Uses AES-256 to protect notes with a password.
- **Local Storage**: Notes are stored securely in your browser (no server required).
- **Clean UI**: Responsive design with Bootstrap for a professional look.
- **Free & Open-Source**: No costs, no servers—pure client-side security.

## How to Use
1. Visit the live app: [https://anyvc.github.io/SecureNoteVault](https://anyvc.github.io/SecureNoteVault).
2. Enter a note and password.
3. Click "Encrypt & Save" to secure it.
4. Use "Decrypt & View" to retrieve it (needs the correct password).

## Security Notes
- Data is encrypted client-side and stored locally—great for privacy, but not immune to browser access.
- For production, consider server-side encryption or additional layers like PBKDF2 for password hashing.

## Tech Stack
- HTML/CSS (Bootstrap for styling)
- JavaScript (CryptoJS for encryption)
- GitHub Pages for hosting

Built as a beginner cybersecurity project to demonstrate encryption and cloud deployment skills.

