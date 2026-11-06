from flask import Flask, request, jsonify, render_template
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Create Flask application
app = Flask(__name__)

# Connect to Gemini
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

# Store conversation history
conversations = {}

# Custom chatbot personality
SYSTEM_PROMPT = """
You are SmartChat, a friendly and helpful AI assistant.
Give clear, simple and accurate answers.
"""

# Home route
@app.route("/")
def home():
    return render_template("index.html")


# Health check
@app.route("/health")
def health():
    return jsonify({"status": "OK"})


# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():

    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({"error": "Message is required"}), 400

        message = data["message"].strip()
        conversation_id = data.get("conversation_id", "default")

        if not message:
            return jsonify({"error": "Message cannot be empty"}), 400

        # Create conversation if it does not exist
        if conversation_id not in conversations:
            conversations[conversation_id] = []

        history = conversations[conversation_id]

        # Add user message
        history.append({
            "role": "user",
            "parts": [{"text": message}]
        })

        # Keep only the last 10 messages
        history = history[-10:]

        # Send conversation to Gemini
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=history,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT
            )
        )

        bot_reply = response.text

        # Store bot response
        history.append({
            "role": "model",
            "parts": [{"text": bot_reply}]
        })

        conversations[conversation_id] = history[-10:]

        return jsonify({
            "conversation_id": conversation_id,
            "reply": bot_reply
        })

    except Exception as e:
        print("Gemini Error:", str(e))

        return jsonify({
            "error": str(e)
        }), 500


# Run application
if __name__ == "__main__":
    app.run(debug=True, port=5000)
