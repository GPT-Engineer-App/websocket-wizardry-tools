import WebSocketClient from '../components/WebSocketClient';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">WebSocket Interaction Tools</h1>
        <WebSocketClient />
      </div>
    </div>
  );
};

export default Index;
