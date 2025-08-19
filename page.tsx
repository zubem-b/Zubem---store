import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, ShoppingCart, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">BIZZCAST</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#marketplace" className="text-slate-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🌍 Global Business Platform</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Connect. Trade. Grow.
            <span className="text-blue-600 block">Globally.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            BIZZCAST is the world's premier business marketplace connecting millions of entrepreneurs, buyers, and
            sellers in one powerful platform. Start your global business journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start Selling Now
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-slate-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">195</div>
              <div className="text-slate-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <div className="text-slate-600">Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-slate-600">Powerful tools and features designed for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Global Marketplace</CardTitle>
                <CardDescription>Reach customers worldwide with our integrated marketplace platform</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Social Business Network</CardTitle>
                <CardDescription>
                  Connect with like-minded entrepreneurs and build valuable relationships
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Business Analytics</CardTitle>
                <CardDescription>Track performance with advanced analytics and insights</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>Process payments safely with enterprise-grade security</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Instant Setup</CardTitle>
                <CardDescription>Get your business online in minutes with our quick setup tools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Multi-Currency</CardTitle>
                <CardDescription>Accept payments in 150+ currencies with automatic conversion</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Global Business Revolution?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join millions of entrepreneurs already growing their businesses on BIZZCAST
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
              Start Your Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">BIZZCAST</span>
              </div>
              <p className="text-slate-400">
                The world's leading business marketplace connecting entrepreneurs globally.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="hover:text-white">
                    For Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/buyers" className="hover:text-white">
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="hover:text-white">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 BIZZCAST. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
