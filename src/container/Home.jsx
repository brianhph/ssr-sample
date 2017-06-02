import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component { 
  render () {
    return (
      <div>
        <div>Home component</div> 
        <div>{this.props.test.get('val1')}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ test: state.get('test') });

export default connect(mapStateToProps)(Home);
