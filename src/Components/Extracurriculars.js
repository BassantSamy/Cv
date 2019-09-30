import React, { Component } from 'react';
class Extracurriculars extends Component {
    render()
    {
        if (this.props.data) {
            var extra = this.props.data.extracurricular.map(function (extracurricular) {

                return <div  key={extracurricular.title}><h3>{extracurricular.title}</h3>
                    <em className="date">{extracurricular.year} </em>
                    <p className="info"> {extracurricular.description}</p>
                </div>

            })
        }

            return (
            <section id="extracurriculars">

                <div className="row header">
                    <div className="twelve columns collapsed">
                        <h1  ><span>Extracurriculars</span></h1>
                    </div>
                </div>

                        <div className="row extra">
                            <div className="nine columns main-col">
                                {extra}
                            </div>
                        </div>
            </section>
        );
    }
}
export default Extracurriculars;
