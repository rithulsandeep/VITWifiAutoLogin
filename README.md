WiFi Auto-Login Extension

This Chrome extension automatically logs in to the VIT WiFi portal by filling in saved credentials and submitting the login form. Once the extension is clicked, it opens the login page, enters the credentials, logs in, and closes the tab automatically.

🚀 Features

One-click login to WiFi

Secure credential storage using Chrome Storage

Auto-closes tab after login

First-time setup prompts the user for credentials

📥 Installation

Download or Clone the Repository

git clone https://github.com/rithulsandeep/VITWifiAutoLogin.git
cd VITWifiAutoLogin

Load the Extension in Chrome

Open chrome://extensions/

Enable Developer Mode (toggle at the top right)

Click Load unpacked and select the project folder

🔧 Usage

Click the extension icon to log in automatically.

The first time you use it, you'll be prompted to enter your WiFi username & password.

Once saved, the extension will auto-fill credentials and log in every time it's clicked.

🔒 How It Works

Opens http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.gstatic.com/generate_204

Fills in username and password from Chrome Storage

Clicks the Login button automatically

Closes the tab after a short delay

📌 Permissions

Storage: To store WiFi credentials securely

Scripting: To execute JavaScript for auto-login

Active Tab: To interact with the login page

Host Permission: http://phc.prontonetworks.com/*

🛠 Contributing

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m 'Add new feature')

Push to GitHub (git push origin feature-branch)

Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License.

Made with ❤️ by Rithul Sandeep
