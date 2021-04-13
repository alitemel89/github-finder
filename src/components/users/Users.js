import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      {
        login: "mojombo",
        id: 1,
        html_url: "https://github.com/mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        login: "pjhyett",
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;