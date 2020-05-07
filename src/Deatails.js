import React, {Component} from 'react';
import axios from 'axios';
import './deatails.css';
import {Redirect} from 'react-router-dom';

export class Deatails extends Component {
  state = {
    movieDeatils: '',
  };

  componentDidMount() {
    const api = 'https://www.omdbapi.com/?i=';

    axios.post(api + this.props.movieId + '&apikey=2ffd923b').then((data) => {
      if (data) {
        console.log(data.data);
        this.setState({movieDeatils: data.data});
      } else {
        console.log('error');
      }
    });
  }
  render() {
    console.log(this.props.movieId);
    return (
      <div>
        {this.props.movieId ? (
          <div className="container mt-4">
            <div className="row">
              <div className="col-12">
                <div className="row firstRow">
                  <div className="imgD col-4 p-0 text-center">
                    <img
                      className="MovieImg"
                      src={this.state.movieDeatils.Poster}
                      alt="no Img"
                    />
                  </div>
                  <div className="col-8 p-0">
                    <h3 className="text-center DTitle">
                      {this.state.movieDeatils.Title}
                    </h3>
                    <ul className="text-white">
                      <li>
                        <span>Genre : </span>
                        {this.state.movieDeatils.Genre}
                      </li>
                      <li>
                        <span>Year : </span>
                        {this.state.movieDeatils.Year}
                      </li>
                      <li>
                        <span>Director : </span>
                        {this.state.movieDeatils.Director}
                      </li>
                      <li>
                        <span>Actors : </span>
                        {this.state.movieDeatils.Actors}
                      </li>
                      <li>
                        <span>BoxOffice : </span>
                        {this.state.movieDeatils.BoxOffice}
                      </li>
                      <li>
                        <span>Awards : </span>
                        {this.state.movieDeatils.Awards}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <h3 className="text-white mb-0 mt-3 ml-2 polt">Plot :</h3>
                <p className="Plot text-white">
                  {this.state.movieDeatils.Plot}
                </p>
              </div>
              <div>
                <a href="https://soheel-sayegh.github.io/movie-app/">
                  <button className="btn btn-danger ">
                    <i className="fas fa-arrow-left"></i> Back{' '}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="https://soheel-sayegh.github.io/movie-app" />
        )}
      </div>
    );
  }
}

export default Deatails;
