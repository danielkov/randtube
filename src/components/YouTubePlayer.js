import React from 'react'

const YouTubePlayer = ({id}) => (
  <div style={
    {
      position: 'relative',
      paddingBottom: '56.25%',
      paddingTop: '25px',
      height: '0'
    }
  }>
    <iframe
      style={
        {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      }
      frameBorder="0"
      allowFullScreen="true"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
    ></iframe>
  </div>
)

export default YouTubePlayer
