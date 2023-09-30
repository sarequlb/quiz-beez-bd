import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-div'>
                <div className='bg-red-200 blog-text text-center m-10 p-10 pt-1'>
                    <h1 className='mt-20 underline mb-5'>What Is HTML?</h1>
                    <h1> Hypertext Markup Language Basics Explained
                        What Is HTML? Hypertext Markup Language Basics Explained
                        HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes. </h1>
                </div>
                <div className='bg-red-200 blog-text text-center m-10 p-10'>
                    <h1 className='underline mb-5'>What is CSS?</h1>
                    <h1> Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to transform the presentation of a Web Pages as well as many ostensibly nonweb environments.

                        CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.

                        CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.

                    </h1>
                </div>
                <div className='bg-red-200 blog-text text-center m-10 p-10'>
                    <h1 className='underline mb-5'>What Is JAVASCRIPT?</h1>
                    <h1> JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area. </h1>
                </div>
                <div className='bg-red-200 blog-text text-center m-10 p-10'>
                    <h1 className='underline mb-5'>What Is REACT?</h1>
                    <h1> The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

                        In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.   </h1>
                </div>
                <div className='bg-red-200 blog-text text-center m-10 p-10'>
                    <h1 className='underline mb-5'>What Is GIT?</h1>
                    <h1> By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).   </h1>
                </div>
            </div>
    );
};

export default Blog;