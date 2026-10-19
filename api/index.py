from fastapi import FastAPI
from fastapi.responses import PlainTextResponse

app = FastAPI()

@app.get("/api", response_class=PlainTextResponse)
def generate_idea():
    return (
        "Startup idea: AI-powered meeting assistant. "
        "It summarizes meetings, identifies action items, "
        "and creates follow-up reminders."
    )
