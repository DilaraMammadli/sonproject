import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Blog_details.css'
import axios from 'axios';

function Blog_details() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`)
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <section className="image__main">
                <div className="conteiner">
                    <div className="bigimage">
                    </div>
                </div>
            </section>
            <section className="text__main">
                <div className="container">
                    <div className="text_center_blog">
                    <h1>{blogs.title}</h1>
                    </div>

                    <div className="blog_detls">
                        <div className="blog_own">   
                            <div className="blog__info">
                                <div className="blog_info_img">
                                    <img src={blogs.image} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="blog_two">
                           <div className="blog_center"><h2>
                                Latest News
                            </h2>
                            </div> 
                            <div className="news_blogs">
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div> 
                     </div>
            </section>
            <section>
                <div className="container">
                    <div className="section_blog_2">
                    <p className="sec-blog-text">{blogs.descript1}</p>

                    <div className="info__card">

                    <img src="/images/Blog/Content.svg" alt="" />
                        
                    </div>

                    <h2 className="qust1">{blogs.question1}</h2>
                    <p className="qust2">{blogs.answer1}</p>

                    <h2 className="qust1">{blogs.question2}</h2>
                    <p className="qust2">{blogs.answer2}</p>
                    </div>
       
                </div>
            </section>
            <section className="author__section">
                <div className="container">
                    <div className="author__sectionfoot">
                        <div className="author__image">
                            <img src={blogs.image} alt="" />
                        </div>
                        <div className="author__text">
                            <h1>{blogs.title}</h1>
                            <h6>Dizayner</h6>
                            <p>{blogs.designer_about}</p>

                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
};



export default Blog_details

