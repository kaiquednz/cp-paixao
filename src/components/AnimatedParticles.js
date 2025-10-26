// components/AnimatedParticles.js
'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Configurações do canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Partículas
    const particles = []
    const particleCount = 80

    // Cores das partículas (verdes e marrons)
    const colors = [
      'rgba(42, 157, 143, 0.6)',   // Verde água
      'rgba(38, 70, 83, 0.7)',     // Verde escuro
      'rgba(233, 196, 106, 0.5)',  // Dourado
      'rgba(244, 162, 97, 0.4)',   // Marrom claro
      'rgba(231, 111, 81, 0.3)',   // Marrom avermelhado
    ]

    // Classe Partícula
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.6 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Rebater nas bordas
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY

        // Flutuação suave
        this.x += Math.sin(this.y * 0.01) * 0.3
        this.y += Math.cos(this.x * 0.01) * 0.3
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Conectar partículas próximas
    function connectParticles() {
      const maxDistance = 150
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.save()
            ctx.globalAlpha = 0.2 * (1 - distance / maxDistance)
            ctx.strokeStyle = '#2a9d8f'
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    // Animação
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Redimensionar
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}