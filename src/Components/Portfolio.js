import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
        var projects = this.props.data.projects.map(function(project){
                return <div key={project.title}><h3>{project.title}</h3>
                    <p className="info"><em className="date">{project.language} </em>  <span>&bull;</span>{project.description}</p>
              </div>
        })

    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
