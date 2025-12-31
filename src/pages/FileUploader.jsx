import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function FileUploader() {
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setUrl(file_url);
      alert('File uploaded! Copy this URL: ' + file_url);
    } catch (error) {
      alert('Error: ' + error.message);
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-8">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-light text-white mb-6">Upload GLTF File</h1>
        
        <input
          type="file"
          accept=".gltf,.glb"
          onChange={handleFileUpload}
          className="hidden"
          id="file-input"
        />
        
        <label htmlFor="file-input">
          <Button as="span" disabled={uploading} className="w-full cursor-pointer">
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? 'Uploading...' : 'Select GLTF File'}
          </Button>
        </label>

        {url && (
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-sm mb-2">Success! Copy this URL:</p>
            <input
              type="text"
              value={url}
              readOnly
              className="w-full bg-white/5 text-white text-xs p-2 rounded border border-white/10"
              onClick={(e) => e.target.select()}
            />
          </div>
        )}
      </div>
    </div>
  );
}