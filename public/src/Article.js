import React, { Component } from 'react';
import './Article.css';


class Article extends Component {
    
//    constructor(props){
//        super(props);
//        this.state = {datas: []};
//    }
    state = {datas: []}

    componentDidMount() {
        var that=this;
        fetch('/api')
            .then(datas => 
                datas.text()
                .then(function(datas){
                        var data=datas.replace(/\n}\n{\n/g,"};splitter;{");
                        data=data.replace(/\n/g,"");
                        data=data.split(";splitter;");  
                        data=JSON.parse(JSON.stringify(data));
                        var datum=[];
                        for(var i=0; i<data.length;i++){
                            datum.push(JSON.parse(data[i]));
                        };
                        return datum;
                    }
                )
            ).then(function(datas){
                that.setState({datas});
            })
    }
    
    render() {
        return (
            <div className="fixed">    
                {this.state.datas.map(data =>
                    <div className="articleContainer">
                        <h1 className="headline">{data.headline}</h1>
                        <h2 className="byLine">{data.byLine}</h2>
                        <a className="url" href={data.url}>
                            <img src={data.imageUrl} alt="" className="image"/>
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default Article;
