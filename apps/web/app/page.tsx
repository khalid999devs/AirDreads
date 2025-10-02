import { Button } from '@repo/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-on-surface'>
      {/* Hero Section */}
      <main className='container mx-auto px-4 py-16'>
        <div className='text-center space-y-8'>
          {/* Title */}
          <div className='space-y-4'>
            <h1 className='text-6xl font-bold'>
              <span className='text-primary'>Air</span>
              <span className='text-secondary'>Dreads</span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Where Every Move Saves a Breath
            </p>
            <p className='text-lg max-w-3xl mx-auto leading-relaxed'>
              Turning invisible air threats visible through gamification.
              Transform complex NASA air quality data into engaging, life-saving
              experiences.
            </p>
          </div>

          {/* COLOR TESTING SECTION - All Theme Colors */}
          <div className='w-full max-w-6xl mx-auto mt-16 p-8 bg-surface border border-border rounded-lg'>
            <h2 className='text-2xl font-bold mb-8 text-center'>
              🎨 Theme Color Testing
            </h2>

            {/* Text Colors Testing */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-4'>Text Colors:</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-primary font-semibold'>text-primary</p>
                  <p className='text-xs opacity-75'>Primary brand color</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-secondary font-semibold'>text-secondary</p>
                  <p className='text-xs opacity-75'>Secondary brand color</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-success font-semibold'>text-success</p>
                  <p className='text-xs opacity-75'>Success green</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-destructive font-semibold'>
                    text-destructive
                  </p>
                  <p className='text-xs opacity-75'>Error/destructive red</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-on-surface font-semibold'>
                    text-on-surface
                  </p>
                  <p className='text-xs opacity-75'>Main text color</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-muted-foreground font-semibold'>
                    text-muted-foreground
                  </p>
                  <p className='text-xs opacity-75'>Muted text</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-on-primary font-semibold'>
                    text-on-primary
                  </p>
                  <p className='text-xs opacity-75'>Text on primary</p>
                </div>
                <div className='p-3 bg-surface border border-border rounded'>
                  <p className='text-on-secondary font-semibold'>
                    text-on-secondary
                  </p>
                  <p className='text-xs opacity-75'>Text on secondary</p>
                </div>
              </div>
            </div>

            {/* Background Colors Testing */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-4'>Background Colors:</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-primary text-on-primary p-4 rounded'>
                  <p className='font-semibold'>bg-primary</p>
                  <p className='text-sm opacity-90'>Primary background</p>
                </div>
                <div className='bg-secondary text-on-secondary p-4 rounded'>
                  <p className='font-semibold'>bg-secondary</p>
                  <p className='text-sm opacity-90'>Secondary background</p>
                </div>
                <div className='bg-success text-on-success p-4 rounded'>
                  <p className='font-semibold'>bg-success</p>
                  <p className='text-sm opacity-90'>Success background</p>
                </div>
                <div className='bg-destructive text-on-error p-4 rounded'>
                  <p className='font-semibold'>bg-destructive</p>
                  <p className='text-sm opacity-90'>Error background</p>
                </div>
                <div className='bg-surface text-on-surface p-4 rounded border border-border'>
                  <p className='font-semibold'>bg-surface</p>
                  <p className='text-sm opacity-75'>Surface background</p>
                </div>
                <div className='bg-background text-on-surface p-4 rounded border border-border'>
                  <p className='font-semibold'>bg-background</p>
                  <p className='text-sm opacity-75'>Main background</p>
                </div>
                <div className='bg-muted text-muted-foreground p-4 rounded border border-border'>
                  <p className='font-semibold'>bg-muted</p>
                  <p className='text-sm opacity-75'>Muted background</p>
                </div>
                <div className='bg-card text-card-foreground p-4 rounded border border-border'>
                  <p className='font-semibold'>bg-card</p>
                  <p className='text-sm opacity-75'>Card background</p>
                </div>
              </div>
            </div>

            {/* Border and Ring Testing */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-4'>Borders & Rings:</h3>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='p-4 border border-border rounded'>
                  <p className='font-semibold'>border-border</p>
                  <p className='text-sm text-muted-foreground'>
                    Default border
                  </p>
                </div>
                <div className='p-4 border-2 border-primary rounded'>
                  <p className='font-semibold'>border-primary</p>
                  <p className='text-sm text-muted-foreground'>
                    Primary border
                  </p>
                </div>
                <div className='p-4 border-2 border-success rounded'>
                  <p className='font-semibold'>border-success</p>
                  <p className='text-sm text-muted-foreground'>
                    Success border
                  </p>
                </div>
                <div className='p-4 border border-border rounded focus-within:ring-2 focus-within:ring-ring'>
                  <input
                    className='w-full bg-transparent outline-none'
                    placeholder='focus for ring-ring'
                  />
                </div>
                <div className='p-4 border border-border rounded focus-within:ring-2 focus-within:ring-primary'>
                  <input
                    className='w-full bg-transparent outline-none'
                    placeholder='focus for ring-primary'
                  />
                </div>
                <div className='p-4 border border-border rounded focus-within:ring-2 focus-within:ring-success'>
                  <input
                    className='w-full bg-transparent outline-none'
                    placeholder='focus for ring-success'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards - Testing ALL Theme Colors */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
            {/* Primary Theme */}
            <div className='bg-primary text-on-primary rounded-lg p-6 space-y-3'>
              <div className='text-3xl'>🎮</div>
              <h3 className='text-lg font-semibold'>Primary Theme</h3>
              <p className='text-sm opacity-90'>
                Gamified air quality monitoring with XP rewards
              </p>
            </div>

            {/* Secondary Theme */}
            <div className='bg-secondary text-on-secondary rounded-lg p-6 space-y-3'>
              <div className='text-3xl'>🤖</div>
              <h3 className='text-lg font-semibold'>Secondary Theme</h3>
              <p className='text-sm opacity-90'>
                AI Health Coach with personalized recommendations
              </p>
            </div>

            {/* Success Theme */}
            <div className='bg-success text-on-success rounded-lg p-6 space-y-3'>
              <div className='text-3xl'>🛰️</div>
              <h3 className='text-lg font-semibold'>Success Theme</h3>
              <p className='text-sm opacity-90'>
                NASA TEMPO and MERRA-2 satellite data integration
              </p>
            </div>

            {/* Error/Destructive Theme */}
            <div className='bg-destructive text-on-error rounded-lg p-6 space-y-3'>
              <div className='text-3xl'>⚠️</div>
              <h3 className='text-lg font-semibold'>Error Theme</h3>
              <p className='text-sm opacity-90'>
                Critical air quality alerts and warnings
              </p>
            </div>
          </div>

          {/* Surface & Border Testing */}
          <div className='grid md:grid-cols-2 gap-8 mt-12'>
            <div className='bg-surface border-2 border-border rounded-lg p-8 space-y-4'>
              <h3 className='text-xl font-semibold text-foreground'>
                Surface Background
              </h3>
              <p className='text-muted-foreground'>
                This card uses{' '}
                <code className='bg-ring/10 px-2 py-1 rounded text-ring'>
                  bg-surface
                </code>{' '}
                with{' '}
                <code className='bg-ring/10 px-2 py-1 rounded text-ring'>
                  border-border
                </code>
              </p>
              <div className='flex gap-2'>
                <div className='w-4 h-4 bg-input rounded'></div>
                <span className='text-sm text-muted-foreground'>
                  Input color sample
                </span>
              </div>
            </div>

            <div className='bg-card border-2 border-border rounded-lg p-8 space-y-4'>
              <h3 className='text-xl font-semibold text-card-foreground'>
                Card Background
              </h3>
              <p className='text-muted-foreground'>
                This uses{' '}
                <code className='bg-ring/10 px-2 py-1 rounded text-ring'>
                  bg-card
                </code>{' '}
                with{' '}
                <code className='bg-ring/10 px-2 py-1 rounded text-ring'>
                  text-card-foreground
                </code>
              </p>
              <div className='flex gap-2'>
                <div className='w-4 h-4 bg-ring rounded'></div>
                <span className='text-sm text-muted-foreground'>
                  Ring color sample
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* Comprehensive Theme Color Testing */}
          <div className='mt-16 space-y-8'>
            <h2 className='text-3xl font-bold text-center text-foreground mb-8'>
              Complete Theme Color Showcase
            </h2>

            {/* Text Colors Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='bg-popover border border-border p-4 rounded-lg text-center'>
                <div className='text-foreground font-semibold mb-2'>
                  Foreground
                </div>
                <div className='text-popover-foreground text-sm'>
                  popover-foreground
                </div>
              </div>

              <div className='bg-muted p-4 rounded-lg text-center'>
                <div className='text-muted-foreground font-semibold mb-2'>
                  Muted
                </div>
                <div className='text-muted-foreground text-sm'>
                  muted-foreground
                </div>
              </div>

              <div className='bg-accent p-4 rounded-lg text-center'>
                <div className='text-accent-foreground font-semibold mb-2'>
                  Accent
                </div>
                <div className='text-accent-foreground text-sm'>
                  accent-foreground
                </div>
              </div>

              <div className='bg-background border-2 border-border p-4 rounded-lg text-center'>
                <div className='text-foreground font-semibold mb-2'>
                  Background
                </div>
                <div className='text-muted-foreground text-sm'>
                  Default background
                </div>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='space-y-3'>
                <h4 className='font-semibold text-foreground'>Form Elements</h4>
                <div className='bg-input border border-border rounded p-3 text-foreground'>
                  Input background color
                </div>
                <div className='w-full h-2 bg-ring rounded'></div>
                <p className='text-sm text-muted-foreground'>
                  Ring color (focus states)
                </p>
              </div>

              <div className='space-y-3'>
                <h4 className='font-semibold text-foreground'>Surface Types</h4>
                <div className='bg-card border border-border rounded p-3'>
                  <span className='text-card-foreground'>Card surface</span>
                </div>
                <div className='bg-popover border border-border rounded p-3'>
                  <span className='text-popover-foreground'>
                    Popover surface
                  </span>
                </div>
              </div>

              <div className='space-y-3'>
                <h4 className='font-semibold text-foreground'>Status Colors</h4>
                <div className='flex gap-2 items-center'>
                  <div className='w-6 h-6 bg-primary rounded'></div>
                  <span className='text-primary text-sm'>Primary</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-6 h-6 bg-secondary rounded'></div>
                  <span className='text-secondary text-sm'>Secondary</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-6 h-6 bg-success rounded'></div>
                  <span className='text-success text-sm'>Success</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-6 h-6 bg-destructive rounded'></div>
                  <span className='text-destructive text-sm'>Destructive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action with Multiple Button Variants */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-16'>
            <Button
              appName='AirDreads'
              className='px-8 py-3 text-lg bg-primary text-on-primary hover:bg-primary/90 rounded-lg font-semibold transition-colors'
            >
              Start Your Air Journey
            </Button>
            <Button
              appName='AirDreads'
              className='px-8 py-3 text-lg border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg font-semibold transition-colors'
            >
              View Demo
            </Button>
            <Button
              appName='AirDreads'
              className='px-8 py-3 text-lg bg-success text-on-success hover:bg-success/90 rounded-lg font-semibold transition-colors'
            >
              Success Action
            </Button>
            <Button
              appName='AirDreads'
              className='px-8 py-3 text-lg bg-destructive text-on-error hover:bg-destructive/90 rounded-lg font-semibold transition-colors'
            >
              Emergency Alert
            </Button>
          </div>

          {/* Status Badge */}
          <div className='mt-16 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20'>
            <div className='w-2 h-2 bg-success rounded-full animate-pulse'></div>
            <span className='text-sm font-medium'>
              NASA Space Apps Challenge 2025
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
