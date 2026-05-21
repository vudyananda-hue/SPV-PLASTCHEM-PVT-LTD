import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('spv_preloader_run')
    if (hasLoaded) {
      setLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('spv_preloader_run', 'true')
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-950 text-white"
          exit={{ 
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,119,34,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-4">
            <motion.span
              className="text-[0.6rem] sm:text-xs font-bold tracking-[0.3em] uppercase text-neutral-400 mb-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              S P V  P L A S T C H E M
            </motion.span>

            <div className="overflow-hidden mb-5">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.1em] text-white uppercase font-heading text-center"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                (PRIVATE) LIMITED
              </motion.h1>
            </div>

            <div className="w-48 sm:w-60 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: [0.86, 0, 0.07, 1], delay: 0.3 }}
              />
            </div>

            <motion.p
              className="text-[0.65rem] sm:text-xs text-neutral-400 mt-4 tracking-wider text-center max-w-xs font-medium uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              We Drive You To The Innovation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
