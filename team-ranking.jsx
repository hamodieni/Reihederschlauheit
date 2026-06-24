import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TeamRanking() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  const teamMembers = [
    { name: 'HAMZA', title: 'Der König', icon: '👑', order: 1, color: '#FFD700' },
    { name: 'JONAS', title: 'Der Schlaue', icon: '🧠', order: 2, color: '#64B5F6' },
    { name: 'NAVRUP', title: 'Der Diktator', icon: '⚡', order: 3, color: '#FF6B6B' },
    { name: 'EMIL', title: 'The King', icon: '💎', order: 4, color: '#00E5FF' },
    { name: 'JANLUCA', title: 'Mit den Lösungen', icon: '🔑', order: 5, color: '#76FF03' },
    { name: 'JUSUF', title: 'Der Kämpfer', icon: '🥊', order: 6, color: '#FF9800' },
    { name: 'LUKE', title: 'Der Krasse', icon: '🚀', order: 7, color: '#E91E63' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        
        {/* Animated Title */}
        <div className="text-center mb-12 relative z-10">
          <h1 
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #64B5F6 50%, #00E5FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 1 - scrollY / 1000,
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'all 0.1s ease-out',
            }}
          >
            ELITE CREW
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 tracking-widest mb-8">
            THE RANKING SYSTEM
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                style={{
                  opacity: 0.3 + (0.7 * (i % 3 === 0 ? 1 : 0.5)),
                  animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
            DIE CREW
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Image 1 */}
            <div 
              className="group relative overflow-hidden rounded-2xl"
              style={{
                transform: `perspective(1200px) rotateY(${-mousePos.x * 0.01}deg) rotateX(${mousePos.y * 0.01}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwwGBAMDAwgIBBMNBwkJCQsFFwgICgsJCAgKCAkKDA0MCAgMCAkKD/2wBDAQICAgICAwUDAwwKCAcICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCD/wAARCAANCQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==" 
                alt="Crew Photo 1"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div 
              className="group relative overflow-hidden rounded-2xl"
              style={{
                transform: `perspective(1200px) rotateY(${mousePos.x * 0.01}deg) rotateX(${mousePos.y * 0.01}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwDAwwGBAMDAwgIBBMNBwkJCQsFFwgICgsJCAgKCAkKDA0MCAgMCAkKD/2wBDAQICAgICAwUDAwwKCAcICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCD/wAARCAANCQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==" 
                alt="Crew Photo 2"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Ranking Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400">
              RANKING SYSTEM
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`,
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className="relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 p-8 h-full transition-all duration-500 hover:border-white/30"
                  style={{
                    transform: activeCard === idx 
                      ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) scale(1.05)' 
                      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
                    boxShadow: activeCard === idx
                      ? `0 20px 60px ${member.color}40`
                      : '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}20 0%, transparent 100%)`,
                    }}
                  />

                  {/* Rank Badge */}
                  <div className="relative z-10 mb-6 flex items-center justify-between">
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-full border-2 text-2xl font-black"
                      style={{
                        borderColor: member.color,
                        backgroundColor: `${member.color}20`,
                        color: member.color,
                        transform: activeCard === idx ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      #{member.order}
                    </div>
                    <span className="text-4xl">{member.icon}</span>
                  </div>

                  {/* Name */}
                  <h3 
                    className="text-2xl font-black mb-2 tracking-widest"
                    style={{
                      color: member.color,
                      textShadow: `0 0 20px ${member.color}60`,
                    }}
                  >
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="text-gray-300 text-lg font-bold tracking-wide mb-6">
                    {member.title}
                  </p>

                  {/* Animated Line */}
                  <div 
                    className="h-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${member.color}, transparent)`,
                      width: activeCard === idx ? '100%' : '0%',
                      transition: 'width 0.6s ease-out',
                    }}
                  />

                  {/* Stats Bars */}
                  <div className="mt-8 space-y-4">
                    {['Power', 'Skill', 'Style'].map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">{stat}</p>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${member.color}, ${member.color}80)`,
                              width: activeCard === idx ? `${70 + i * 15}%` : `${50 + i * 10}%`,
                              transition: 'width 0.6s ease-out',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-gray-400 mb-4">
            ELITE CREW RANKING SYSTEM 2024
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: '8px',
                  backgroundColor: member.color,
                  opacity: 0.6,
                  animation: `pulse ${1.5 + idx * 0.1}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 ELITE CREW. All rights reserved.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.5);
          }
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(100, 181, 246, 0.5) rgba(0, 0, 0, 0.1);
        }

        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        *::-webkit-scrollbar-thumb {
          background: rgba(100, 181, 246, 0.5);
          border-radius: 4px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 181, 246, 0.8);
        }
      `}</style>
    </div>
  );
}