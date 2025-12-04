import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Megaphone, TrendingUp, Trophy, Calendar } from 'lucide-react';

const categoryConfig = {
  announcement: { icon: Megaphone, color: 'bg-blue-500/20 text-blue-300 border-blue-500/30', label: 'Announcement' },
  progress: { icon: TrendingUp, color: 'bg-green-500/20 text-green-300 border-green-500/30', label: 'Progress' },
  milestone: { icon: Trophy, color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', label: 'Milestone' },
  event: { icon: Calendar, color: 'bg-purple-500/20 text-purple-300 border-purple-500/30', label: 'Event' }
};

export default function UpdateCard({ update, index }) {
  const config = categoryConfig[update.category] || categoryConfig.progress;
  const Icon = config.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
        {update.image_url && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={update.image_url} 
              alt={update.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${config.color} border flex items-center gap-1.5`}>
              <Icon className="w-3.5 h-3.5" />
              {config.label}
            </Badge>
            <span className="text-indigo-300/50 text-sm">
              {format(new Date(update.created_date), 'MMM d, yyyy')}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
            {update.title}
          </h3>
          
          <p className="text-indigo-200/70 leading-relaxed">
            {update.content}
          </p>
        </div>
      </div>
    </motion.article>
  );
}