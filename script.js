// Get DOM elements
const noteInput = document.getElementById('noteInput');
const passwordInput = document.getElementById('passwordInput');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const encryptedOutput = document.getElementById('encryptedOutput');
const decryptedOutput = document.getElementById('decryptedOutput');

// Encrypt and save the note
encryptBtn.addEventListener('click', () => {
    const note = noteInput.value;
    const password = passwordInput.value;
    
    if (!note || !password) {
        alert('Please enter both a note and a password.');
        return;
    }
    
    // Encrypt using AES with the password as key
    const encrypted = CryptoJS.AES.encrypt(note, password).toString();
    
    // Store in localStorage (browser-based storage)
    localStorage.setItem('encryptedNote', encrypted);
    
    // Display the encrypted text
    encryptedOutput.value = encrypted;
    
    // Clear inputs for security
    noteInput.value = '';
    passwordInput.value = '';
    
    alert('Note encrypted and saved securely!');
});

// Decrypt and view the note
decryptBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    
    if (!password) {
        alert('Please enter the password.');
        return;
    }
    
    // Retrieve from localStorage
    const encrypted = localStorage.getItem('encryptedNote');
    
    if (!encrypted) {
        alert('No encrypted note found. Encrypt one first.');
        return;
    }
    
    try {
        // Decrypt using AES with the password
        const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
        
        if (!decrypted) {
            throw new Error('Wrong password');
        }
        
        // Display the decrypted text
        decryptedOutput.value = decrypted;
        
        alert('Note decrypted successfully!');
    } catch (error) {
        alert('Decryption failed. Check your password.');
    }
});