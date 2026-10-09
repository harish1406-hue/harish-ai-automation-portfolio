"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, Square, ArrowUpRight } from "lucide-react";

const intro = "Hi, I'm Harish Velayutham, an AI Automation Engineer based in Vilnius, Lithuania. I build intelligent workflows, RAG assistants, and API integrations using n8n, Python, and Node.js. Explore my projects to see how I turn complex processes into reliable systems.";

export default function AvatarIntro() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [message, setMessage] = useState("");
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);
  useEffect(() => {
    setSupported("speechSynthesis" in window);
    return () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); };
  }, []);
  const speak = () => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(intro);
    speech.lang = "en-GB";
    speech.rate = 0.95;
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(v => v.lang === "en-GB") || voices.find(v => v.lang.startsWith("en")) || null;
    speech.onstart = () => setSpeaking(true);
    speech.onend = () => setSpeaking(false);
    speech.onerror = () => { setSpeaking(false); setMessage("Audio is unavailable in this browser. You can read my intro below."); };
    utterance.current = speech;
    setMessage("");
    window.speechSynthesis.speak(speech);
  };
  return <div className={`avatar-stage ${speaking ? "is-speaking" : ""}`}>
    <div className="avatar-aura" />
    <div className="floating-node node-left"><span className="node-icon">⌘</span><div><small>CONNECT</small><strong>APIs & workflows</strong></div><ArrowUpRight size={15}/></div>
    <div className="floating-node node-right"><span className="node-icon">✦</span><div><small>BUILD</small><strong>Intelligent systems</strong></div><ArrowUpRight size={15}/></div>
    <div className="intro-bubble"><span className="intro-dot" /> {speaking ? "Let me introduce myself…" : "A little about the engineer behind the workflows."}</div>
    <svg className="harish-avatar" viewBox="0 0 300 420" role="img" aria-label="Stylized standing avatar of Harish, wearing a teal jacket and dark trousers">
      <defs>
        <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#55dac7"/><stop offset="1" stopColor="#157d78"/></linearGradient>
        <linearGradient id="pants" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#334356"/><stop offset="1" stopColor="#142131"/></linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dca479"/><stop offset="1" stopColor="#b57850"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="399" rx="76" ry="12" fill="#55dac7" opacity=".15"/>
      <g className="avatar-body">
        <path d="M112 255 L150 259 L142 377 L110 377 Z" fill="url(#pants)"/>
        <path d="M150 259 L187 255 L192 377 L160 377 Z" fill="url(#pants)"/>
        <path d="M108 371 Q124 366 142 375 L143 392 Q125 398 95 393 L94 384 Z" fill="#e0e9ed"/>
        <path d="M159 375 Q175 367 192 372 L207 386 L206 394 L160 394 Z" fill="#e0e9ed"/>
        <path d="M102 390 L143 390 M162 390 L204 390" stroke="#8495a2" strokeWidth="3"/>
        <path d="M114 135 Q150 121 185 135 L199 254 Q155 270 101 254 Z" fill="url(#jacket)"/>
        <path d="M132 135 L150 158 L169 135 L168 253 L132 253 Z" fill="#162c38"/>
        <path d="M129 132 L150 156 L135 176 L120 140 M172 132 L151 156 L166 176 L183 139" fill="#73ead6"/>
        <path d="M151 170 L151 251" stroke="#517c83" strokeWidth="2"/>
        <path d="M112 138 Q98 133 90 153 L75 216 Q73 234 86 240 Q102 242 107 221 L123 164" fill="url(#jacket)"/>
        <path d="M78 225 Q67 241 80 252 Q91 259 99 241 L103 233" fill="url(#skin)"/>
        <g className="avatar-wave">
          <path d="M182 139 Q196 135 204 153 L222 179 L236 146 L252 153 L240 204 Q233 221 219 211 L184 178" fill="url(#jacket)"/>
          <path d="M235 153 L232 128 Q230 115 236 114 L242 130 L240 106 Q239 99 245 99 L251 127 L252 104 Q253 97 258 102 L258 129 L263 113 Q268 107 271 115 L267 143 Q263 157 251 159 Z" fill="url(#skin)"/>
        </g>
        <rect x="134" y="108" width="33" height="33" rx="12" fill="url(#skin)"/>
        <g className="avatar-head">
          <ellipse cx="108" cy="77" rx="9" ry="15" fill="#bd825b"/><ellipse cx="191" cy="77" rx="9" ry="15" fill="#bd825b"/>
          <path d="M110 52 Q150 24 188 52 L187 90 Q183 127 150 132 Q116 125 111 92 Z" fill="url(#skin)"/>
          <path d="M110 75 Q99 44 116 28 Q143 8 174 24 Q203 35 191 75 L183 52 Q156 65 128 44 L115 77 Z" fill="#18232d"/>
          <path d="M116 34 Q144 17 173 32" fill="none" stroke="#344351" strokeWidth="5" strokeLinecap="round"/>
          <path d="M123 69 L137 67 M163 67 L177 69" stroke="#3d2a23" strokeWidth="4" strokeLinecap="round"/>
          <g className="avatar-eyes"><ellipse cx="131" cy="79" rx="3" ry="4" fill="#20262d"/><ellipse cx="169" cy="79" rx="3" ry="4" fill="#20262d"/></g>
          <path d="M149 80 L145 94 L154 96" fill="none" stroke="#a66b48" strokeWidth="3" strokeLinecap="round"/>
          <path d="M120 102 Q126 122 150 125 Q174 121 180 102 Q166 113 150 111 Q135 113 120 102" fill="#302b29" opacity=".85"/>
          <path className="avatar-mouth" d="M138 105 Q150 117 163 105 Q151 110 138 105" fill="#fff"/>
        </g>
        <rect x="110" y="192" width="14" height="21" rx="3" fill="#112e36"/><path d="M114 199 L119 199 M114 204 L119 204" stroke="#62ecd1" strokeWidth="2"/>
      </g>
    </svg>
    <div className="avatar-platform" />
    <button className="intro-button" onClick={speak} disabled={!supported} aria-pressed={speaking}>
      {speaking ? <Square size={15}/> : <Volume2 size={17}/>} {speaking ? "Stop introduction" : "Meet Harish · play intro"}<span className="sound-bars"><i/><i/><i/><i/></span>
    </button>
    <p className="audio-note" role="status">{message || (supported ? "Sound on your terms. A short, spoken introduction." : "Read my introduction below.")}</p>
    <details className="intro-transcript"><summary>Read the introduction</summary><p>{intro}</p></details>
  </div>;
}
