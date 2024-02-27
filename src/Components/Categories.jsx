import React from 'react'
import '../Styles/Categories.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import Data from './Data';

const Categories = () => {
    const data=[
        {
            build:"Webbuilder 1",
            support:"Computer  Modern clasic with wix support",
            cost:"$39.96",
            originalcost:"$49.96",
            discount:"(20% off)"
        },
        {
            build:"Webbuilder 1",
            support:"Computer  Modern clasic with wix support",
            cost:"$39.96",
            originalcost:"$49.96",
            discount:"(20% off)"
        },
        {
            build:"Webbuilder 1",
            support:"Computer  Modern clasic with wix support",
            cost:"$39.96",
            originalcost:"$49.96",
            discount:"(20% off)"
        },
    ]
    return (
        <div className='categories'>
<h1>Best Website Builders in the US</h1><hr />
            <div id='first'>
                <CheckCircleOutlineIcon className='checkicon' />
                <span className='span1'>Last Updated - Febrauary 22,2020</span>
                <InfoOutlinedIcon className='infoicon' />
                <span className='span2'>Advertising Disclosure</span>
                <select name="" id="">
                    <option value="">Top Relevant</option>
                </select>
            </div><hr />
            <div id='second'>
                <span>Tools</span>
                <span>AWS Builder</span>
                <span>Start Build</span>
                <span>Build Supplies</span>
                <span>Tooling</span>
                <span>BlueHosting</span>
            </div>
            <div id="third">
                <span>Home</span>
                <NavigateNextOutlinedIcon />
                <span>Hosting For All</span>
                <NavigateNextOutlinedIcon />
                <span>Hosting</span>
                <NavigateNextOutlinedIcon />
                <span>Hosting6</span>
                <NavigateNextOutlinedIcon />
                <span>Hosting5</span>
            </div>
            <Data/>
            <div className="fourth">
                <p>Related deals you might like for</p>
                <div className="container">
                    {data.map((state)=>(
                        <div className="card3">
                            <img src="/images/img.png" alt="" />
                            <div className='discount'>
                                <span className='percentage'>20% off</span>
                                <span className='offer'>Limited Offer</span>
                            </div>
                            <div className='build'>{state.build}</div>
                            <div className='support'>{state.support}</div>
                           <div className='money'>
                           <span className='cost'>{state.cost}</span>
                            <span className='ocost'>{state.originalcost}</span><br />
                            <span className='discount'>{state.discount}</span>
                           </div>
                            <button className='btn3'>View deal</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fifth">
                <div className='sign'>
                    <p>Sign up and get exclusive special deals</p>
                </div>
                <div className='signin'>
                    <input type="text" />
                    <span>Sign up</span>
                </div>
            </div>
        </div>
    )
}

export default Categories