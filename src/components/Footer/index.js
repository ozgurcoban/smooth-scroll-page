import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksWrapper,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/sign-up'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>dolla</SocialLogo>
              <WebsiteRights>dolla © 2020 All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href='//www.facebook.com'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.instagram.com'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.youtube.com/'
                  target='_blank'
                  aria-label='Youtube'
                  rel='noopener noreferrer'
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  target='_blank'
                  aria-label='Twitter'
                  href='//www.twitter.com'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.linkedin.com'
                  target='_blank'
                  aria-label='Linkedin'
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
