from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from openai import OpenAI

app = FastAPI()


@app.get("/api", response_class=PlainTextResponse)
def generate_idea():
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "Give me a new startup idea for AI agents."}],
    )
    return response.choices[0].message.content or "The model returned an empty idea."
