# SmartChat – AI Chatbot

SmartChat is an AI-powered conversational chatbot built using Python, Flask, and Google's Gemini API. It provides interactive conversations through a simple web interface.

## Features

- AI-powered responses using Gemini API.
- Multi-turn conversational memory.
- Separate conversation histories using unique conversation IDs.
- Context management using the last 10 messages.
- Custom system prompt and chatbot personality.
- Error handling for API failures.
- Interactive web interface using HTML, CSS, and JavaScript.
- Start a new conversation whenever needed.

## Technologies Used

- Python
- Flask
- Google Gemini API
- HTML
- CSS
- JavaScript
- Postman
- Git and GitHub

## Project Structure

```text
SmartChat/
│
├── app.py
├── requirements.txt
├── .env
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd SmartChat
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

Windows CMD:

```bash
venv\Scripts\activate.bat
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure the API key

Create a `.env` file in the project root directory.

Add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never upload your actual API key to GitHub.

### 7. Run the application

```bash
python app.py
```

Open your browser:

```text
http://127.0.0.1:5000/
```

## API Endpoint

**POST /chat**

Example request:

```json
{
    "message": "Hello SmartChat!",
    "conversation_id": "test123"
}
```

Example response:

```json
{
    "conversation_id": "test123",
    "reply": "Hello! How can I help you today?"
}
```

## Future Improvements

- Conversation summarisation for longer chats.
- Persistent conversation storage.
- User authentication.
- Improved chatbot interface.
- Deployment to a cloud platform.

## Author

Developed as an internship project to explore AI-powered conversational applications using Python and Large Language Models.