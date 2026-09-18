import { useEffect, useCallback } from 'react'
import { useAnimate, useInView, stagger as motionStagger, type Transition } from 'framer-motion'

type Message = { text: string; sender: 'me' | 'them' }

const MESSAGES: Message[] = [
  { text: 'Chegou o sinal da manhã, bora conferir? 👀', sender: 'them' },
  { text: 'Vi! Gestão de risco batendo certinho com o playbook.', sender: 'me' },
  { text: 'Exatamente assim que o método pede. 🚀', sender: 'them' },
]

const SHOWN = { opacity: 1, scale: 1, y: 0 }
const TRANSITION: Transition = { type: 'spring', stiffness: 450, damping: 28, mass: 1 }

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl px-3.5 py-2.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '18px 18px 18px 4px' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot"
          style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#9aa3ad', display: 'inline-block', opacity: 0.5 }}
        />
      ))}
    </div>
  )
}

export default function LiveChat() {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, { once: true, amount: 0.4 })

  const runAppear = useCallback(() => {
    animate('.msg-item', SHOWN, { ...TRANSITION, delay: motionStagger(0.16) })
    animate(
      '.typing-dot',
      { y: [0, -5, 0], opacity: [0.35, 1, 0.35] },
      { duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: motionStagger(0.18) }
    )
  }, [animate])

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(runAppear, 80)
    return () => clearTimeout(t)
  }, [inView, runAppear])

  return (
    <div
      ref={scope}
      className="glow-card-strong flex flex-col gap-2.5 rounded-2xl bg-grafite/80 p-5"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {MESSAGES.map((msg, i) => {
        const isMe = msg.sender === 'me'
        return (
          <div key={i} className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'}`}>
            <div
              className="msg-item max-w-[80%] px-3.5 py-2.5 text-sm leading-snug"
              style={{
                opacity: 0,
                backgroundColor: isMe ? '#00d4ff' : 'rgba(255,255,255,0.06)',
                color: isMe ? '#0d0d0d' : '#e5e7eb',
                borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        )
      })}

      <div className="msg-item flex justify-start" style={{ opacity: 0 }}>
        <TypingDots />
      </div>
    </div>
  )
}
