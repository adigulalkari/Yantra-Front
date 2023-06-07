from fastapi import FastAPI, WebSocket

app= FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("Accepting connection")
    await websocket.accept()
    while True:
        try:
            data = await websocket.recieve_text()
            print(data)
        except:
            pass
            break