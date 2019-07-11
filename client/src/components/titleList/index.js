import React from "react";
import { connect } from "react-redux";
import { getMyList } from "../../redux/actions";

class TitleList extends React.Component {
  componentDidMount() {
    this.props.getTitleList();
  }
  render() {
    const { list } = this.props;
    return (
      <div>
        <h2>{"My List: "}</h2>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
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
    getTitleList: () => {
      dispatch(getMyList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleList);
