import React from 'react'
import { ShareButtons, generateShareIcon } from 'react-share'

import './Share.css'

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');

const Share = ({url}) => (
  <div className="share-container">
    <h1 className="social-header">Share...</h1>
    <FacebookShareButton url={url} className="social-icon-container"><FacebookIcon className="social-icon icon-fb"/></FacebookShareButton>
    <GooglePlusShareButton url={url} className="social-icon-container"><GooglePlusIcon className="social-icon icon-gp"/></GooglePlusShareButton>
    <TwitterShareButton url={url} className="social-icon-container"><TwitterIcon className="social-icon icon-tw"/></TwitterShareButton>
    <WhatsappShareButton url={url} className="social-icon-container"><WhatsappIcon className="social-icon icon-wa"/></WhatsappShareButton>
  </div>
)

export default Share
