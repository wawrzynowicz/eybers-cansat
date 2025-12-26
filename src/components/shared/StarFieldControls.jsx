import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Sparkles, Zap } from 'lucide-react';
import { useStarField } from './StarFieldContext';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function StarFieldControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings } = useStarField();

  return (
    <>
      {/* Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white shadow-lg"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 z-50 w-80 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Starfield Settings
                </h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Controls */}
              <div className="space-y-6">
                {/* Speed Control */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm text-white/70 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Animation Speed
                    </label>
                    <span className="text-sm text-white font-mono">
                      {settings.speed.toFixed(1)}x
                    </span>
                  </div>
                  <Slider
                    value={[settings.speed]}
                    onValueChange={([value]) => updateSettings({ speed: value })}
                    min={0.1}
                    max={3}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-1">
                    <span>Slow</span>
                    <span>Fast</span>
                  </div>
                </div>

                {/* Density Control */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm text-white/70 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Star Density
                    </label>
                    <span className="text-sm text-white font-mono">
                      {Math.round(settings.density * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[settings.density]}
                    onValueChange={([value]) => updateSettings({ density: value })}
                    min={0.2}
                    max={2}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-1">
                    <span>Sparse</span>
                    <span>Dense</span>
                  </div>
                </div>

                {/* Reset Button */}
                <Button
                  onClick={() => updateSettings({ speed: 1, density: 1 })}
                  variant="outline"
                  className="w-full border-white/20 text-white/70 hover:text-white hover:bg-white/10"
                >
                  Reset to Default
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}