import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

const SWIPE_DISTANCE = 40
const AUTOPLAY_MS = 6000

function DraggableCard({ isActive, onDragStart, onDragEnd, children }) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-220, 0, 220], [-9, 0, 9])

  return (
    <motion.div
      className="carousel__card"
      style={{ x, rotate }}
      drag={isActive ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 35, bounceDamping: 12 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  )
}

function Carousel({ label, items, renderItem }) {
  const total = items.length
  const [index, setIndex] = useState(0)
  const [hasFocus, setHasFocus] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const isRotating = !prefersReducedMotion && !hasFocus && !isDragging

  useEffect(() => {
    if (!isRotating) return
    const timer = setTimeout(() => setIndex((current) => (current + 1) % total), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [isRotating, index, total])

  const goTo = (next) => setIndex(((next % total) + total) % total)

  const getOffset = (i) => {
    let distance = i - index
    const half = total / 2
    if (distance > half) distance -= total
    if (distance < -half) distance += total
    return distance
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  const handleDragEnd = (_event, info) => {
    setIsDragging(false)
    const swipe = info.offset.x + info.velocity.x * 0.2
    if (swipe < -SWIPE_DISTANCE) goTo(index + 1)
    else if (swipe > SWIPE_DISTANCE) goTo(index - 1)
  }

  const handleFocus = (event) => {
    if (event.target.matches(':focus-visible')) setHasFocus(true)
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
  }

  return (
    <motion.div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="carousel__viewport">
        <div className="carousel__stage">
          {items.map((item, i) => {
            const offset = getOffset(i)
            const distance = Math.abs(offset)
            const isActive = offset === 0

            return (
              <motion.div
                key={item.id}
                className={isActive ? 'carousel__slide carousel__slide--active' : 'carousel__slide'}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                aria-hidden={!isActive}
                inert={!isActive}
                initial={false}
                animate={{
                  x: `${offset * 100}%`,
                  y: isActive ? 8 : 24,
                  scale: isActive ? 1.1 : 0.68,
                  rotateY: Math.max(-1, Math.min(1, offset)) * -50,
                  opacity: distance === 0 ? 1 : distance === 1 ? 0.3 : 0,
                  filter: isActive ? 'blur(0px)' : 'blur(3px)',
                }}
                transition={{ type: 'spring', stiffness: 28, damping: 11 }}
                style={{ zIndex: 10 - distance }}
              >
                <DraggableCard
                  isActive={isActive}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                >
                  {renderItem(item)}
                </DraggableCard>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="carousel__controls">
        <ul className="carousel__dots">
          {items.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                className="carousel__dot"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${item.title}`}
                aria-current={i === index ? 'true' : undefined}
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="visually-hidden" aria-live={isRotating ? 'off' : 'polite'}>
        {`Slide ${index + 1} of ${total}: ${items[index].title}`}
      </p>
    </motion.div>
  )
}

export default Carousel