import * as React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Isi from './components/Isi';
import './App.css';

interface IProps {
  count?: number;
}

interface IState {
  data: [
    {
      userId: number,
      id: number,
      title: string,
      body: string
    }
  ];
}

export default class App extends React.Component <IProps, IState> {
  state: IState = {
    data: [
      {
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }
    ]
  }

  componentDidMount = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response=> {
            const posts = response.data.slice(0,2);
            const tampil = posts.map((post: any) => {
              return{
                  ...post
              }
          });
            this.setState({data: tampil});
          });
  }

  render() {
    const posts = this.state.data.map(
      (post: { title: string; body: string; id: number}) => {
          return <Isi
                      key={post.id}
                      judul={post.title}
                      body={post.body}/>
      }
    );

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {posts}
      </header>
    </div>
    )
  };
}


