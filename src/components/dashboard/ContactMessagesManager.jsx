import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Trash2, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactMessagesManager() {
  const queryClient = useQueryClient();
  const { data: messages = [] } = useQuery({
    queryKey: ['contactMessages'],
    queryFn: () => base44.entities.ContactMessage.list('-created_date')
  });

  const toggleReadMutation = useMutation({
    mutationFn: ({ id, read }) => base44.entities.ContactMessage.update(id, { read }),
    onSuccess: () => {
      queryClient.invalidateQueries(['contactMessages']);
      toast.success('Message updated');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.ContactMessage.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['contactMessages']);
      toast.success('Message deleted');
    }
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">Contact Messages</h2>

      <div className="grid gap-4">
        {messages.map((message) => (
          <Card key={message.id} className={`${message.read ? 'bg-white/5' : 'bg-blue-500/10'} border-white/10`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className={`w-4 h-4 ${message.read ? 'text-white/30' : 'text-blue-400'}`} />
                    <h3 className="text-lg font-semibold text-white">{message.name}</h3>
                    {!message.read && <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">New</span>}
                  </div>
                  <p className="text-white/70 text-sm mb-1">{message.email}</p>
                  {message.subject && (
                    <p className="text-white/60 text-sm font-medium mb-2">Subject: {message.subject}</p>
                  )}
                  <p className="text-white/80 text-sm mb-2">{message.message}</p>
                  <p className="text-white/40 text-xs">
                    {new Date(message.created_date).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleReadMutation.mutate({ id: message.id, read: !message.read })}
                  >
                    <Check className={`w-4 h-4 ${message.read ? 'text-white/30' : 'text-white'}`} />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deleteMutation.mutate(message.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {messages.length === 0 && (
          <p className="text-white/50 text-center py-12">No messages yet</p>
        )}
      </div>
    </div>
  );
}