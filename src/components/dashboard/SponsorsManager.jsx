import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function SponsorsManager() {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', description: '', description_pl: '', cooperation_scope: '', cooperation_scope_pl: '',
    logo_url: '', website: '', order: 0
  });

  const queryClient = useQueryClient();
  const { data: sponsors = [] } = useQuery({
    queryKey: ['sponsors'],
    queryFn: () => base44.entities.Sponsor.list('order')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Sponsor.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['sponsors']);
      setShowForm(false);
      resetForm();
      toast.success('Sponsor added');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Sponsor.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['sponsors']);
      setEditingId(null);
      toast.success('Sponsor updated');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Sponsor.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['sponsors']);
      toast.success('Sponsor deleted');
    }
  });

  const resetForm = () => {
    setFormData({ name: '', description: '', description_pl: '', cooperation_scope: '', cooperation_scope_pl: '', logo_url: '', website: '', order: 0 });
  };

  const handleEdit = (sponsor) => {
    setFormData(sponsor);
    setEditingId(sponsor.id);
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
        <h2 className="text-2xl font-semibold text-white">Sponsors</h2>
        <Button onClick={() => setShowForm(true)} disabled={showForm || editingId}>
          <Plus className="w-4 h-4 mr-2" /> Add Sponsor
        </Button>
      </div>

      {(showForm || editingId) && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{editingId ? 'Edit Sponsor' : 'New Sponsor'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            <Textarea
              placeholder="Cooperation Scope (EN)"
              value={formData.cooperation_scope}
              onChange={(e) => setFormData({ ...formData, cooperation_scope: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Cooperation Scope (PL)"
              value={formData.cooperation_scope_pl}
              onChange={(e) => setFormData({ ...formData, cooperation_scope_pl: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Logo URL"
              value={formData.logo_url}
              onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
              className="bg-white/5 border-white/20 text-white"
            />
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={!formData.name}>
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
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  {sponsor.logo_url && (
                    <img src={sponsor.logo_url} alt={sponsor.name} className="w-16 h-16 object-contain" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{sponsor.name}</h3>
                    <p className="text-white/70 text-sm mb-2">{sponsor.description}</p>
                    {sponsor.website && (
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm">
                        {sponsor.website}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(sponsor)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deleteMutation.mutate(sponsor.id)}>
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