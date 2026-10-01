import React, { useState, useEffect } from 'react';
import { 
  Heart, MessageCircle, Share2, Sparkles, Music, Send, 
  Smile, UserPlus, Flame, Calendar, BookOpen, Trophy, 
  Volume2, VolumeX, CheckCircle, AlertCircle, Bell, 
  Camera, Radio, ThumbsUp, Hash, Zap, Image, User, Users,
  Star, Lock, Play, Pause, FastForward, Rewind, MessageSquare
} from 'lucide-react';

const y2kStyles = `
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(1000%); }
  }
  @keyframes glitterSparkle {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.15) rotate(5deg); }
  }
  @keyframes nudgeShake {
    0% { transform: translate(0, 0) rotate(0deg); }
    10% { transform: translate(-8px, -8px) rotate(-3deg); }
    20% { transform: translate(8px, 8px) rotate(3deg); }
    30% { transform: translate(-8px, 8px) rotate(-3deg); }
    40% { transform: translate(8px, -8px) rotate(3deg); }
    50% { transform: translate(-5px, -5px) rotate(-1deg); }
    60% { transform: translate(5px, 5px) rotate(1deg); }
    70% { transform: translate(-3px, 3px) rotate(0deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }

  .bg-y2k-pattern {
    background-color: #120024;
    background-image: 
      radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.25) 0%, transparent 60%),
      radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(150, 0, 255, 0.25) 0%, transparent 50%),
      repeating-linear-gradient(0deg, rgba(255, 105, 180, 0.08), rgba(255, 105, 180, 0.08) 1px, transparent 1px, transparent 4px);
  }

  .y2k-scanline {
    position: relative;
    overflow: hidden;
  }
  .y2k-scanline::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
    background-size: 100% 4px;
    z-index: 2;
    pointer-events: none;
    opacity: 0.6;
  }

  .y2k-glossy {
    background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 45%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 5px rgba(0,0,0,0.4);
  }

  .y2k-button-pink {
    background: linear-gradient(180deg, #ff80df 0%, #ff1493 50%, #c71585 51%, #ff69b4 100%);
    border: 2px solid #fff;
    box-shadow: 0 0 10px #ff1493, inset 0 1px 2px #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  }
  .y2k-button-pink:hover {
    background: linear-gradient(180deg, #ff99e6 0%, #ff33a6 50%, #d81b95 51%, #ff85c2 100%);
    box-shadow: 0 0 15px #ff69b4, 0 0 25px #ff1493;
  }

  .y2k-button-blue {
    background: linear-gradient(180deg, #80ffff 0%, #00bfff 50%, #008b8b 51%, #00e5ff 100%);
    border: 2px solid #fff;
    box-shadow: 0 0 10px #00bfff, inset 0 1px 2px #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  }

  .y2k-border-glow {
    border: 2px solid #ff007f;
    box-shadow: 0 0 10px #ff007f, inset 0 0 8px rgba(255,0,128,0.3);
  }

  .y2k-card {
    background: rgba(28, 5, 45, 0.85);
    backdrop-filter: blur(8px);
    border: 2px solid #ff66cc;
    box-shadow: 0 0 12px rgba(255, 102, 204, 0.5), inset 0 0 15px rgba(255, 0, 128, 0.2);
  }

  .y2k-window {
    background: linear-gradient(180deg, #ff3399 0%, #cc0066 100%);
    border: 2px solid #ffffff;
    box-shadow: 4px 4px 0px #000000, 0 0 15px rgba(255, 51, 153, 0.6);
  }

  .animate-nudge {
    animation: nudgeShake 0.5s ease-in-out infinite;
  }

  .animate-marquee {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 12s linear infinite;
  }
`;

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [currentMood, setCurrentMood] = useState('😍');
  const [statusText, setStatusText] = useState('Listening to Paramore & avoiding math homework xoxo');
  const [isNudging, setIsNudging] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [newPostText, setNewPostText] = useState('');
  
  // Custom Visitor Counter State
  const [visitorCount, setVisitorCount] = useState(4829);

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Julia',
      handle: '@julia',
      avatar: '👧💖',
      time: '10 mins ago',
      content: 'I can’t believe my teacher gave us homework for tomorrow! 😭 Someone save me pls',
      likes: 12,
      isLiked: false,
      comments: [
        { id: 101, author: 'Lucas', text: 'Just copy mine at lunch lol 🏈' },
        { id: 102, author: 'Mari<3', text: 'Same! Let’s do it together after school!! ✨' }
      ]
    },
    {
      id: 2,
      author: 'Lucas',
      handle: '@lucas',
      avatar: '🧢🏈',
      time: '25 mins ago',
      content: 'The football game is Friday! Who is coming? 🏈 Let’s pack the stands guys!!',
      likes: 24,
      isLiked: true,
      comments: [
        { id: 201, author: 'Laura', text: 'Cheer squad is bringing glitter banners! 📣✨' }
      ]
    },
    {
      id: 3,
      author: 'Laura',
      handle: '@laura',
      avatar: '🎀✨',
      time: '1 hour ago',
      content: 'My crush just smiled at me in the hallway... 😳 I think I forgot how to breathe OMG!!',
      likes: 38,
      isLiked: false,
      comments: [
        { id: 301, author: 'Isa', text: 'OMGGGG WHO?! Spill in MSN chat now!! 🤫💖' },
        { id: 302, author: 'Carol', text: 'AHHH so happy for you girlie! 💕' }
      ]
    },
    {
      id: 4,
      author: 'Matt',
      handle: '@matt',
      avatar: '🎧🎸',
      time: '2 hours ago',
      content: 'This new song by My Chemical Romance is actually so good! 🎧 Burning it to a CD now!',
      likes: 18,
      isLiked: false,
      comments: []
    },
    {
      id: 5,
      author: 'Sophia',
      handle: '@sophia',
      avatar: '🩰🌸',
      time: '3 hours ago',
      content: 'I am so tired... school, homework and dance practice 😴 Need a 3-day sleep session.',
      likes: 15,
      isLiked: false,
      comments: []
    },
    {
      id: 6,
      author: 'Carol',
      handle: '@carol',
      avatar: '🧪✨',
      time: '4 hours ago',
      content: 'Just finished my science project! 🧪✨ Glitter model of the solar system complete!',
      likes: 29,
      isLiked: true,
      comments: [
        { id: 601, author: 'Pedro', text: 'Looks epic! Hope mine works 🎮' }
      ]
    }
  ]);

  // Friends Data
  const [friends] = useState([
    { name: 'Julia', handle: '@julia', avatar: '👧💖', status: 'Online', mood: '😍', top: true },
    { name: 'Lucas', handle: '@lucas', avatar: '🧢🏈', status: 'Online', mood: '🔥', top: true },
    { name: 'Laura', handle: '@laura', avatar: '🎀✨', status: 'Online', mood: '😳', top: true },
    { name: 'Pedro', handle: '@pedro', avatar: '🎮⚡', status: 'Online', mood: '😴', top: true },
    { name: 'Isa', handle: '@isa', avatar: '🌺☀️', status: 'Online', mood: '🤩', top: false },
    { name: 'Carol', handle: '@carol', avatar: '🧪✨', status: 'Busy', mood: '🤓', top: false },
    { name: 'Matt', handle: '@matt', avatar: '🎧🎸', status: 'Away', mood: '🎧', top: false },
    { name: 'Sophia', handle: '@sophia', avatar: '🩰🌸', status: 'Online', mood: '😴', top: false },
    { name: 'Rafa', handle: '@rafa', avatar: '📝🔥', status: 'Online', mood: '😎', top: false },
    { name: 'Bia', handle: '@bia', avatar: '🎨💅', status: 'Online', mood: '💖', top: false },
  ]);

  // MSN Chat Messages State
  const [chatPartner, setChatPartner] = useState('Julia');
  const [chatMessages, setChatMessages] = useState({
    Julia: [
      { sender: 'Julia', text: 'hey girl!! are you coming friday to the game? 💖', time: '16:42' },
      { sender: 'Mari<3', text: 'yesss of course! we should sit together!!', time: '16:43' },
      { sender: 'Julia', text: 'omg yay! wear pink ok? 🌸', time: '16:44' }
    ],
    Lucas: [
      { sender: 'Lucas', text: 'football game!! u better be cheering loud!', time: '15:10' },
      { sender: 'Mari<3', text: 'always!! make sure you guys win!! 🏈', time: '15:12' }
    ],
    Laura: [
      { sender: 'Laura', text: 'i need to tell you something 👀', time: '14:20' },
      { sender: 'Mari<3', text: 'WHAT?! Tell me right now!! 😱', time: '14:21' },
      { sender: 'Laura', text: 'brb teacher is looking!', time: '14:22' }
    ]
  });
  const [inputChatMessage, setInputChatMessage] = useState('');

  // Events State
  const [eventRsvp, setEventRsvp] = useState({
    dance: 'Going',
    game: 'Going',
    talent: 'Maybe'
  });

  // Testimonials / Board Guestbook State
  const [testimonials, setTestimonials] = useState([
    { author: 'xX_Lucas_Xx', text: 'UR THE BEST BESTIE EVER! SEE U AT PRACTICE! 🏈✨', date: 'Oct 12' },
    { author: 'Julia_Princess', text: 'XO XO XO! Luv u girl! Pink power forever!! 💖💅', date: 'Oct 10' },
    { author: 'Laura_XoXo', text: 'Don’t forget we are making friendship bracelets tomorrow!! 🌸', date: 'Oct 08' }
  ]);
  const [newTestimonial, setNewTestimonial] = useState('');

  // Poll Vote State
  const [pollVotes, setPollVotes] = useState({ courtyard: 42, cafeteria: 28, bleachers: 85, library: 15 });
  const [hasVoted, setHasVoted] = useState(false);

  // Photo Lightbox Modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    const newPostObj = {
      id: Date.now(),
      author: 'Mari<3',
      handle: '@xX_Mari<3_Xx',
      avatar: '💖✨',
      time: 'Just now',
      content: `${currentMood} ${newPostText}`,
      likes: 0,
      isLiked: false,
      comments: []
    };
    setPosts([newPostObj, ...posts]);
    setNewPostText('');
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { id: Date.now(), author: 'Mari<3', text: commentText }
          ]
        };
      }
      return post;
    }));
  };

  const triggerNudge = () => {
    setIsNudging(true);
    setTimeout(() => setIsNudging(false), 800);
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!inputChatMessage.trim()) return;
    
    const updated = { ...chatMessages };
    if (!updated[chatPartner]) updated[chatPartner] = [];
    updated[chatPartner].push({
      sender: 'Mari<3',
      text: inputChatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    setChatMessages(updated);
    setInputChatMessage('');
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!newTestimonial.trim()) return;
    setTestimonials([
      { author: 'Guest_Cutie', text: newTestimonial, date: 'Just now' },
      ...testimonials
    ]);
    setNewTestimonial('');
  };

  const handleVote = (option) => {
    if (hasVoted) return;
    setPollVotes(prev => ({ ...prev, [option]: prev[option] + 1 }));
    setHasVoted(true);
  };

  const moodsList = ['😂', '😍', '😡', '😭', '😳', '🤩', '😴'];

  return (
    <div className={`min-h-screen text-white bg-y2k-pattern font-sans pb-12 y2k-scanline selection:bg-pink-500 selection:text-white ${isNudging ? 'animate-nudge' : ''}`}>
      <style>{y2kStyles}</style>

      {}
      <div className="bg-gradient-to-r from-purple-900 via-pink-600 to-cyan-500 border-b border-pink-300 py-1 text-xs font-mono overflow-hidden text-yellow-200 flex items-center shadow-md">
        <div className="bg-pink-700 px-3 py-0.5 text-white font-bold text-[10px] tracking-widest uppercase z-10 flex items-center gap-1">
          <Sparkles className="w-3 h-3 animate-spin" /> XO HOT NEWS
        </div>
        <div className="animate-marquee whitespace-nowrap">
          💖 WELCOME TO XO SOCIAL NETWORK (2006 EDITION) • DON'T FORGET TO RSVP FOR THE FRIDAY FOOTBALL GAME 🏈 • TOP FRIEND SLOTS UPDATED! • LISTEN TO NEW PARAMORE ALBUM 🎧 • STAY FABULOUS XOXO ✨
        </div>
      </div>

      {}
      <header className="max-w-6xl mx-auto px-4 pt-4 pb-2">
        <div className="y2k-card rounded-2xl p-4 md:p-6 mb-4 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-pink-400">
          
          {/* Background Glitter Decor */}
          <div className="absolute top-2 left-4 text-pink-300 text-opacity-30 pointer-events-none select-none text-6xl">✨</div>
          <div className="absolute bottom-1 right-8 text-cyan-300 text-opacity-30 pointer-events-none select-none text-5xl">💖</div>

          {/* Logo & Tagline */}
          <div className="text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-5xl md:text-6xl font-black italic tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-yellow-200 to-cyan-300 drop-shadow-[0_4px_8px_rgba(255,20,147,0.9)] font-serif">
                XO <span className="text-pink-500 text-4xl md:text-5xl not-italic inline-block animate-bounce">💖</span>
              </h1>
              <span className="bg-pink-600 text-yellow-300 text-xs px-2 py-0.5 rounded-full border border-pink-200 font-bold shadow-md transform -rotate-6">
                v2.0 🎉
              </span>
            </div>
            <p className="text-pink-200 font-serif italic text-sm md:text-base mt-1 drop-shadow-sm">
              "Your school. Your people. Your stories. ♥"
            </p>
          </div>

          {/* User Status Badge & Winamp Audio Player */}
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            
            {/* User Profile Header Badge */}
            <div className="bg-purple-950/80 border border-pink-400 rounded-xl p-2.5 flex items-center gap-3 shadow-lg w-full sm:w-auto">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-0.5 border-2 border-white shadow-md flex items-center justify-center text-xl">
                  👸
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-purple-950 rounded-full animate-pulse"></span>
              </div>
              <div className="text-xs">
                <div className="font-bold text-pink-300 flex items-center gap-1">
                  💖 Mari&lt;3 <span className="text-green-400 text-[10px]">● Online</span>
                </div>
                <div className="text-cyan-300 font-mono text-[11px]">xX_Mari&lt;3_Xx</div>
                <div className="text-yellow-200 text-[10px] flex items-center gap-1 mt-0.5">
                  Mood: <span className="text-sm">{currentMood}</span>
                </div>
              </div>
            </div>

            {/* Retro Audio Player Widget */}
            <div className="bg-black/90 border-2 border-cyan-400 rounded-xl p-2 text-xs font-mono w-full sm:w-56 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
              <div className="flex items-center justify-between text-[10px] text-cyan-300 mb-1 border-b border-cyan-900 pb-1">
                <span className="flex items-center gap-1"><Music className="w-3 h-3 text-pink-400 animate-spin" /> WINAMP MP3</span>
                <span className="text-yellow-300">KBPS: 128</span>
              </div>
              <div className="text-pink-300 truncate text-[11px] font-bold mb-1">
                Avril Lavigne - Complicated.mp3
              </div>
              <div className="flex items-center justify-between gap-1">
                <button 
                  onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 y2k-glossy"
                >
                  {isPlayingMusic ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  {isPlayingMusic ? 'PAUSE' : 'PLAY'}
                </button>
                {/* Fake Animated Equalizer */}
                <div className="flex items-end gap-0.5 h-4 bg-gray-950 px-1.5 py-0.5 rounded border border-cyan-900 w-24 justify-center">
                  {[40, 80, 30, 90, 60, 100, 50, 70].map((height, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-t bg-gradient-to-t from-cyan-500 to-pink-500 transition-all duration-300 ${isPlayingMusic ? 'animate-pulse' : 'h-1'}`} 
                      style={{ height: isPlayingMusic ? `${height}%` : '2px' }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {}
        <nav className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {[
            { name: 'Home', icon: '🏠' },
            { name: 'My Board', icon: '✨' },
            { name: 'Friends', icon: '👭' },
            { name: 'School', icon: '📚' },
            { name: 'Events', icon: '💃' },
            { name: 'Messages', icon: '💬', badge: 3 },
            { name: 'Photos', icon: '📸' }
          ].map((tab) => {
            const isActive = currentTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                className={`px-3 md:px-4 py-2 rounded-t-xl text-xs md:text-sm font-bold transition-all duration-150 flex items-center gap-1.5 relative border-t-2 border-x-2 ${
                  isActive 
                    ? 'bg-gradient-to-b from-pink-500 to-purple-900 text-yellow-200 border-pink-300 shadow-[0_-4px_12px_rgba(255,20,147,0.8)] -translate-y-1' 
                    : 'bg-purple-950/80 hover:bg-pink-900/60 text-pink-200 border-purple-700 opacity-90'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
                {tab.badge && (
                  <span className="bg-yellow-400 text-purple-950 text-[10px] font-black px-1.5 py-0.2 rounded-full animate-bounce shadow">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Container Layout */}
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2">

        {}
        <aside className="lg:col-span-3 space-y-4">
          
          {/* Profile Quick Info Box */}
          <div className="y2k-card rounded-xl p-4 text-center relative border-2 border-pink-400">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-lg -mx-4 -mt-4 p-3 mb-3 border-b border-pink-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-pink-200 p-1 border-2 border-white shadow-lg relative">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 flex items-center justify-center text-3xl">
                  👸✨
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-black text-pink-300 drop-shadow">Mari&lt;3</h2>
            <p className="text-xs text-cyan-300 font-mono mb-2">xX_Mari&lt;3_Xx • 11th Grade</p>
            
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-950 border border-green-400 text-green-300 text-xs font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span> Online
            </div>

            {/* Custom Status Text Editor */}
            <div className="bg-purple-950/90 border border-pink-500/50 rounded-lg p-2 text-left mb-3 text-xs">
              <div className="text-[10px] text-pink-400 font-bold mb-1 uppercase tracking-wider flex items-center justify-between">
                <span>Personal Status:</span>
                <span className="text-gray-400">✏️</span>
              </div>
              <input 
                type="text" 
                value={statusText}
                onChange={(e) => setStatusText(e.target.value)}
                className="w-full bg-black/50 border border-purple-700 text-pink-100 rounded px-2 py-1 text-xs focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Visitor Counter Widget */}
            <div className="bg-black/80 border border-cyan-400/60 rounded-lg p-2 text-center">
              <span className="text-[10px] text-cyan-300 uppercase tracking-widest block font-mono">Visitor Counter</span>
              <div className="font-mono text-lg font-black text-yellow-300 tracking-widest bg-gray-950 border border-cyan-900 rounded py-0.5 mt-1">
                {String(visitorCount).padStart(6, '0')}
              </div>
            </div>
          </div>

          {/* Mood Selector Widget */}
          <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
            <h3 className="text-xs font-black uppercase tracking-wider text-pink-300 mb-2 text-center flex items-center justify-center gap-1">
              <span>💖</span> How are you feeling today?
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5 mb-3">
              {moodsList.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setCurrentMood(emoji)}
                  className={`text-xl p-1.5 rounded-lg transition-transform ${
                    currentMood === emoji 
                      ? 'bg-pink-500 scale-125 shadow-[0_0_10px_#ff007f] border border-white' 
                      : 'bg-purple-900/50 hover:bg-pink-800/40 hover:scale-110'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <div className="text-center text-xs text-yellow-200 bg-purple-950 border border-pink-500/40 py-1 rounded">
              Current Mood: <span className="text-lg align-middle ml-1">{currentMood}</span>
            </div>
          </div>

          {/* Top Friends Quick Grid Sidebar Preview */}
          <div className="y2k-card rounded-xl p-3 border-2 border-pink-400">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1">
                <span>⭐</span> Top Friends (4)
              </h3>
              <button onClick={() => setCurrentTab('Friends')} className="text-[10px] text-cyan-300 hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {friends.filter(f => f.top).slice(0, 4).map((friend, idx) => (
                <div key={idx} className="bg-purple-950/80 border border-pink-500/40 rounded p-1.5 text-center hover:border-pink-300 transition">
                  <div className="text-xl mb-0.5">{friend.avatar}</div>
                  <div className="text-[11px] font-bold text-pink-200 truncate">{friend.name}</div>
                  <div className="text-[9px] text-green-400">● {friend.status}</div>
                </div>
              ))}
            </div>
          </div>

        </aside>

        {}
        <section className="lg:col-span-6 space-y-4">
          
          {/* TAB 1: HOME (Publisher + Post Feed) */}
          {currentTab === 'Home' && (
            <>
              {/* Publisher Card */}
              <div className="y2k-card rounded-xl p-4 border-2 border-pink-400 relative">
                <div className="flex items-center justify-between mb-2 border-b border-pink-500/30 pb-2">
                  <h3 className="font-bold text-sm text-pink-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-yellow-300" /> Share something with your school...
                  </h3>
                  <span className="text-xs text-yellow-200 bg-pink-950 px-2 py-0.5 rounded border border-pink-500">
                    Mood: {currentMood}
                  </span>
                </div>
                
                <form onSubmit={handlePostSubmit}>
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="What's happening at school? Gossip, homework complaints, game hype..."
                    className="w-full bg-purple-950/80 border border-pink-400/60 rounded-lg p-3 text-xs text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300 resize-none h-20"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-base">
                      <span className="cursor-pointer hover:scale-125 transition">📷</span>
                      <span className="cursor-pointer hover:scale-125 transition">🎵</span>
                      <span className="cursor-pointer hover:scale-125 transition">💖</span>
                      <span className="cursor-pointer hover:scale-125 transition">⚡</span>
                    </div>
                    <button
                      type="submit"
                      className="y2k-button-pink text-white font-bold text-xs px-5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer transform active:scale-95"
                    >
                      <span>Post</span> 💖
                    </button>
                  </div>
                </form>
              </div>

              {/* Feed Header */}
              <div className="flex items-center justify-between px-1">
                <h3 className="text-sm font-bold text-pink-300 flex items-center gap-1">
                  <span>📰</span> Live School Activity Feed
                </h3>
                <span className="text-[11px] text-cyan-300 font-mono">Updated Real-Time</span>
              </div>

              {/* Stateful Posts List */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="y2k-card rounded-xl p-4 border-2 border-pink-400/80 hover:border-pink-300 transition-all">
                    
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-700 flex items-center justify-center text-lg border border-white">
                          {post.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-pink-200 flex items-center gap-1">
                            {post.author} <span className="text-[10px] text-cyan-300 font-mono">{post.handle}</span>
                          </div>
                          <div className="text-[10px] text-pink-300/70">{post.time}</div>
                        </div>
                      </div>
                      <span className="text-xs bg-purple-900/60 border border-purple-600 px-2 py-0.5 rounded text-pink-300">
                        xoxo
                      </span>
                    </div>

                    {/* Post Content */}
                    <p className="text-xs md:text-sm text-pink-50 my-3 leading-relaxed bg-purple-950/40 p-2.5 rounded-lg border border-purple-800/50">
                      {post.content}
                    </p>

                    {/* Post Like & Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-pink-500/20 text-xs">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all font-bold ${
                          post.isLiked 
                            ? 'bg-pink-600 text-white shadow-[0_0_8px_#ff1493]' 
                            : 'bg-purple-900/60 hover:bg-pink-900/40 text-pink-200'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-white text-white' : 'text-pink-400'}`} />
                        <span>{post.likes} {post.likes === 1 ? 'Like' : 'Likes'}</span>
                      </button>

                      <div className="text-[11px] text-pink-300 flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.comments.length} Comments</span>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-3 pt-3 border-t border-purple-800/40 space-y-2">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="bg-purple-950/80 p-2 rounded text-xs border border-purple-800/60 flex items-start justify-between">
                          <div>
                            <span className="font-bold text-pink-300 mr-1.5">{comment.author}:</span>
                            <span className="text-purple-100">{comment.text}</span>
                          </div>
                        </div>
                      ))}

                      {/* Add Comment Input */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const input = e.target.elements.commentInput;
                          handleAddComment(post.id, input.value);
                          input.value = '';
                        }}
                        className="flex gap-2 mt-2"
                      >
                        <input
                          name="commentInput"
                          type="text"
                          placeholder="Write a comment..."
                          className="flex-1 bg-black/60 border border-pink-500/50 rounded-full px-3 py-1 text-xs text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300"
                        />
                        <button
                          type="submit"
                          className="y2k-button-pink text-white font-bold text-[11px] px-3 py-1 rounded-full"
                        >
                          Send
                        </button>
                      </form>
                    </div>

                  </div>
                ))}
              </div>
            </>
          )}

          {}
          {currentTab === 'My Board' && (
            <div className="space-y-4">
              
              {/* Profile Main Banner Card */}
              <div className="y2k-card rounded-xl p-5 border-2 border-pink-400 relative overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 rounded-lg p-4 border border-pink-200 text-center relative mb-4">
                  <div className="absolute top-2 right-2 bg-yellow-300 text-purple-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Theme: Pink Glitter Princess 💖✨
                  </div>
                  <div className="w-24 h-24 mx-auto rounded-full bg-pink-300 p-1 border-4 border-white shadow-xl mb-2">
                    <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center text-4xl">
                      👸✨
                    </div>
                  </div>
                  <h2 className="text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    xX_Mari&lt;3_Xx
                  </h2>
                  <p className="text-xs text-yellow-200 font-mono">11th Grade • Cheer Team & Drama Club</p>
                  <p className="text-xs text-pink-100 italic mt-2 bg-black/30 max-w-md mx-auto py-1 px-3 rounded-full border border-pink-300/40">
                    "{statusText}"
                  </p>
                </div>

                {/* About Me Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-4">
                  <div className="bg-purple-950/80 p-3 rounded-lg border border-pink-500/40">
                    <h4 className="font-bold text-pink-300 mb-1 flex items-center gap-1">🎸 Favorite Bands</h4>
                    <p className="text-purple-200">Paramore, My Chemical Romance, Avril Lavigne, Evanescence, Fall Out Boy</p>
                  </div>
                  <div className="bg-purple-950/80 p-3 rounded-lg border border-pink-500/40">
                    <h4 className="font-bold text-pink-300 mb-1 flex items-center gap-1">🎬 Favorite Movies</h4>
                    <p className="text-purple-200">Mean Girls, Clueless, Legally Blonde, 13 Going on 30</p>
                  </div>
                </div>

                {/* Top 8 Friends Grid (MySpace Nostalgia) */}
                <div className="bg-purple-950/90 border border-pink-400 rounded-xl p-3 mb-4">
                  <h3 className="text-xs font-black text-pink-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <span>👑</span> Mari's Top 8 Friends
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {friends.slice(0, 8).map((friend, idx) => (
                      <div key={idx} className="bg-purple-900/60 border border-pink-500/40 rounded p-2 text-center hover:scale-105 transition">
                        <div className="text-2xl">{friend.avatar}</div>
                        <div className="text-[11px] font-bold text-pink-200 truncate">{friend.name}</div>
                        <div className="text-[9px] text-cyan-300">{friend.handle}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials / Guestbook Section */}
                <div className="bg-purple-950/90 border border-pink-400 rounded-xl p-3">
                  <h3 className="text-xs font-black text-pink-300 uppercase tracking-wider mb-3 flex items-center gap-1">
                    <span>💌</span> Testimonials / Guestbook ({testimonials.length})
                  </h3>

                  <form onSubmit={handleAddTestimonial} className="mb-3 flex gap-2">
                    <input
                      type="text"
                      value={newTestimonial}
                      onChange={(e) => setNewTestimonial(e.target.value)}
                      placeholder="Leave a sweet testimonial..."
                      className="flex-1 bg-black/60 border border-pink-500/50 rounded-lg px-3 py-1.5 text-xs text-white placeholder-pink-300/40 focus:outline-none focus:border-pink-300"
                    />
                    <button
                      type="submit"
                      className="y2k-button-pink text-white font-bold text-xs px-4 py-1.5 rounded-lg"
                    >
                      Post 💖
                    </button>
                  </form>

                  <div className="space-y-2">
                    {testimonials.map((t, idx) => (
                      <div key={idx} className="bg-purple-900/50 border border-purple-700/60 rounded p-2 text-xs">
                        <div className="flex justify-between items-center text-pink-300 font-bold mb-1">
                          <span>{t.author}</span>
                          <span className="text-[10px] text-gray-400">{t.date}</span>
                        </div>
                        <p className="text-purple-100">{t.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {}
          {currentTab === 'Friends' && (
            <div className="space-y-4">
              <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
                <h3 className="text-base font-bold text-pink-300 mb-1 flex items-center gap-2">
                  <span>👭</span> School Friends List ({friends.length})
                </h3>
                <p className="text-xs text-pink-200/70 mb-4">Connect with your school classmates & top besties!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {friends.map((friend, idx) => (
                    <div key={idx} className="bg-purple-950/80 border-2 border-pink-500/50 rounded-xl p-3 flex items-center justify-between hover:border-pink-300 transition">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl bg-purple-900 p-2 rounded-full border border-pink-400">
                          {friend.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-pink-200 flex items-center gap-1">
                            {friend.name}
                            {friend.top && <span className="text-xs" title="Top Friend">⭐</span>}
                          </div>
                          <div className="text-xs text-cyan-300 font-mono">{friend.handle}</div>
                          <div className="text-[10px] text-green-400 flex items-center gap-1 mt-0.5">
                            ● {friend.status} <span className="text-yellow-200">({friend.mood})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <button 
                          onClick={() => {
                            setChatPartner(friend.name);
                            setCurrentTab('Messages');
                          }}
                          className="y2k-button-pink text-[10px] text-white font-bold px-2.5 py-1 rounded"
                        >
                          Message
                        </button>
                        <button 
                          onClick={triggerNudge}
                          className="y2k-button-blue text-[10px] text-white font-bold px-2.5 py-1 rounded"
                        >
                          Nudge!
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {}
          {currentTab === 'School' && (
            <div className="space-y-4">
              <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
                <h3 className="text-base font-bold text-pink-300 mb-1 flex items-center gap-2">
                  <span>📚</span> XO High Notice Board
                </h3>
                <p className="text-xs text-pink-200/70 mb-4">Official announcements, homework due dates & clubs!</p>

                {/* Dashboard Notice Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <div className="bg-gradient-to-br from-purple-900 to-pink-950 border-2 border-pink-500/60 p-3 rounded-xl">
                    <div className="text-lg font-bold text-yellow-300 flex items-center gap-1.5 mb-1">
                      📚 History Assignment
                    </div>
                    <p className="text-xs text-pink-100">Chapter 7 Essay due Friday by 3:00 PM. Don't forget to cite sources!</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900 to-cyan-950 border-2 border-cyan-500/60 p-3 rounded-xl">
                    <div className="text-lg font-bold text-cyan-300 flex items-center gap-1.5 mb-1">
                      🧪 Science Fair
                    </div>
                    <p className="text-xs text-pink-100">Next Week in the Main Gym! Display setup starts Tuesday afternoon.</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900 to-pink-950 border-2 border-pink-500/60 p-3 rounded-xl">
                    <div className="text-lg font-bold text-pink-300 flex items-center gap-1.5 mb-1">
                      🏈 Football Practice
                    </div>
                    <p className="text-xs text-pink-100">Today at 4:00 PM on Stadium Field. Cheer team practicing at bleachers!</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900 to-purple-950 border-2 border-purple-500/60 p-3 rounded-xl">
                    <div className="text-lg font-bold text-purple-300 flex items-center gap-1.5 mb-1">
                      🎭 Drama Club Meeting
                    </div>
                    <p className="text-xs text-pink-100">Spring Musical auditions sign-up sheet posted outside Auditorium!</p>
                  </div>
                </div>

                {/* Live Student Poll */}
                <div className="bg-purple-950/90 border-2 border-pink-400 rounded-xl p-4">
                  <h4 className="font-bold text-sm text-yellow-300 mb-2 flex items-center gap-1">
                    📊 Student Poll: "What's the best hang spot at lunch?"
                  </h4>

                  <div className="space-y-2 text-xs">
                    {[
                      { key: 'courtyard', label: '🌳 Courtyard Trees' },
                      { key: 'cafeteria', label: '🍕 Cafeteria Corner Table' },
                      { key: 'bleachers', label: '🏈 Stadium Bleachers' },
                      { key: 'library', label: '📚 Quiet Library Back Room' }
                    ].map((opt) => {
                      const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);
                      const count = pollVotes[opt.key];
                      const pct = Math.round((count / totalVotes) * 100);

                      return (
                        <div key={opt.key} className="bg-purple-900/60 p-2 rounded border border-purple-700">
                          <div className="flex justify-between font-bold mb-1 text-pink-200">
                            <span>{opt.label}</span>
                            <span className="text-yellow-300">{count} votes ({pct}%)</span>
                          </div>
                          <div className="w-full bg-black/60 rounded-full h-3 border border-pink-500/40 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-pink-500 to-yellow-400 h-full transition-all duration-500" 
                              style={{ width: `${pct}%` }}
                            ></div>
                          </div>
                          {!hasVoted && (
                            <button
                              onClick={() => handleVote(opt.key)}
                              className="mt-1.5 text-[10px] bg-pink-600 hover:bg-pink-500 text-white font-bold px-2 py-0.5 rounded"
                            >
                              Vote This!
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {hasVoted && <div className="text-[11px] text-green-300 text-center mt-2 font-bold">✓ Thanks for voting!</div>}
                </div>

              </div>
            </div>
          )}

          {}
          {currentTab === 'Events' && (
            <div className="space-y-4">
              <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
                <h3 className="text-base font-bold text-pink-300 mb-1 flex items-center gap-2">
                  <span>💃</span> Upcoming School Events
                </h3>
                <p className="text-xs text-pink-200/70 mb-4">RSVP and see who else is going!</p>

                <div className="space-y-4">
                  {[
                    {
                      id: 'dance',
                      title: '💃 Y2K Neon Homecoming Dance',
                      date: 'Friday, Oct 24 • 7:00 PM',
                      location: 'Main Gymnasium',
                      desc: 'Dress code: Neon, Glitter, and 2000s Glam! Live DJ playing hit pop tracks.'
                    },
                    {
                      id: 'game',
                      title: '🏈 Big Rivalry Football Game',
                      date: 'Friday, Oct 17 • 6:30 PM',
                      location: 'XO Stadium',
                      desc: 'Pack the stands! Wear pink to support our cheer team and football squad.'
                    },
                    {
                      id: 'talent',
                      title: '🎤 Annual High School Talent Show',
                      date: 'Thursday, Nov 06 • 5:00 PM',
                      location: 'School Auditorium',
                      desc: 'Singing, dancing, band performances and surprise teacher comedy routines!'
                    }
                  ].map((evt) => (
                    <div key={evt.id} className="bg-purple-950/90 border-2 border-pink-500/60 rounded-xl p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-sm text-yellow-300">{evt.title}</h4>
                        <span className="text-[11px] bg-pink-900 border border-pink-400 text-pink-200 px-2 py-0.5 rounded font-mono">
                          {evt.date}
                        </span>
                      </div>
                      <p className="text-xs text-cyan-300 font-mono mb-1">📍 Location: {evt.location}</p>
                      <p className="text-xs text-purple-100 mb-3">{evt.desc}</p>

                      <div className="flex items-center gap-2 pt-2 border-t border-purple-800">
                        <span className="text-xs font-bold text-pink-300">Your RSVP:</span>
                        {['Going', 'Maybe', "Can't Go"].map((status) => (
                          <button
                            key={status}
                            onClick={() => setEventRsvp({ ...eventRsvp, [evt.id]: status })}
                            className={`text-xs px-3 py-1 rounded-full font-bold transition-all ${
                              eventRsvp[evt.id] === status
                                ? 'bg-pink-500 text-white shadow-[0_0_8px_#ff007f]'
                                : 'bg-purple-900/60 text-pink-200 hover:bg-pink-900/40'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {}
          {currentTab === 'Messages' && (
            <div className="y2k-window rounded-xl p-3 border-2 border-white shadow-2xl">
              
              {/* MSN Window Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-purple-800 text-white px-3 py-1.5 rounded-t-lg text-xs font-bold mb-2 border-b border-white/40">
                <div className="flex items-center gap-2">
                  <span className="text-sm">💬</span> MSN Messenger - Live Chat
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px]">
                  <span className="bg-red-500 hover:bg-red-600 px-1.5 py-0.5 rounded border border-white cursor-pointer">X</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 h-96">
                
                {/* Chat Partner Selector (Left Column) */}
                <div className="sm:col-span-4 bg-purple-950/90 border border-pink-400 rounded-lg p-2 space-y-1 overflow-y-auto">
                  <div className="text-[10px] font-bold text-pink-300 uppercase tracking-wider mb-2 border-b border-pink-500/30 pb-1">
                    Online Buddies (3)
                  </div>
                  {Object.keys(chatMessages).map((name) => (
                    <button
                      key={name}
                      onClick={() => setChatPartner(name)}
                      className={`w-full text-left p-2 rounded text-xs flex items-center gap-2 transition ${
                        chatPartner === name 
                          ? 'bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold border border-pink-300' 
                          : 'bg-purple-900/40 hover:bg-pink-900/30 text-pink-200'
                      }`}
                    >
                      <span className="text-sm">👧</span>
                      <div className="truncate">
                        <div className="truncate">{name}</div>
                        <div className="text-[9px] text-green-300">● Online</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* MSN Active Conversation (Right Column) */}
                <div className="sm:col-span-8 bg-black/80 border border-cyan-400 rounded-lg p-3 flex flex-col justify-between">
                  
                  {/* Chat Top Banner & NUDGE Button */}
                  <div className="flex items-center justify-between border-b border-cyan-800 pb-2 mb-2">
                    <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                      <span>Chatting with:</span>
                      <span className="text-yellow-300 font-mono">{chatPartner}</span>
                    </div>
                    <button
                      onClick={triggerNudge}
                      className="y2k-button-pink text-[10px] text-white font-black px-2.5 py-1 rounded-full animate-bounce"
                    >
                      💥 Send NUDGE!
                    </button>
                  </div>

                  {/* Message Bubbles */}
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1 my-2">
                    {(chatMessages[chatPartner] || []).map((msg, idx) => {
                      const isMe = msg.sender === 'Mari<3';
                      return (
                        <div key={idx} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-2 text-xs ${
                            isMe 
                              ? 'bg-gradient-to-r from-pink-600 to-purple-700 text-white border border-pink-300' 
                              : 'bg-purple-900 border border-cyan-400 text-cyan-100'
                          }`}>
                            <div className="font-bold text-[10px] text-yellow-200 mb-0.5">{msg.sender}</div>
                            <div>{msg.text}</div>
                          </div>
                          <span className="text-[9px] text-gray-400 mt-0.5 px-1">{msg.time}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Input & Send Form */}
                  <form onSubmit={handleSendChatMessage} className="flex gap-1.5 pt-2 border-t border-cyan-900">
                    <input
                      type="text"
                      value={inputChatMessage}
                      onChange={(e) => setInputChatMessage(e.target.value)}
                      placeholder="Type MSN message..."
                      className="flex-1 bg-purple-950 border border-cyan-400 rounded px-3 py-1 text-xs text-white placeholder-cyan-300/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="y2k-button-blue text-white font-bold text-xs px-4 py-1 rounded"
                    >
                      Send
                    </button>
                  </form>

                </div>

              </div>
            </div>
          )}

          {}
          {currentTab === 'Photos' && (
            <div className="space-y-4">
              <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
                <h3 className="text-base font-bold text-pink-300 mb-1 flex items-center gap-2">
                  <span>📸</span> Mari's Polaroid Photo Album
                </h3>
                <p className="text-xs text-pink-200/70 mb-5">Click any polaroid photo to expand and read memory notes!</p>

                {/* Polaroid Tilted Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { id: 1, emoji: '🌅', title: 'Sunset at Stadium', date: 'Oct 02', tilt: '-rotate-3' },
                    { id: 2, emoji: '🤳', title: 'Mirror Selfie', date: 'Oct 05', tilt: 'rotate-2' },
                    { id: 3, emoji: '💖', title: 'Besties Forever', date: 'Oct 08', tilt: '-rotate-2' },
                    { id: 4, emoji: '🏫', title: 'School Front Yard', date: 'Oct 10', tilt: 'rotate-3' },
                    { id: 5, emoji: '😊', title: 'Drama Club Auditions', date: 'Oct 11', tilt: '-rotate-1' },
                    { id: 6, emoji: '👥', title: 'Lunch Squad', date: 'Oct 12', tilt: 'rotate-2' }
                  ].map((photo) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedPhoto(photo)}
                      className={`bg-white text-gray-900 p-3 pt-4 rounded shadow-xl cursor-pointer transform hover:scale-105 transition duration-200 ${photo.tilt} border border-gray-300`}
                    >
                      <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 h-28 rounded flex items-center justify-center text-5xl mb-3 shadow-inner border border-gray-200">
                        {photo.emoji}
                      </div>
                      <div className="font-serif text-center font-bold text-xs text-purple-950 truncate">
                        {photo.title}
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono text-center">
                        {photo.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Lightbox Modal */}
              {selectedPhoto && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-purple-950 border-4 border-pink-400 max-w-sm w-full rounded-2xl p-5 text-center relative shadow-2xl">
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute top-2 right-2 bg-pink-600 text-white font-bold w-7 h-7 rounded-full border-2 border-white"
                    >
                      ✕
                    </button>
                    <div className="text-7xl my-4 bg-purple-900 p-6 rounded-xl border-2 border-pink-300 inline-block">
                      {selectedPhoto.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-pink-300 mb-1">{selectedPhoto.title}</h3>
                    <p className="text-xs text-cyan-300 font-mono mb-3">Taken on {selectedPhoto.date} • XO High</p>
                    <p className="text-xs text-pink-100 bg-black/40 p-3 rounded-lg border border-pink-500/30">
                      "Such an unforgettable Y2K moment with the squad! Stored forever in my XO album 💕"
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

        </section>

        {}
        <aside className="lg:col-span-3 space-y-4">
          
          {/* XO School Buzz Top Trending Card */}
          <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
            <h3 className="text-xs font-black uppercase tracking-wider text-pink-300 mb-3 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-yellow-300 animate-bounce" /> XO SCHOOL BUZZ
            </h3>
            <div className="space-y-2 text-xs font-bold">
              {[
                { rank: '#1', text: 'Football Game 🏈', desc: 'Friday Night Lights' },
                { rank: '#2', text: 'New Student 👀', desc: 'Spotted in Hallway' },
                { rank: '#3', text: 'School Dance 💃', desc: 'Theme Announced!' },
                { rank: '#4', text: 'Math Test 📝', desc: 'Study Groups Formed' },
                { rank: '#5', text: 'Spring Break ☀️️', desc: 'Countdown Begins' }
              ].map((item, idx) => (
                <div key={idx} className="bg-purple-950/80 border border-pink-500/40 rounded p-2 flex items-center justify-between hover:border-pink-300 transition">
                  <div>
                    <div className="text-pink-200">{item.text}</div>
                    <div className="text-[9px] text-cyan-300">{item.desc}</div>
                  </div>
                  <span className="text-xs font-mono font-black text-yellow-300 bg-pink-950 px-1.5 py-0.5 rounded border border-pink-500">
                    {item.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Online Friends MSN Status List */}
          <div className="y2k-card rounded-xl p-4 border-2 border-pink-400">
            <h3 className="text-xs font-black uppercase tracking-wider text-pink-300 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1">🟢 ONLINE CLASSMATES</span>
              <span className="text-[10px] text-green-400 font-mono">All Online</span>
            </h3>

            <div className="space-y-2">
              {friends.slice(0, 6).map((f, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs bg-purple-950/60 p-1.5 rounded border border-purple-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{f.avatar}</span>
                    <div>
                      <div className="font-bold text-pink-200 leading-none">{f.name}</div>
                      <div className="text-[9px] text-gray-400 font-mono">{f.handle}</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full border border-black animate-pulse"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Y2K Badges / Blinkies Cards */}
          <div className="y2k-card rounded-xl p-3 border-2 border-pink-400 text-center space-y-2">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded p-2 font-black text-xs text-yellow-200 border border-white shadow-md uppercase tracking-wider animate-pulse">
              ✨ GOOD VIBES ONLY ✨
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded p-2 font-black text-xs text-white border border-white shadow-md uppercase tracking-wider">
              💙 BETTER TOGETHER 💙
            </div>
            
            {/* Retro Blinkie Badges */}
            <div className="flex flex-wrap justify-center gap-1 pt-1">
              <span className="bg-pink-700 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-pink-300 text-pink-100">
                [PINK_POWER]
              </span>
              <span className="bg-cyan-700 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-cyan-300 text-cyan-100">
                [Y2K_BABY]
              </span>
              <span className="bg-purple-700 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-purple-300 text-purple-100">
                [XOXO_2006]
              </span>
            </div>
          </div>

        </aside>

      </main>

      {}
      <footer className="max-w-6xl mx-auto px-4 mt-8 text-center text-xs text-pink-300/60 font-serif">
        <div className="y2k-card rounded-xl p-3 border border-pink-500/40">
          <p className="mb-1">XO Social Network © 2006 • Built for High School Memories 💕</p>
          <p className="text-[10px] text-cyan-300/60 font-mono">Best viewed in Internet Explorer 6.0 at 1024x768 resolution.</p>
        </div>
      </footer>

    </div>
  );
}