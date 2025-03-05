import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const logo = 'logo_single_animation.gif'; // Adjust path as needed

function PrivacyPolicy() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} className="text-center">
          <Image 
            src={logo} 
            alt="Company Logo" 
            className="mb-4" 
            style={{ maxHeight: '120px' }}
          />
          <h1>Privacy Policy</h1>
          <h4>Effective Date: March 05, 2025</h4>
          <h4>Last Updated: March 05, 2025</h4>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div className="privacy-content">
            <p className="lead">
              Hey there, gaming friends! Welcome to the world of WeatherStew ("we," "us," or "our"), a game company that brings you fun apps like "Fart Ascent" and more (collectively, our "Apps"). We're thrilled you're here, and we promise to keep your privacy as safe as a high score! This Privacy Policy covers all our Apps on the Google Play Store, iOS App Store, and our website at weatherstew.com. By playing our Apps, you're cool with the practices we describe below.
            </p>
            
            <div className="privacy-section">
              <h4>1. Information We Collect</h4>
              <p>Good news: We don't collect a single byte of your personal info!</p>
              <ul>
                <li>Our Apps, including "Fart Ascent," are like little playgrounds that stay on your device. No data gets sent to us or anyone else.</li>
                <li>We're not snooping for your name, email, location, or even what you had for breakfast. It's all fun and games, kept right where you play!</li>
              </ul>
            </div>
            
            <div className="privacy-section">
              <h4>2. How We Collect Information</h4>
              <p>Since we're not collecting anything, there's no sneaky business to report. Our Apps just hang out locally on your device, minding their own business.</p>
            </div>
            
            <div className="privacy-section">
              <h4>3. How We Use Your Information</h4>
              <p>No data? No problem! We don't use any info because there's none to use. Our Apps are all about delivering joy straight to your screen—no strings (or data) attached.</p>
              <p>In-App Purchases: Some of our Apps might offer extra goodies to buy (like coins in "Fart Ascent"), but we don't handle that info. The Google Play Store or iOS App Store takes care of all payment stuff, and we don't peek at it!</p>
            </div>
            
            <div className="privacy-section">
              <h4>4. How We Share Your Information</h4>
              <p>Share what? We've got nothing to share! Your privacy is locked up tighter than a treasure chest on a sunken ship!</p>
            </div>
            
            <div className="privacy-section">
              <h4>5. Third-Party Services</h4>
              <p>No third-party pals here! Our Apps don't team up with analytics, ads, or data-collecting sidekicks. (The app stores handle in-app purchases, but that's their gig, not ours!)</p>
            </div>
            
            <div className="privacy-section">
              <h4>6. Your Choices and Rights</h4>
              <p>With no data in play, you don't need to tweak any settings. You're the boss of your game, and we're just here to cheer you on. Got questions? Hit us up (see Section 9)!</p>
            </div>
            
            <div className="privacy-section">
              <h4>7. Data Security</h4>
              <p>Since we're not grabbing any data, there's nothing to guard beyond what your device already handles. You're safe with us—no hacks, no worries!</p>
            </div>
            
            <div className="privacy-section">
              <h4>8. Data Retention</h4>
              <p>Retain data? Nah, we don't even collect it! Our Apps are all about living in the moment, not storing stuff.</p>
            </div>
            
            <div className="privacy-section">
              <h4>9. Children's Privacy</h4>
              <p>Our Apps are a blast for players of all ages, including kids! And since we don't collect any info, parents can relax—no privacy puzzles to solve here.</p>
            </div>
            
            <div className="privacy-section">
              <h4>10. Contact Us</h4>
              <p>Got a question or just want to say hi? We're all ears! Reach out at:</p>
              <p>Email: carl@weatherstew.com<br />
              Website: weatherstew.com</p>
              <p>Drop us a line—we'd love to chat about games or, well, anything fun!</p>
            </div>
            
            <div className="privacy-section">
              <h4>11. Changes to This Privacy Policy</h4>
              <p>If we ever shake things up (like adding new features that collect data), we'll update this policy and give you a heads-up via our Apps or website. Check back here for the latest, marked with a fresh "Last Updated" date.</p>
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy; 