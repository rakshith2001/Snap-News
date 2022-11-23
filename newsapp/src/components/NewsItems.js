
import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
       let {title,description,imageUrl,newsUrl,author, date,source} = this.props;
        return (
            <div className="my-4">
                  <div className="card" >
                  <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>{source}</span>
                    <img src={!imageUrl?"https://blogger.googleusercontent.com/img/a/AVvXsEhiFZua2TKlWOHoZ5qipQ8zBVpSMbXNdxOFJmwNkddvji4GqJRO4SonCCmwV_IBrxtHCb2UlJ850RuZPY75s54QZkedzrYthaQqoo4tuOD3zUbMhTGxJ2T-rFtSu8I1vRJY9RtH8dWw7_5XtGfoeUvJuAWZU-U9XLsHKTKffBSWD6G9su34rjkO0sYD-w=w1200-h630-p-k-no-nu":imageUrl} class="card-img-top" alt="coin img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a  rel="noreferrel" href={newsUrl} className="btn btn-primary btn-dark">Go somewhere</a>
                    </div>
</div>
            </div>
        )
    }
}

export default NewsItems
