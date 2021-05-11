import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'
import WSLimage from '../../img/wsl.jpeg';
import Film2 from '../../img/debut.png';
import Film3 from '../../img/1999.png';
import Film4 from '../../img/drone.png';
import Film5 from '../../img/tamsui.png';
import Film6 from '../../img/reflections.png';

const Films = () => {
    return (
        <>

            <div id="Projects" className="third">
                {/*
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Project id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
                */}
                <div className="film-card">
                    <div className="film-image-container" >
                        <img src={WSLimage} alt="where star lies" className="film-image"/>
                    </div>
                    <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2019</p>
                            <div>
                                <h2 className="film-name">Where Star Lies</h2>
                                <p className="film-des">21'59''</p>
                                <p className="film-des">Drama/Romance</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="film-card">
                <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2019</p>
                            <div>
                                <h2 className="film-name">Debut</h2>
                                <p className="film-des">17' 56''</p>
                                <p className="film-des">Drama/Costume/Family</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="film-image-container" >
                        <img src={Film2} alt="where star lies" className="film-image"/>
                    </div>
                    
                </div>

                <div className="film-card">
                    <div className="film-image-container" >
                        <img src={Film3} alt="where star lies" className="film-image"/>
                    </div>
                    <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2017</p>
                            <div>
                                <h2 className="film-name">1999</h2>
                                <p className="film-des">6' 36''</p>
                                <p className="film-des">Drama/Romance</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="film-card">

                <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2018</p>
                            <div>
                                <h2 className="film-name">Eyes to see Taiwan</h2>
                                <p className="film-des">15' 30''</p>
                                <p className="film-des">Documentary</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="film-image-container" >
                        <img src={Film4} alt="where star lies" className="film-image"/>
                    </div>
                    
                </div>

                <div className="film-card">
                    <div className="film-image-container" >
                        <img src={Film5} alt="where star lies" className="film-image"/>
                    </div>
                    <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2018</p>
                            <div>
                                <h2 className="film-name">Tamsui Memories</h2>
                                <p className="film-des">15' 30''</p>
                                <p className="film-des">Documentary</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="film-card">

                <div className="film-title">
                        <div style={{"display": "flex", "flexDirection": "col"}}>
                            <p className="film-year">2020</p>
                            <div>
                                <h2 className="film-name">Reflections</h2>
                                <p className="film-des">3' 20''</p>
                                <p className="film-des">Drama/Romance</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="film-image-container" >
                        <img src={Film6} alt="where star lies" className="film-image"/>
                    </div>
                    
                </div>

                
            </div>
        </>
    )
}

export default Films;
