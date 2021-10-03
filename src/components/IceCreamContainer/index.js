import { connect } from "react-redux";
import { buyIceCream } from "../../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
