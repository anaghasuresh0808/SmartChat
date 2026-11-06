# SmartChat – AI Chatbot

SmartChat is an AI-powered conversational chatbot developed using Python, Flask, and Google's Gemini API. It provides interactive, context-aware conversations through a simple and user-friendly web interface.

## Features

- AI-powered responses using the Google Gemini API.
- Multi-turn conversational memory.
- Separate conversation histories using unique conversation IDs.
- Context-window management using the last 10 messages.
- Custom system prompt to define chatbot personality.
- Input validation for missing, empty, and invalid messages.
- Error handling for API failures and timeout errors.
- Markdown formatting for bold text, headings, bullet points, and numbered lists.
- Interactive web interface using HTML, CSS, and JavaScript.
- Typing indicator while generating responses.
- Start a new conversation whenever needed.

## Technologies Used

- Python
- Flask
- Google Gemini API
- HTML5
- CSS3
- JavaScript
- Marked.js
- DOMPurify
- Postman
- Git and GitHub

## Project Structure

```text
SmartChat/
│
├── app.py
├── requirements.txt
├── README.md
├── TESTING_REPORT.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

The `.env` file stores the Gemini API key locally and is excluded from GitHub using `.gitignore`.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/anaghasuresh0808/SmartChat.git
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

For Windows CMD:

```bash
venv\Scripts\activate.bat
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure the Gemini API key

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

Open your browser and visit:

```text
http://127.0.0.1:5000/
```

## API Endpoints

### 1. Home Endpoint

**GET /**

Displays the SmartChat web interface.

### 2. Health Check Endpoint

**GET /health**

Checks whether the Flask application is running.

Example response:

```json
{
    "status": "OK"
}
```

### 3. Chat Endpoint

**POST /chat**

Accepts user messages and generates AI-powered responses.

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

## Testing

The application was tested using Postman and the web interface.

Testing includes:

- Valid message submission.
- Missing and empty message validation.
- Invalid input validation.
- Multi-turn conversation memory.
- Conversation isolation.
- New conversation functionality.
- Health-check endpoint.
- Frontend and backend communication.

Refer to `TESTING_REPORT.md` for detailed test cases and results.

## Future Improvements

- Conversation summarisation for longer conversations.
- Persistent conversation storage using a database.
- User authentication.
- Improved chatbot interface.
- Deployment to a cloud platform.

## Author

Developed as an internship project to explore AI-powered conversational applications using Python, Flask, and Large Language Models.