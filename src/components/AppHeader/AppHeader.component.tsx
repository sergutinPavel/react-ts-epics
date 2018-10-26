import * as React from "react";
import { NavLink } from 'react-router-dom';

interface IOwnState {
  showHeader: boolean;
  scrollTop: number | undefined;
  [key: string]: any;
}
class AppHeaderComponent extends React.Component<any, IOwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showHeader: true,
      scrollTop: undefined
    };
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event: any): void => {
    const scrollTop = +event.srcElement.documentElement.scrollTop;
    if (this.state.scrollTop === undefined) {
      this.setState({showHeader: true, scrollTop});
      return;
    }
    if (this.state.scrollTop < scrollTop) {
      this.setState({showHeader: false, scrollTop})
    } else {
      this.setState({showHeader: true, scrollTop})
    }
  };

  render() {
    return (
      <header className={"app-layout__header" + (this.state.showHeader ? "": " hide")}>
        {/*<span className="mdi mdi-airballoon" />*/}
        <NavLink className={"btn btn-outline-primary"}
                 to="/home"
                 activeClassName={"active"}>Home</NavLink>
        <NavLink className={"btn btn-outline-primary"}
                 to="/dashboard"
                 activeClassName={"active"}>Dashboard</NavLink>
      </header>
    );
  }
}

export default AppHeaderComponent;
