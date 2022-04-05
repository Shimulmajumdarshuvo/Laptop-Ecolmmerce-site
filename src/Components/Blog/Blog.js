import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-part'>
            <h1>Question Part</h1>
            <div>
                <h2>What is the purpose of Context API?</h2>
                <p>The React Context API is a way for a React
                    app to effectively produce global variables
                    that can be passed around. This is the alternative
                    to "prop drilling" or moving props from grandparent
                    to child to parent, and so on. Context is also touted
                    as an easier, lighter approach to state management
                    using Redux.

                </p>
            </div>
            <div><h2>What Semantic Tag?</h2>
                <p>Semantic এইচটিএমএল  or semantic markup হল এইচটিএমএল যা কেবল উপস্থাপনার
                    পরিবর্তে ওয়েব পৃষ্ঠার অর্থের পরিচয় দেয়। উদাহরণস্বরূপ, একটি P ট্যাগ নির্দেশ করে যে আবদ্ধ
                    একটি অনুচ্ছেদ। text টি  একটি paragraph.
                    একটি semantic element clearly describes its meaning to
                    both the browser and the developer.
                    Examples of semantic HTML tags include:.</p>
            </div>

        </div>
    );
};

export default Blog;