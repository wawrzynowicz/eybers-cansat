import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function SocialPostsManager() {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    platform: 'facebook', content: '', content_pl: '', image_url: '', post_url: '',
    likes: 0, featured: false, post_date: ''
  });

  const queryClient = useQueryClient();
  const { data: posts = [] } = useQuery({
    queryKey: ['socialPosts'],
    queryFn: () => base44.entities.SocialPost.list('-post_date')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.SocialPost.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['socialPosts']);
      setShowForm(false);
      resetForm();
      toast.success('Post added');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.SocialPost.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['socialPosts']);
      setEditingId(null);
      toast.success('Post updated');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.SocialPost.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['socialPosts']);
      toast.success('Post deleted');
    }
  });

  const resetForm = () => {
    setFormData({ platform: 'facebook', content: '', content_pl: '', image_url: '', post_url: '', likes: 0, featured: false, post_date: '' });
  };

  const handleEdit = (post) => {
    setFormData(post);
    setEditingId(post.id);
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
        <h2 className="text-2xl font-semibold text-white">Social Media Posts</h2>
        <Button onClick={() => setShowForm(true)} disabled={showForm || editingId}>
          <Plus className="w-4 h-4 mr-2" /> Add Post
        </Button>
      </div>

      {(showForm || editingId) && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">{editingId ? 'Edit Post' : 'New Post'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={formData.platform} onValueChange={(value) => setFormData({ ...formData, platform: value })}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Content (EN)"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Textarea
              placeholder="Content (PL)"
              value={formData.content_pl}
              onChange={(e) => setFormData({ ...formData, content_pl: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              placeholder="Post URL"
              value={formData.post_url}
              onChange={(e) => setFormData({ ...formData, post_url: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              type="number"
              placeholder="Likes"
              value={formData.likes}
              onChange={(e) => setFormData({ ...formData, likes: parseInt(e.target.value) || 0 })}
              className="bg-white/5 border-white/20 text-white"
            />
            <Input
              type="date"
              placeholder="Post Date"
              value={formData.post_date}
              onChange={(e) => setFormData({ ...formData, post_date: e.target.value })}
              className="bg-white/5 border-white/20 text-white"
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
              />
              <label htmlFor="featured" className="text-white text-sm">Featured</label>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={!formData.content || !formData.post_url}>
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
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  {post.image_url && (
                    <img src={post.image_url} alt="Post" className="w-20 h-20 object-cover rounded" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400 text-sm font-medium capitalize">{post.platform}</span>
                      {post.featured && <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Featured</span>}
                    </div>
                    <p className="text-white/70 text-sm mb-2">{post.content}</p>
                    <p className="text-white/50 text-xs">
                      {post.likes} likes • {post.post_date ? new Date(post.post_date).toLocaleDateString() : 'No date'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(post)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deleteMutation.mutate(post.id)}>
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