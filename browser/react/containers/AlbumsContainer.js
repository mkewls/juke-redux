import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps ({albumList}) => ({
  albumList
});

const mapDispatchToProps (dispatch) => ({
  albumList: () => dispatch(receiveAlbums())
})

export default const albumComponent = connect (mapStateToProps, mapDispatchToProps)(Albums);
