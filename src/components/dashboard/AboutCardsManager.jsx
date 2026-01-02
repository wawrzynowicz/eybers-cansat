import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AboutCardsManager() {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', title_pl: '', description: '', description_pl: '', icon: 'Users', order: 0
  });

  const queryClient = useQueryClient();
  const { data: cards = [] } = useQuery({
    queryKey: ['aboutCards'],
    queryFn: () => base44.entities.AboutCard.list('order')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.AboutCard.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['aboutCards']);
      setShowForm(false);
      resetForm();
      toast.success('Card created');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.AboutCard.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['aboutCards']);
      setEditingId(null);
      toast.success('Card updated');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.AboutCard.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['aboutCards']);
      toast.success('Card deleted');
    }
  });

  const resetForm = () => {
    setFormData({ title: '', title_pl: '', description: '', description_pl: '', icon: 'Users', order: 0 });
  };

  const handleEdit = (card) => {
    setFormData(card);
    setEditingId(card.id);
  };

  const handleSave = () => {
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">About Cards</h2>
        <Button onClick={() => setShowForm(true)} disabled={showForm || editingId}>
          <Plus className="w-4 h-4 mr-2" /> Add Card
        </Button>
      </div>

      {(showForm || editingId) && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{editingId ? 'Edit Card' : 'New Card'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Title (EN)"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Title (PL)"
              value={formData.title_pl}
              onChange={(e) => setFormData({ ...formData, title_pl: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Description (EN)"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Description (PL)"
              value={formData.description_pl}
              onChange={(e) => setFormData({ ...formData, description_pl: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Select value={formData.icon} onValueChange={(value) => setFormData({ ...formData, icon: value })}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Users">Users</SelectItem>
                <SelectItem value="Rocket">Rocket</SelectItem>
                <SelectItem value="Trophy">Trophy</SelectItem>
                <SelectItem value="Target">Target</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
              className="bg-white/5 border-white/20 text-white"
            />
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={!formData.title || !formData.description}>
                <Save className="w-4 h-4 mr-2" /> Save
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" /> Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {cards.map((card) => (
          <Card key={card.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm mb-1">{card.description}</p>
                  <p className="text-white/50 text-xs">Order: {card.order} | Icon: {card.icon}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(card)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deleteMutation.mutate(card.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}