import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1>Question Part</h1>
            <div>
                <h2>What is the purpose of Context API?</h2>
                <p>The React Context API is a way for a React app to effectively produce
                    global variables that can be passed around. This is the alternative to
                    "prop drilling" or moving props from grandparent to child to parent, and
                    so on. Context is also touted as an easier, lighter approach to state
                    management using Redux.
                </p>
            </div>
            <div><h2>What Semantic Tag?</h2>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning
                    to the web page rather than just presentation. For example, a

                    tag indicates that the enclosed text is a paragraph.</p>
            </div>
            <div>
                <h2>Inline block and inline-block</h2>
            </div>
        </div>
    );
};

export default Blog;