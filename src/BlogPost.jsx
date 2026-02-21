import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In real implementation, this would fetch from a CMS or markdown files
  const posts = {
    'your-ads-work-your-follow-up-doesnt': {
      title: 'Your Ads Work. Your Follow-Up Doesn\'t.',
      date: 'Feb 21, 2026',
      readTime: '4 min read',
      category: 'Lead Generation',
      content: `
        <p class="text-xl text-[#1A1A1A]/70 mb-8 leading-relaxed">
          98% of leads die in your CRM. Not because they're bad. Because you respond too slow.
        </p>

        <p class="mb-6 leading-relaxed">
          I audited 47 companies last year. Forty-three of them had the same problem: they spent $50K-$200K on ads, then let leads rot in Salesforce for 3-5 days before anyone called them.
        </p>

        <p class="mb-6 leading-relaxed">
          Here's what actually happens:
        </p>

        <p class="mb-6 leading-relaxed">
          A prospect fills out your form. They're interested <em>right now</em>. But your sales rep is in a meeting. Then they're catching up on email. Then it's Friday afternoon.
        </p>

        <p class="mb-6 leading-relaxed">
          By Monday, that lead has hired someone else.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">The Math Nobody Wants to See</h2>

        <ul class="space-y-3 mb-8 text-[#1A1A1A]/80">
          <li class="flex items-start gap-3">
            <span class="text-[#CC5833] font-bold mt-1">→</span>
            <span>Lead responds in 5 minutes: <strong>391% more likely</strong> to become qualified</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#CC5833] font-bold mt-1">→</span>
            <span>Lead responds in 30 minutes: <strong>21% less likely</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#CC5833] font-bold mt-1">→</span>
            <span>Lead responds in 24 hours: You're background noise</span>
          </li>
        </ul>

        <p class="mb-6 leading-relaxed">
          This isn't theory. I pulled these numbers from a study of 2,241 B2B companies by MIT and InsideSales.com.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">Why Most Companies Fail</h2>

        <ol class="space-y-4 mb-8 text-[#1A1A1A]/80 list-decimal list-inside">
          <li><strong>No system</strong> — Leads go to a spreadsheet, then someone manually assigns them</li>
          <li><strong>No speed</strong> — "We'll call them tomorrow" = death</li>
          <li><strong>No persistence</strong> — One call, one email, then give up</li>
        </ol>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">What Actually Works</h2>

        <p class="mb-6 leading-relaxed">
          The companies I work with use a simple automation:
        </p>

        <ol class="space-y-4 mb-8 text-[#1A1A1A]/80 list-decimal list-inside">
          <li><strong>Instant acknowledgment</strong> — Lead fills form → immediate email/SMS confirmation</li>
          <li><strong>Immediate routing</strong> — AI reads the form, scores the lead, sends to right rep</li>
          <li><strong>Persistent follow-up</strong> — If no response in 15 min, second rep gets pinged. Then a third.</li>
        </ol>

        <p class="mb-6 leading-relaxed">
          One property management company I built this for went from 2% lead-to-demo rate to 18%. Same ad spend. Same leads. Just faster response.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">The Fix Is Simple</h2>

        <p class="mb-6 leading-relaxed">
          You don't need better ads. You need a system that treats leads like they matter <em>while they're still hot</em>.
        </p>

        <p class="mb-6 leading-relaxed">
          I built an OpenClaw skill that handles this entire flow. Takes 30 minutes to set up. Runs 24/7. Never calls in sick.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">Try This Today</h2>

        <p class="mb-6 leading-relaxed">
          Go look at your last 50 leads. Check the timestamps. How many got a response in under 5 minutes?
        </p>

        <p class="mb-8 leading-relaxed text-lg">
          If it's less than 80%, you're burning money.
        </p>
      `
    },
    'zapier-vs-make-truth': {
      title: 'Zapier vs Make: The Truth Nobody Tells You',
      date: 'Feb 20, 2026',
      readTime: '5 min read',
      category: 'Tools',
      content: `
        <p class="text-xl text-[#1A1A1A]/70 mb-8 leading-relaxed">
          One charges you for every step. The other lets you build anything. Here's which to choose.
        </p>

        <p class="mb-6 leading-relaxed">
          I've built automations in both. Probably 200+ flows across Zapier, Make, and OpenClaw.
        </p>

        <p class="mb-8 leading-relaxed font-bold text-lg">
          Here's what you actually need to know:
        </p>

        <p class="mb-8 leading-relaxed text-xl text-[#2E4036]">
          Zapier is for simple. Make is for complex. OpenClaw is for custom.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">Zapier: The Toyota Camry</h2>

        <p class="mb-6 leading-relaxed">
          Zapier works. It's reliable. It's boring.
        </p>

        <p class="mb-6 leading-relaxed">
          You connect App A to App B. Trigger happens. Action happens. Done.
        </p>

        <p class="mb-4 leading-relaxed font-semibold">Zapier shines when:</p>
        <ul class="space-y-2 mb-6 text-[#1A1A1A]/80 list-disc list-inside">
          <li>You have 2-3 step workflows</li>
          <li>You're connecting mainstream apps (Salesforce, Slack, Gmail)</li>
          <li>You don't want to think about it</li>
        </ul>

        <p class="mb-4 leading-relaxed font-semibold">Zapier fails when:</p>
        <ul class="space-y-2 mb-6 text-[#1A1A1A]/80 list-disc list-inside">
          <li>You need logic (if/then/else)</li>
          <li>You want to manipulate data between steps</li>
          <li>You're doing anything with APIs directly</li>
          <li>Your bill hits $500/month for 50K tasks</li>
        </ul>

        <p class="mb-8 leading-relaxed">
          I watched a client spend $847/month on Zapier for a flow that should've been 12 lines of code. They were paying $50 per automated email.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">Make: The Swiss Army Knife</h2>

        <p class="mb-6 leading-relaxed">
          Make (formerly Integromat) lets you build actual logic.
        </p>

        <p class="mb-4 leading-relaxed">You can:</p>
        <ul class="space-y-2 mb-6 text-[#1A1A1A]/80 list-disc list-inside">
          <li>Branch workflows based on conditions</li>
          <li>Loop through data sets</li>
          <li>Transform data with JavaScript</li>
          <li>Connect to any API</li>
        </ul>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">The Hidden Option: OpenClaw</h2>

        <p class="mb-6 leading-relaxed">
          Here's what neither Zapier nor Make can do: <strong>Actually understand your business.</strong>
        </p>

        <p class="mb-6 leading-relaxed">
          Zapier and Make are pipes. They move data from A to B.
        </p>

        <p class="mb-6 leading-relaxed">
          OpenClaw is a brain. It can read unstructured data, make decisions based on context, learn from patterns, and build custom skills for your exact workflow.
        </p>

        <h2 class="text-2xl font-bold text-[#2E4036] mt-12 mb-4">My Recommendation</h2>

        <p class="mb-6 leading-relaxed">
          Start with Zapier for simple stuff. Graduate to Make when you need logic.
        </p>

        <p class="mb-6 leading-relaxed">
          But if you're reading this, you're probably past both. You need something that actually solves your problem — not a tool that forces your problem into its limitations.
        </p>

        <p class="mb-8 leading-relaxed text-lg">
          That's when you call me.
        </p>
      `
    }
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F2F0E9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2E4036] mb-4">Post not found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-[#CC5833] font-bold hover:underline"
          >
            Back to blog
          </button>
        </div>
      </div>
    );
  }

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
          <button 
            onClick={() => navigate('/blog')}
            className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#CC5833] transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium">
            <span className="text-[#CC5833]">{post.category}</span>
            <span className="text-[#1A1A1A]/40">•</span>
            <span className="text-[#1A1A1A]/60">{post.date}</span>
            <span className="text-[#1A1A1A]/40">•</span>
            <span className="text-[#1A1A1A]/60">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2E4036] mb-12">
            {post.title}
          </h1>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#2E4036] prose-headings:font-bold prose-a:text-[#CC5833] hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-[#1A1A1A]/10">
            <div className="bg-[#2E4036] rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want this running in your business?
              </h3>
              <p className="text-white/70 mb-8">
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
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-tighter text-xl">GOLDSMITH</div>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
            <button onClick={() => navigate('/')} className="hover:text-[#CC5833] transition-colors">Home</button>
            <button onClick={() => navigate('/blog')} className="hover:text-[#CC5833] transition-colors">Blog</button>
            <button onClick={() => navigate('/scan')} className="hover:text-[#CC5833] transition-colors">Scan</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;