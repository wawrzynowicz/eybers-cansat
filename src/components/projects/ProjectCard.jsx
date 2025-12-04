import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Target, Satellite } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const statusColors = {
  planning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  in_progress: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  completed: 'bg-green-500/20 text-green-300 border-green-500/30'
};

const statusLabels = {
  planning: 'Planning',
  in_progress: 'In Progress',
  completed: 'Completed'
};

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${
        project.featured 
          ? 'border-indigo-500/30 shadow-xl shadow-indigo-500/10' 
          : 'border-white/10 hover:border-white/20'
      }`}>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
              Featured
            </Badge>
          </div>
        )}

        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          {project.image_url ? (
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-600/50 to-purple-700/50 flex items-center justify-center">
              <Satellite className="w-16 h-16 text-white/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4">
            <Badge className={`${statusColors[project.status || 'in_progress']} border`}>
              {statusLabels[project.status || 'in_progress']}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-indigo-200/70 leading-relaxed mb-4">{project.summary}</p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {project.description && (
                  <p className="text-indigo-200/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                )}

                {project.objectives && project.objectives.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-400" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-indigo-200/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-indigo-300 hover:text-white hover:bg-white/5 rounded-full"
          >
            {expanded ? (
              <>Show Less <ChevronUp className="w-4 h-4 ml-2" /></>
            ) : (
              <>Learn More <ChevronDown className="w-4 h-4 ml-2" /></>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}