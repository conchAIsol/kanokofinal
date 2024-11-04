import asyncio
import websockets
import uuid
import os
from aiohttp import web
from characterai import aiocai
from elevenlabs import play, Voice, VoiceSettings
from elevenlabs.client import AsyncElevenLabs


eclient = AsyncElevenLabs(
    api_key="sk_9438cea43585e3115a9685eae6a52d3632f12f2bdca5b149",
)

async def getBytes(gen):
    audio_bytes = bytearray()
    async for chunk in gen:
        audio_bytes.extend(chunk)
    return bytes(audio_bytes)


class CombinedServer:
    def __init__(self):
        self.user_chats = {}
        self.app = web.Application()
        self.app.router.add_get('/', self.handle_http)
        self.app.router.add_static('/', path='.', name='static')
        self.app.router.add_get('/ws', self.handle_websocket)
        static_path = os.path.join(os.path.dirname(__file__), 'static')
        arts_path = os.path.join(os.path.dirname(__file__), 'arts')
        games_path = os.path.join(os.path.dirname(__file__), 'games')
        paint_path = os.path.join(os.path.dirname(__file__), 'paint')
        scripts_path = os.path.join(os.path.dirname(__file__), 'scripts')
        terminal_path = os.path.join(os.path.dirname(__file__), 'terminal')
        self.app.router.add_static('/arts/', path=arts_path, name='arts')
        self.app.router.add_static('/games/', path=games_path, name='games')
        self.app.router.add_static('/paint/', path=paint_path, name='paint')
        self.app.router.add_static('/scripts/', path=scripts_path, name='scripts')
        self.app.router.add_static('/terminal/', path=terminal_path, name='terminal')

        
        
    async def handle_http(self, request):
        # Serve your static files or handle HTTP requests here
        return web.FileResponse('./index.html')  # Adjust path as needed
    
    async def handle_websocket(self, request):
        print('handling')
        ws = web.WebSocketResponse()
        await ws.prepare(request)
        
        user_sid = str(uuid.uuid4())
        await self.create_chat(user_sid)
        
        async for msg in ws:
            if msg.type == web.WSMsgType.TEXT:
                response = await self.get_message(msg.data, user_sid)
                audio = await eclient.generate(
                    text=response,
                    voice=Voice(
                        voice_id='jGf6Nvwr7qkFPrcLThmD'
                    )
                )
                print('generating audio')
                abytes = await getBytes(audio)
                await ws.send_str(response)
                print('sent response')
                await ws.send_bytes(abytes)
                print('sent audio')
            elif msg.type == web.WSMsgType.ERROR:
                print(f'WebSocket connection closed with exception {ws.exception()}')
                
        return ws
    
    async def create_chat(self, user_sid):
        if user_sid not in self.user_chats:
            char = 'MfQ2VY0E6cXEAfpbXcKss1Vn51tNVz0de2Z9_KhcPg0'
            client = aiocai.Client('ecf4941c89f3fb09372078ed8cb36b679e6074c9')
            
            me = await client.get_me()
            async with await client.connect() as chat:
                new, answer = await chat.new_chat(char, me.id)
                self.user_chats[user_sid] = new.chat_id
                print('Created new chat:', self.user_chats[user_sid])
                return answer.text
    
    async def get_message(self, user_input, user_sid):
        char = 'MfQ2VY0E6cXEAfpbXcKss1Vn51tNVz0de2Z9_KhcPg0'
        client = aiocai.Client('ecf4941c89f3fb09372078ed8cb36b679e6074c9')
        
        if user_sid not in self.user_chats:
            me = await client.get_me()
            async with await client.connect() as chat:
                new, answer = await chat.new_chat(char, me.id)
                self.user_chats[user_sid] = new.chat_id
                return answer.text
        else:
            your_chat = self.user_chats.get(user_sid)
            async with await client.connect() as chat:
                message = await chat.send_message(char, your_chat, user_input)
                return message.text

async def main():
    server = CombinedServer()
    runner = web.AppRunner(server.app)
    await runner.setup()
    site = web.TCPSite(runner, '0.0.0.0', 10000)
    await site.start()
    
    print('Server started on port 10000')
    await asyncio.Future()  # run forever

if __name__ == '__main__':
    asyncio.run(main())
