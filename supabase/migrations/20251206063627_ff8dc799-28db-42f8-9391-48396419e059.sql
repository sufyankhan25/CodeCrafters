-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create portfolio_items table
CREATE TABLE public.portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  results TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  content TEXT NOT NULL,
  avatar_url TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  price TEXT NOT NULL,
  features TEXT[],
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES public.profiles(id),
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  is_verified BOOLEAN DEFAULT false,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create pricing_plans table
CREATE TABLE public.pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT,
  features TEXT[] NOT NULL,
  is_popular BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio, testimonials, services, pricing (public content)
CREATE POLICY "Anyone can view portfolio items" ON public.portfolio_items FOR SELECT USING (true);
CREATE POLICY "Anyone can view testimonials" ON public.testimonials FOR SELECT USING (is_featured = true);
CREATE POLICY "Anyone can view active services" ON public.services FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Anyone can view pricing plans" ON public.pricing_plans FOR SELECT USING (true);

-- Newsletter - anyone can subscribe
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Contact submissions - anyone can submit
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Admin policies (full access for admins)
CREATE POLICY "Admins can manage portfolio" ON public.portfolio_items FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage testimonials" ON public.testimonials FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage services" ON public.services FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can view subscribers" ON public.newsletter_subscribers FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage contact submissions" ON public.contact_submissions FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage pricing" ON public.pricing_plans FOR ALL 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

-- Profile policies
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin'));

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', ''));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_portfolio_items_updated_at BEFORE UPDATE ON public.portfolio_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pricing_plans_updated_at BEFORE UPDATE ON public.pricing_plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default data
INSERT INTO public.portfolio_items (title, client, category, image_url, is_featured, display_order) VALUES
('E-Commerce Platform', 'TechMart', 'E-commerce', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop', true, 1),
('SaaS Dashboard', 'DataFlow', 'SaaS', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', true, 2),
('Real Estate Portal', 'HomeScape', 'Real Estate', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop', true, 3),
('Healthcare App', 'MediCare+', 'Healthcare', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop', true, 4),
('Finance Platform', 'InvestPro', 'Finance', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', true, 5),
('Education Portal', 'LearnHub', 'Education', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', true, 6);

INSERT INTO public.testimonials (name, role, company, content, avatar_url, rating, display_order) VALUES
('David Lee', 'CEO', 'NovaCorp', 'CodeCrafters delivered exactly what we needed — professional, fast, and effective.', 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', 5, 1),
('Sarah Johnson', 'Founder', 'TechStart', 'Outstanding work! They transformed our vision into a beautiful, functional website.', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', 5, 2),
('Michael Chen', 'Marketing Director', 'GrowthCo', 'The team is incredibly talented. Our conversion rates increased by 45% after the redesign.', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', 5, 3),
('Emily Rodriguez', 'Product Manager', 'InnovateLab', 'Professional, responsive, and delivers on time. Highly recommend CodeCrafters!', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily', 5, 4);

INSERT INTO public.services (title, description, icon, price, features, display_order) VALUES
('Web Design & Development', 'Responsive, modern websites & apps.', 'Globe', '$400', ARRAY['Custom Design', 'Mobile Responsive', 'SEO Optimized'], 1),
('Branding & Logo Design', 'Strong, memorable brand identity.', 'Palette', '$200', ARRAY['Logo Design', 'Brand Guidelines', 'Color Palette'], 2),
('Digital Ads Management', 'Google, Meta, TikTok campaigns.', 'Megaphone', '$250', ARRAY['Campaign Setup', 'A/B Testing', 'Monthly Reports'], 3),
('AI Automation Setup', 'Chatbots, workflow automation, AI tools.', 'Bot', '$350', ARRAY['Custom Chatbots', 'Workflow Automation', 'AI Integration'], 4),
('SEO Optimization', 'Boost rankings & organic traffic.', 'Search', '$180', ARRAY['Keyword Research', 'On-Page SEO', 'Link Building'], 5),
('Maintenance', 'Continuous updates & support.', 'Wrench', '$100/mo', ARRAY['24/7 Support', 'Regular Updates', 'Security Monitoring'], 6);

INSERT INTO public.pricing_plans (name, price, description, features, is_popular, display_order) VALUES
('Starter', '$299', 'Perfect for small projects', ARRAY['1-page website', 'Basic SEO setup', 'Mobile responsive', '1 round of revisions', '1 month support'], false, 1),
('Professional', '$599', 'Best for growing businesses', ARRAY['Multi-page website', 'Advanced SEO + Analytics', 'Custom animations', 'AI chatbot integration', '3 months support'], true, 2),
('Enterprise', '$999+', 'Full-scale digital solution', ARRAY['Full branding package', 'AI automation setup', 'Digital ads setup', 'Priority 24/7 support', '6 months support'], false, 3);