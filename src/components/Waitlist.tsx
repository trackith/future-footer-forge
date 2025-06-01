import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Users, Eye } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load existing data from localStorage
    const savedWaitlistCount = localStorage.getItem('trackith-waitlist-count');
    const savedPageViews = localStorage.getItem('trackith-page-views');
    const hasVisitedBefore = localStorage.getItem('trackith-has-visited');
    
    if (savedWaitlistCount) {
      setWaitlistCount(parseInt(savedWaitlistCount));
    }
    
    // Load current page views
    if (savedPageViews) {
      setPageViews(parseInt(savedPageViews));
    }
    
    // Only increment if this is a first-time visitor
    if (!hasVisitedBefore) {
      const currentPageViews = savedPageViews ? parseInt(savedPageViews) : 0;
      const newPageViews = currentPageViews + 1;
      setPageViews(newPageViews);
      localStorage.setItem('trackith-page-views', newPageViews.toString());
      localStorage.setItem('trackith-has-visited', 'true');
      
      console.log('First-time visitor! Page views updated:', newPageViews);
    } else {
      console.log('Returning visitor, page views not incremented');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage (in a real app, this would be sent to a backend)
      const waitlistData = JSON.parse(localStorage.getItem('trackith-waitlist-data') || '[]');
      const newEntry = {
        name,
        email,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      
      waitlistData.push(newEntry);
      localStorage.setItem('trackith-waitlist-data', JSON.stringify(waitlistData));
      
      // Update counter
      const newCount = waitlistCount + 1;
      setWaitlistCount(newCount);
      localStorage.setItem('trackith-waitlist-count', newCount.toString());

      toast({
        title: "Welcome to the Waitlist!",
        description: "We'll keep you updated on our progress and notify you when Trackith launches.",
      });

      setEmail('');
      setName('');
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Live Stats and Waitlist Button in horizontal layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
        <div className="flex gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-purple-300 mb-2">
              <Eye size={20} />
              <span className="text-sm font-medium">Page Views</span>
            </div>
            <div className="text-2xl font-bold text-white">{pageViews.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-pink-300 mb-2">
              <Users size={20} />
              <span className="text-sm font-medium">Waitlist Signups</span>
            </div>
            <div className="text-2xl font-bold text-white">{waitlistCount.toLocaleString()}</div>
          </div>
        </div>

        {/* Waitlist Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              Join Waitlist
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Join the Trackith Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when we launch and get exclusive early access to transform how you manage your creative property.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Waitlist;
