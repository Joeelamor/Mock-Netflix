import React from "react";
import { connect } from "react-redux";
import { getRecommendations, addItem } from "../../redux/actions";
import "./index.css";

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toAdd: false
    };
  }

  componentDidMount() {
    this.props.getRecommendations();
  }

  handleClick = item => {
    this.props.addItem(item);
  };
  render() {
    const { list } = this.props;
    return (
      <div>
        <div className="recommendations">
          {list.map((item, index) => {
            return (
              <div className="slide" key={index}>
                <img className="img" src={item.img} alt={item.title} />
                <div> {item.title}</div>
                <input
                  type="button"
                  className="button"
                  value="Add"
                  onClick={() => this.handleClick(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecommendations: () => {
      dispatch(getRecommendations());
    },
    addItem: item => {
      dispatch(addItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendations);
