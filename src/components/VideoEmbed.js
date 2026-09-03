import React from 'react';

/**
 * Responsive 16:9 YouTube embed. Accepts the video ID only (not a full URL)
 * so it always resolves to the standard privacy-respecting embed endpoint.
 */
function VideoEmbed({ videoId, title }) {
  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed;
