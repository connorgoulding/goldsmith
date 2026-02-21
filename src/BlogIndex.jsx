import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      slug: 'what-is-openclaw',
      title: 'OpenClaw: The Automation Platform That Actually Understands Your Business',
      excerpt: 'Zapier moves data. OpenClaw moves your business forward. Here\'s the difference that matters.',
      date: 'Feb 24, 2026',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      slug: 'your-ads-work-your-follow-up-doesnt',
      title: 'Your Ads Work. Your Follow-Up Doesn\'t.',
      excerpt: '98% of leads die in your CRM. Not because they\'re bad. Because you respond too slow. Here\'s the fix.',
      date: 'Feb 21, 2026',
      readTime: '4 min read',
      category: 'Lead Generation'
    },
    {
      slug: 'zapier-vs-make-truth',
      title: 'Zapier vs Make: The Truth Nobody Tells You',
      excerpt: 'One charges you for every step. The other lets you build anything. Here\'s which to choose.',
      date: 'Feb 20, 2026',
      readTime: '5 min read',
      category: 'Tools'
    },
    {
      slug: 'how-automation-is-transforming-real-estate',
      title: 'How We Delivered 10x ROI on Ads for a Cosmetic Surgery Practice',
      excerpt: 'They spent $50K on ads with nothing to show. Then we built the follow-up system that changed everything.',
      date: 'Feb 23, 2026',
      readTime: '7 min read',
      category: 'Case Study'
    },
    {
      slug: 'how-to-actually-save-time-and-cut-costs',
      title: 'How We Doubled Lead Volume for a 1,000-Agent Brokerage',
      excerpt: 'Three automations that saved hiring managers 15 hours per week and doubled their lead volume.',
      date: 'Feb 22, 2026',
      readTime: '6 min read',
      category: 'Case Study'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-['Plus_Jakarta_Sans']">
      {/* Header */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full flex justify-between items-center shadow-xl">
          <button 
            onClick={() => navigate('/')}
            className="font-bold tracking-tighter text-[#2E4036] text-lg hover:opacity-70 transition-opacity"
          >
            GOLDSMITH
          </button>
          <div className="text-sm font-medium text-[#1A1A1A]/60">
            The Automation Playbook
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#CC5833]/10 text-[#CC5833] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2E4036] mb-6">
            The Automation Playbook
          </h1>
          <p className="text-xl text-[#1A1A1A]/60 max-w-2xl">
            No buzzwords. No "digital transformation." Just systems that work, tested on real businesses.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#1A1A1A]/5 hover:shadow-xl hover:border-[#CC5833]/30 transition-all cursor-pointer group"
            >
              <div className="flex flex-wrap gap-4 mb-4 text-sm font-medium">
                <span className="text-[#CC5833]">{post.category}</span>
                <span className="text-[#1A1A1A]/40">•</span>
                <span className="text-[#1A1A1A]/60">{post.date}</span>
                <span className="text-[#1A1A1A]/40">•</span>
                <span className="text-[#1A1A1A]/60">{post.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E4036] mb-3 group-hover:text-[#CC5833] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#2E4036] font-bold group-hover:text-[#CC5833] transition-colors">
                Read Article
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2E4036] py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to stop reading and start automating?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Take the 3-minute assessment and find out exactly how much time you could save.
          </p>
          <button 
            onClick={() => navigate('/scan')}
            className="bg-[#CC5833] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-flex items-center gap-3"
          >
            Start Automation Scan
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-tighter text-xl">GOLDSMITH</div>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
            <button onClick={() => navigate('/')} className="hover:text-[#CC5833] transition-colors">Home</button>
            <button onClick={() => navigate('/scan')} className="hover:text-[#CC5833] transition-colors">Scan</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndex;