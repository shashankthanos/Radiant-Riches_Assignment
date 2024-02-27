import React from 'react'
import '../Styles/Data.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Data = () => {
    const data = [
        {
            id: 1,
            build: 'Builder 1',
            content: 'WixPro 72-Inch Responsive Website Builder-',
            content2: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            rating: 9.8,
            stars: 'images/IMAGE.png',
            grade: 'Exceptional',
        },
        {
            id: 2,
            build: 'Builder',
            content: 'SiteCraft 68-Inch Ultimate Web Design Studio-',
            content2: ' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
            highlights: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
            rating: 9.5,
            stars: 'images/img2.png',
            grade: 'Excellent',
        },
        {
            id: 3,
            build: 'Builder 1',
            content: 'WixPro 72-Inch Responsive Website Builder-',
            content2: ' Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            rating: 9.3,
            stars: 'images/IMAGE.png',
            grade: 'Exceptional',
        }
    ]
    
    return (
        <div className='card-container'>
            {
                data.map((state) => (
                    <div key={state.id} className='card'>
                        <div className="vector">
                            <img src='/images/Rectangle.png' alt="" />
                            <p>{state.id}</p>
                        </div>
                        <div className="image">
                            <img src="/images/img.png" alt="" />
                            <p>{state.build}</p>
                        </div>
                        <div className="content">
                            <strong>{state.content}</strong><span>{state.content2}</span><br />
                            <strong>Main Highlights</strong>
                            <p>{state.highlights}</p>
                            <button>Show More <KeyboardArrowDownIcon className='downicon' /> </button>
                        </div>
                        <div className="ratings">
                            <p className='number'>{state.rating}</p>
                            <p className='grade'>{state.grade}</p>
                            <img src={state.stars} alt="" />
                        </div>
                        <button className='btn'>View</button>
                    </div>
                ))
            }
            <div className="card2">
                <div className="vector">
                    <img src="/images/Rectangle.png" alt="" />
                    <p>4</p>
                </div>
                <div className="image">
                    <img src="/images/img.png" alt="" />
                    <p>CDK</p>
                </div>
                <div className='contents'>
                    <strong>CDK Resposive Builder:</strong><span>An extensive library of widgets and apps, and detailed step-by-step guides</span><br />
                    <strong>Main Highlights</strong>
                    <div className='highlights'>
                        <div>
                            <span className='sp'>9.8</span>
                            <span> Building Responsive</span>
                        </div>
                        <div>
                            <span className='sp'>8.9</span>
                            <span> Cool</span>
                        </div>
                        <div>
                            <span className='sp'>8.9</span>
                            <span> Docs</span></div>
                    </div>
                        <p>Why we love it</p>
                    <div className='show'>
                            <img src="/images/tick.png" alt="" />
                            <span>Documentation</span><br />
                            <img src="/images/tick.png" alt="" />
                            <span>Easy Use</span><br />
                            <img src="/images/tick.png" alt="" />
                            <span>Out od Box</span>
                    </div>
                        <button>Show More <KeyboardArrowDownIcon className='downicon' /> </button>
                </div>
                <div className="ratings">
                    <p className="number">9.8</p>
                    <p className="grade">Very Good</p>
                    <img src="/images/img3.png" alt="" />
                </div>
                <button className='btn1'>View</button>
            </div>
        </div>
    )
}

export default Data