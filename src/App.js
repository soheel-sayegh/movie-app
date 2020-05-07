import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Details from './Deatails';
import logo from './kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc9250ede49.9926975015644613490609.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class App extends Component {
  state = {
    serach: 'new',
    movies: '',
    movieId: '',
  };
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  getId = (e) => {
    this.setState({movieId: e.target.id});
  };
  findMovies = () => {
    const api = 'https://www.omdbapi.com/?i=tt3896198&apikey=2ffd923b';

    axios.post(api + '&s=' + this.state.serach).then((data) => {
      if (data) {
        console.log(data.data.Search);
        this.setState({movies: data.data.Search});
      } else {
        console.log('error');
      }
    });
  };

  componentDidMount() {
    const api = 'https://www.omdbapi.com/?i=tt3896198&apikey=2ffd923b';

    axios.post(api + '&s=' + this.state.serach).then((data) => {
      if (data) {
        console.log(data.data.Search);
        this.setState({movies: data.data.Search});
      } else {
        console.log('error');
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container-fluid">
            <div className="row">
              <div className="title">
                <div className="logoDiv d-flex justify-content-center align-items-center">
                  <img className="logo" src={logo} alt="no logo" />
                  <div>
                    <h1 className="logotitle">MOVIES</h1>
                  </div>
                </div>
              </div>
            </div>
            <Route exact path="/movie-app">
              <div className="row mt-3">
                <div className="col-12 ">
                  <div className="wrapper">
                    <input
                      type="text"
                      onChange={this.onChange}
                      name="serach"
                      className="input"
                      placeholder="What are you looking for?"
                    />
                    <div className="searchbtn" onClick={this.findMovies}>
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                {this.state.movies ? (
                  this.state.movies.map((m, i) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={m.Poster}
                          alt="no img"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{m.Title}</h5>
                          <p className="movieP mb-1">Type: {m.Type}</p>
                          <p className="movieP mb-1">Year: {m.Year}</p>
                          <Link
                            to="/movie-app/Details"
                            id={m.imdbID}
                            onClick={this.getId}
                            className="btn btn-block"
                          >
                            Movie Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1 className="noResult">
                    <div>
                      <i className="far fa-frown-open sad"></i>
                    </div>
                    {"'" +
                      this.state.serach +
                      "' " +
                      'There is no Movies with this name'}
                  </h1>
                )}
              </div>
            </Route>
            <Route exact path="/movie-app/Details">
              <Details movieId={this.state.movieId} />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
