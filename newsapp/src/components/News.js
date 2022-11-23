import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultPorps = {
    country: 'in',
    pageSize: 6,
    catagory: 'general'
  }
  static PropType = {
    country : PropTypes.string,
    pageSize:PropTypes.number,
    catagory: PropTypes.string,

  }
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page : 1
            
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=6d0ad0d21edf4b94aa58057866e11331&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults, loading:false})
                
        
    }

    handlePrevClick= async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=6d0ad0d21edf4b94aa58057866e11331&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles})
      this.setState({
        page: this.state.page -1,
        articles: parsedData.articles,loading:false
      })

    }

    handleNextClick= async ()=>{
      if(!(Math.ceil(this.state.page +1 > this.state.totalResults/this.props.pageSize))){

 
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=6d0ad0d21edf4b94aa58057866e11331&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({articles:parsedData.articles})
            this.setState({
              page: this.state.page +1,
              articles: parsedData.articles,loading:false
      })
    }

    }


    render() {
        return (
            <div className="container my-3">
                    <h2 className="text-center" style={{margin:"35px 40px"}}>Flash News!!</h2>
                    {this.state.loading&&<Spinner/>}     
                    <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col md-4" key={element.url}>
                                <NewsItems title={element?element.title:""} description={element?element.descriptionK:""} imageUrl={element.urlToImage } newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                        
                        </div>
                        <div className="container d-flex justify-content-between ">
                        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Back</button>
                        <button  disabled={this.state.page +1 > this.state.totalResults/this.props.pageSize} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                          
                        </div>
            </div>
        )
    }
}

export default News
