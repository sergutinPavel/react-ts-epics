import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {IApplicationState} from "../../store/root.reducer";
import {ToggleSidebarAction, ExampleAction} from "../../store/general/general.actions";
import {history} from "../../store";

class DashboardComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  sidebar = () => {
    // this.props.toggleSidebar();
    this.props.exampleAction();
  };

  navigateTo = () => {
    // browserHistory.push(url);
    const url: string | undefined = '/home';
    history.push(url);
  };

  public render() {
    console.log('this', this);
    return (
      <div onClick={this.sidebar}>
        DashboardComponent
      </div>
    )
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  expandSidebar: state.general.expandSidebar,
  exampleData: state.general.exampleData
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleSidebar: () => dispatch({...new ToggleSidebarAction(false)}),
  exampleAction: () => dispatch({...new ExampleAction()})
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
