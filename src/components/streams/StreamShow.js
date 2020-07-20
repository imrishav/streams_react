import React, { useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

const StreamShow = ({ stream, fetchStream, match }) => {
  const videoRef = useRef();

  const mounted = useRef();

  const buildPlayer = () => {
    if (!stream) {
      return;
    }
    const { id } = match.params;
    let flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
  };

  useEffect(() => {
    fetchStream(match.params.id);
    // buildPlayer();
    return () => {};
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // do componentDidUpate logic
      buildPlayer();
    }
  });

  console.log(mounted);

  if (!stream) {
    return (
      <div>
        <h1>Loading,,</h1>
      </div>
    );
  }

  const { title, description } = stream;
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
