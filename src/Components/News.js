import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "general",
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fb100e2622e48a2858af64f06531373&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.update();
  }

  handlePrevPage = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.update();
  };

  handleNextPage = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.update();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Trending News- Monkey News</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
