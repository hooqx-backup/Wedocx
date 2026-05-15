import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ease } from '../lib/animations';

export default function VideoModal({ open, onClose, videoSrc }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease }}
            className="relative w-full max-w-4xl aspect-video z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videoSrc}
              className="w-full h-full rounded-2xl"
              controls
              autoPlay
              playsInline
            />
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors text-lg leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
