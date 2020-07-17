import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

import history from '../../history';

const StreamDelete = ({ match: { params }, streams, fetchStream }) => {
  useEffect(() => {
    fetchStream(params.id);
  }, []);

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  const RenerContent = () => {
    if (!streams) {
      return 'Do you want to delete this stream';
    }

    return `Want to delete this stream : ${streams.title}`;
  };

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={RenerContent()}
        actions={actions}
        onClose={() => history.push('/')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
