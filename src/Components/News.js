import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loding: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fb100e2622e48a2858af64f06531373&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fb100e2622e48a2858af64f06531373&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
    });
  };

  handleNextPage = async () => {
     

          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4fb100e2622e48a2858af64f06531373&page=${
              this.state.page + 1
            }&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            });
        
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Trending News- Today</h1>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
            <button
              className="btn btn-dark"
              onClick={this.handlePrevPage}
              disabled={this.state.page <= 1}
              >
              &laquo; Previous
            </button>
            <button
              className="btn btn-dark"
              onClick={this.handleNextPage}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
               Next &raquo; 
            </button>
          </div>
      </div>
      
    );
  }
}
