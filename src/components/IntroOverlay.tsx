import { useEffect, useRef, useState } from 'react'
import introMp4 from '../assets/video/intro.mp4'
import introWebm from '../assets/video/intro.webm'
import introPoster from '../assets/video/intro-poster.jpg'

const SESSION_KEY = 'introSeen'
const FADE_MS = 500
const FALLBACK_MS = 11000

function shouldShowIntro(): boolean {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  } catch {
    /* matchMedia indisponível — segue o fluxo normal */
  }
  try {
    if (sessionStorage.getItem(SESSION_KEY) === '1') return false
  } catch {
    /* sessionStorage bloqueado (ex.: modo privado) — mostra a intro mesmo assim */
  }
  return true
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    /* ignora — pior caso, a intro reaparece na próxima carga */
  }
}

export default function IntroOverlay() {
  const [visible] = useState(shouldShowIntro)
  const [closing, setClosing] = useState(false)
  const [hidden, setHidden] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const closedRef = useRef(false)

  const close = () => {
    if (closedRef.current) return
    closedRef.current = true
    markIntroSeen()
    setClosing(true)
    setTimeout(() => setHidden(true), FADE_MS)
  }

  useEffect(() => {
    if (!visible || hidden) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible, hidden])

  useEffect(() => {
    if (!visible) return

    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {
        /* autoplay bloqueado pelo navegador — o botão Pular resolve */
      })
    }

    const onEnded = () => close()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    video?.addEventListener('ended', onEnded)
    window.addEventListener('keydown', onKeyDown)
    const fallback = setTimeout(close, FALLBACK_MS)

    return () => {
      video?.removeEventListener('ended', onEnded)
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(fallback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (!visible) return null

  return (
    <div
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: hidden ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: closing ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        preload="auto"
        poster={introPoster}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      >
        <source src={introMp4} type="video/mp4" />
        <source src={introWebm} type="video/webm" />
      </video>

      <button
        type="button"
        onClick={close}
        aria-label="Pular introdução"
        style={{
          position: 'absolute',
          right: 'max(16px, env(safe-area-inset-right))',
          bottom: 'max(16px, env(safe-area-inset-bottom))',
          padding: '10px 20px',
          borderRadius: 9999,
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          color: '#ffffff',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.02em',
          cursor: 'pointer',
        }}
      >
        Pular
      </button>
    </div>
  )
}
