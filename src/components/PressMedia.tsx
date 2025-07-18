import React from 'react'
import { Globe, Phone, Mail } from 'lucide-react'

const PressMedia = () => {
    return (
        <div id="Press" className='bg-background py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4 heading'>
                        Press & Media Center
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                        For all media inquiries, interviews, and press releases related to Master Bakers Challenge India 2025
                    </p>
                </div>

                {/* Main Content Card */}
                <div className='bg-card rounded-2xl  overflow-hidden border-l-4 border border-l-primary'>
                    <div className='grid md:grid-cols-2 gap-8 p-8 items-center'>

                        {/* Left Column - Branding & Description */}
                        <div className='space-y-6'>
                            <div className='text-center md:text-left'>
                                {/* Logo Placeholder */}
                                <div className='w-48 h-24 bg-background rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-sm'>
                                    <img src="/sponsors/ashwinipublicity.png" alt="ashwinipublicity" className='w-full h-full object-contain' />
                                </div>

                                <div className='text-lg font-semibold text-primary mb-2'>
                                    &ldquo;Infinite Ideas... Behold.&rdquo;
                                </div>

                                <div className='text-sm text-muted-foreground font-medium mb-4'>
                                    Official PR Partner for Master Bakers Challenge India 2025
                                </div>
                            </div>

                            <div className='text-card-foreground'>
                                <p className='mb-4'>
                                    All media coverage, press releases, and journalist inquiries for Master Bakers Challenge India 2025
                                    are handled exclusively by our official PR partner, Ashwini Publicity.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className='space-y-6'>
                            <div className='bg-background rounded-lg p-6 border border-border'>
                                <h3 className='text-xl font-semibold text-primary mb-4'>
                                    Media Contact
                                </h3>

                                <div className='space-y-4'>
                                    <div>
                                        <div className='font-semibold text-card-foreground mb-2'>
                                            Shraddha Jadhav
                                        </div>
                                        <div className='text-muted-foreground text-sm mb-3'>
                                            PR Manager
                                        </div>
                                    </div>

                                    <div className='space-y-3'>
                                        <div className='flex items-center'>
                                            <Phone className='text-primary mr-3' size={16} />
                                            <a href="tel:+919869100555" className='text-card-foreground hover:text-primary transition-colors'>
                                                (+91) 9869 100 555
                                            </a>
                                        </div>

                                        <div className='flex items-center'>
                                            <Mail className='text-primary mr-3' size={16} />
                                            <a href="mailto:shraddha.jadhav@ashwinipublicity.com" className='text-card-foreground hover:text-primary transition-colors text-sm'>
                                                shraddha.jadhav@ashwinipublicity.com
                                            </a>
                                        </div>

                                        <div className='flex items-center'>
                                            <Globe className='text-primary mr-3' size={16} />
                                            <a href="https://www.ashwinipublicity.com" target="_blank" rel="noopener noreferrer" className='text-card-foreground hover:text-primary transition-colors'>
                                                www.ashwinipublicity.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Notice */}
                <div className='text-center mt-8 text-muted-foreground'>
                    <p className='text-sm'>
                        <strong>Note:</strong> Please direct all media inquiries to Ashwini Publicity.
                        Event organizers will not respond to direct press requests.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PressMedia 