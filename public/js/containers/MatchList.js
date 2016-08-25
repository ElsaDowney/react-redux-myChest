
import MatchList from '../components/MatchList';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {matches:state.matchListReducer.matches};
}

function mapDispatchToProps(dispatch) {
  return {
    onMatch:(userName)=>{
      dispatch({type:'GET_MATCH',userName});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MatchList);
