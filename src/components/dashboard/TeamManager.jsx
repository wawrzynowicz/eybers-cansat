import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function TeamManager() {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', role: '', bio: '', bio_pl: '', image_url: '', order: 0
  });

  const queryClient = useQueryClient();
  const { data: members = [] } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => base44.entities.TeamMember.list('order')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.TeamMember.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['teamMembers']);
      setShowForm(false);
      resetForm();
      toast.success('Team member added');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.TeamMember.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['teamMembers']);
      setEditingId(null);
      toast.success('Team member updated');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.TeamMember.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['teamMembers']);
      toast.success('Team member deleted');
    }
  });

  const resetForm = () => {
    setFormData({ name: '', role: '', bio: '', bio_pl: '', image_url: '', order: 0 });
  };

  const handleEdit = (member) => {
    setFormData(member);
    setEditingId(member.id);
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
        <h2 className="text-2xl font-semibold text-white">Team Members</h2>
        <Button onClick={() => setShowForm(true)} disabled={showForm || editingId}>
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      {(showForm || editingId) && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{editingId ? 'Edit Member' : 'New Member'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Bio (EN)"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Bio (PL)"
              value={formData.bio_pl}
              onChange={(e) => setFormData({ ...formData, bio_pl: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
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
              <Button onClick={handleSave} disabled={!formData.name || !formData.role}>
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
        {members.map((member) => (
          <Card key={member.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  {member.image_url && (
                    <img src={member.image_url} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(member)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deleteMutation.mutate(member.id)}>
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