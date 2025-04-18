import React, { useState, useRef, useEffect } from "react";

const Notepad = () => {
  const [text, setText] = useState("");
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [isTextMode, setIsTextMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#fff";
  }, []);

  const handleMouseDown = (e) => {
    if (isTextMode) return;
    isDrawing.current = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current || isTextMode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    if (isTextMode) return;
    isDrawing.current = false;
  };

  const drawTextOnCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "18px sans-serif";

    const lines = text.split("\n");
    lines.forEach((line, index) => {
      ctx.fillText(line, 20, 30 + index * 25);
    });
  };

  useEffect(() => {
    if (isTextMode) drawTextOnCanvas();
  }, [text, isTextMode]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-6 w-full">
      <h2 className="text-3xl font-bold mb-2">📝 Scribbly Unified Canvas</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setIsTextMode(false)}
          className={`px-4 py-2 rounded-lg border ${!isTextMode ? "bg-gray-700 border-white" : "border-gray-500"}`}
        >
          Free Draw
        </button>
        <button
          onClick={() => setIsTextMode(true)}
          className={`px-4 py-2 rounded-lg border ${isTextMode ? "bg-gray-700 border-white" : "border-gray-500"}`}
        >
          Text Mode
        </button>
      </div>
      {isTextMode && (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your notes here..."
          className="w-full max-w-2xl h-40 p-4 text-lg bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none transition"
        ></textarea>
      )}
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full max-w-5xl border border-gray-700 rounded-xl bg-gray-800 cursor-crosshair"
      ></canvas>
    </div>
  );
};

export default Notepad;
