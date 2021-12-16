import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl}= this.props;
        return (
            <div className="card my-3 h-50 " style={{width: '18rem',}}>
            <img src={imgUrl?imgUrl:"https://s.yimg.com/ny/api/res/1.2/aqn6Ts48XLLKcfF.0a83IA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-02/805b1be0-656c-11eb-adbf-db42c9e9d764"} className="card-img-top " alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        )
    }
}
