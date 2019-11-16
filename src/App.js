import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import loader from "./loader.gif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Users: [],
      post_per_page: 4,
      Query: "emma",
      loading: false
    };
  }

  loadMoreUser = e => {
    const { post_per_page } = this.state;
    this.setState({ post_per_page: post_per_page + 4 }, this.fetchUser);

    console.log("new user added");
  };

  fetchUser = () => {
    this.setState({ loading: true });

    fetch(
      `https://api.github.com/search/users?page=1&per_page=${this.state.post_per_page}&q=${this.state.Query}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(result => this.setState({ Users: result.items, loading: false }))

      .catch(err => console.log(err));
  };

  async componentDidMount() {
    await this.fetchUser();
  }

  onChangeSearch = e => {
    if (e.target.value === "") {
      this.setState({ Query: "emmann" }, this.fetchUser);
    } else if (e.target.value.length > 2) {
      this.setState({ Query: e.target.value }, this.fetchUser);
      this.setState({ post_per_page: 4 }, this.fetchUser);
    }

    // else {
    //   this.setState({ post_per_page: 4 }, this.fetchUser);
    //   this.setState({ Query: "emmann" }, this.fetchUser);
    // }
    // console.log(e.target.value);
    e.preventDefault();
  };

  render() {
    const { Users, Query } = this.state;
    // const loadUser = Users.map(user => user);

    let filterUsers = Users.filter(filterUser =>
      filterUser.login.toLowerCase().includes(Query.toLowerCase())
    );

    return (
      <div className="App">
        <Navbar NavbarSearchProps={this.onChangeSearch} />
        {!this.state.loading ? (
          <List UsersProps={filterUsers} />
        ) : (
          <img
            src={loader}
            alt="loading..."
            style={{
              position: "relative",
              display: "block",
              margin: "auto",
              width: "100px",
              marginTop: "30px"
            }}
          />
        )}

        <Button ButtonEvent={this.loadMoreUser} />

        <Footer />
      </div>
    );
  }
}

export default App;
