import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

// Define the shape of the Instagram API response
interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
        
        if (!token) {
          setError("Instagram Access Token is missing. Please configure it in your environment variables.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=6`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Error fetching Instagram feed:", err);
        setError("Failed to load Instagram feed.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4 text-brand-primary">
            <Instagram size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-4">Follow on Instagram</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Stay updated with our latest work and behind-the-scenes.
          </p>
          <a 
            href="https://instagram.com/larisafloroiu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-brand-primary font-medium hover:text-brand-gold transition-colors"
          >
            @larisafloroiu
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-brand-cream rounded-2xl border border-brand-border px-4">
            <p className="text-brand-muted">{error}</p>
            <p className="text-sm text-brand-muted mt-2">
              Note: To display the feed, you need to generate an Instagram Basic Display API token and add it to your environment variables as <code className="bg-white/50 px-2 py-1 rounded">VITE_INSTAGRAM_ACCESS_TOKEN</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-brand-cream block"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || 'Instagram post'}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
