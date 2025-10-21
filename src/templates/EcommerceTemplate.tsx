import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Drill } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-background border-b border-border ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Drill className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">DrillBits Pro</div>
              <div className="text-xs text-muted-foreground">Professional Tools</div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="outline"
                size="icon"
                onClick={openCart}
                className="relative border-2 hover:border-primary hover:text-primary"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-background py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Drill className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-xl">DrillBits Pro</div>
                <div className="text-sm text-background/70">Professional Tools</div>
              </div>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Your trusted source for professional-grade drill bits. Quality tools for professionals and DIY enthusiasts.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-background/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-background/70 hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Customer Service</h3>
            <div className="space-y-2 text-background/70 text-sm">
              <p>Email: support@drillbitspro.com</p>
              <p>Phone: 1-800-DRILL-BIT</p>
              <p>Mon-Fri: 9AM - 6PM EST</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/70">
          <p>&copy; 2024 DrillBits Pro. All rights reserved. Professional quality guaranteed.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}