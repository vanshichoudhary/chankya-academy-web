
-- Create categories table
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category_id UUID REFERENCES public.categories(id),
  image_url TEXT,
  stock INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customers table
CREATE TABLE public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  grade TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id),
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create payments table
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id),
  amount DECIMAL(10,2) NOT NULL,
  method TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  transaction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create coupons table
CREATE TABLE public.coupons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('percentage', 'fixed')),
  value DECIMAL(10,2) NOT NULL,
  min_order DECIMAL(10,2) DEFAULT 0,
  max_discount DECIMAL(10,2) DEFAULT 0,
  valid_from DATE NOT NULL,
  valid_to DATE NOT NULL,
  usage_limit INTEGER NOT NULL DEFAULT 1,
  used_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'expired')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample categories
INSERT INTO public.categories (name, description) VALUES 
('Uniforms', 'School uniforms and dress code items'),
('Books', 'Textbooks and educational materials'),
('Accessories', 'School bags, shoes, and other accessories'),
('Sports', 'Sports equipment and uniforms'),
('Stationery', 'Pens, pencils, notebooks, and school supplies');

-- Insert sample products
INSERT INTO public.products (name, category_id, price, description, image_url, stock) VALUES 
('School Uniform (Summer)', (SELECT id FROM public.categories WHERE name = 'Uniforms'), 1200, 'Official summer uniform for all students including shirt, pants/skirt, and tie.', '/coming-soon.svg', 50),
('School Uniform (Winter)', (SELECT id FROM public.categories WHERE name = 'Uniforms'), 1800, 'Official winter uniform including sweater, jacket, and full sleeves shirt.', '/coming-soon.svg', 30),
('Sports Kit', (SELECT id FROM public.categories WHERE name = 'Sports'), 950, 'Sports uniform including track suit, t-shirt, and shorts for physical education classes.', '/coming-soon.svg', 25),
('School Bag', (SELECT id FROM public.categories WHERE name = 'Accessories'), 850, 'Durable and ergonomic school bag with the school logo and multiple compartments.', '/coming-soon.svg', 40),
('Textbook Set - Grade 1', (SELECT id FROM public.categories WHERE name = 'Books'), 1500, 'Complete set of textbooks for Grade 1 students as per the curriculum.', '/coming-soon.svg', 15);

-- Insert sample customers
INSERT INTO public.customers (name, email, phone, grade) VALUES 
('Rahul Sharma', 'rahul.sharma@email.com', '+91 98765 43210', 'Grade 8'),
('Priya Singh', 'priya.singh@email.com', '+91 87654 32109', 'Grade 5'),
('Amit Kumar', 'amit.kumar@email.com', '+91 76543 21098', 'Grade 10'),
('Sneha Patel', 'sneha.patel@email.com', '+91 65432 10987', 'Grade 3');

-- Enable Row Level Security (RLS) - making tables publicly readable for admin panel
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for admin panel)
CREATE POLICY "Allow public read access" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.customers FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.order_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.payments FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.coupons FOR SELECT USING (true);

-- Create policies for public write access (for admin panel)
CREATE POLICY "Allow public insert access" ON public.categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.payments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON public.coupons FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access" ON public.categories FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.products FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.customers FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.orders FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.order_items FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.payments FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON public.coupons FOR UPDATE USING (true);

CREATE POLICY "Allow public delete access" ON public.categories FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.products FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.customers FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.orders FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.order_items FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.payments FOR DELETE USING (true);
CREATE POLICY "Allow public delete access" ON public.coupons FOR DELETE USING (true);
