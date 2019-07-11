import React from "react";
import { connect } from "react-redux";
import { getMyList, removeItem } from "../../redux/actions";
import "./index.css";

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toRemove: false
    };
  }

  componentDidMount() {
    this.props.getMyList();
  }

  handleClick = item => {
    this.props.removeItem(item);
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        <div className="myList">
          {list.map((item, index) => {
            return (
              <div className="slide" key={index}>
                <img className="img" src={item.img} alt={item.title} />
                <div> {item.title}</div>
                <input
                  type="button"
                  className="button"
                  value="Remove"
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
    list: state.myList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyList: () => {
      dispatch(getMyList());
    },
    removeItem: item => {
      dispatch(removeItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);
