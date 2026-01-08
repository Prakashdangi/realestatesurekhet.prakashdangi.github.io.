-- Drop the existing unrestricted INSERT policy
DROP POLICY IF EXISTS "Anyone can create inquiries" ON public.inquiries;

-- Create new INSERT policy that requires authentication
CREATE POLICY "Authenticated users can create inquiries"
ON public.inquiries
FOR INSERT
TO authenticated
WITH CHECK (true);

-- The existing SELECT policy already restricts to admins only, which is correct
-- Admins can view all inquiries, regular users cannot see any