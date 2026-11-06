# SmartChat – Software Testing Report

## 1. Project Overview

SmartChat is an AI-powered chatbot developed using Python, Flask, and the Google Gemini API. It supports multi-turn conversations, conversation isolation, and basic error handling.

## 2. Testing Environment

- Programming Language: Python 3.11.9
- Backend Framework: Flask
- AI Model: Google Gemini
- API Testing Tool: Postman
- Frontend: HTML, CSS, JavaScript
- Development Environment: Visual Studio Code

## 3. Test Cases and Results

| Test ID | Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| TC01 | Send request without message | HTTP 400 – Message is required | Correct error returned | Passed |
| TC02 | Send an empty message | HTTP 400 – Message cannot be empty | Correct error returned | Passed |
| TC03 | Send a valid message | HTTP 200 with chatbot reply | Gemini generated a reply | Passed |
| TC04 | Store conversation history | Previous messages should be available | Conversation history retained | Passed |
| TC05 | Recall previous information | Bot should remember information in the same conversation | Correctly recalled Python | Passed |
| TC06 | Test conversation isolation | New conversation should not access previous history | Previous information was not recalled | Passed |
| TC07 | Test New Conversation button | Previous chat should be cleared | New conversation started successfully | Passed |
| TC08 | Simulated timeout response | HTTP 504 with timeout error | Temporary test route returned expected response | Passed (simulated) |

## 4. Testing Conclusion

The SmartChat application successfully passed the functional tests performed using Postman and the browser.

The tests verified:
- Successful communication with the Gemini API.
- Input validation and error responses.
- Multi-turn conversation memory.
- Conversation isolation using unique conversation IDs.
- Frontend and backend integration.
- Simulated timeout response.

An actual Gemini API timeout has not yet been tested.

## 5. Future Improvements

- Store conversation history permanently using SQLite or PostgreSQL.
- Improve timeout and API exception handling.
- Add user authentication.
- Implement conversation deletion and history management.
- Improve the frontend user experience.