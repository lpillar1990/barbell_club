import React from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../lib/getDimensions';

const YoutubeEmbed = function ({ embedId }) {
  const { width } = useWindowDimensions();

  return (

    <div className="video-responsive">

      <div className="mb-10 text-center">
        <h2 className="pb-5 text-4xl font-semibold leading-6 tracking-wider text-white uppercase sm:text-3xl lg:text-4xl">North Down Barbell Club</h2>
        <p className="mt-2 text-3xl font-extrabold text-red-700 sm:text-4xl lg:text-5xl">
          Strength & Conditioning Personal Training
        </p>
      </div>
      <iframe
        width={width > 1000 ? 1000 : width - 40}
        height={width > 1000 ? 400 : width / 1.77}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
