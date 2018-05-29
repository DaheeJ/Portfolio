import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'
import './animations.css'





const pages = [
    style => <animated.div style={{ ...style, background: '#247BA0' ,height:'100%'}} className='page'>
    <div style={{height: '200px', width:'200px'}}>
    <h1>Hellow Im sexy</h1></div>
    </animated.div>,
    style => <animated.div style={{ ...style, background: '#B2DBBF', height: '100%' }} className='page'><div style={{ height: '200px', width: '200px' }}>
        <h1>How Sexy are you?</h1></div></animated.div>,
    style => <animated.div style={{ ...style, background: '#12DBBF', height: '100%' }} className='page'><div style={{ height: '200px', width: '200px' }}>
        <h1>Very?</h1></div></animated.div>,
         style => <animated.div style={{ ...style, background: '#B2DBBF', height: '100%' }} className='page'><div style={{ height: '200px', width: '200px' }}>
        <h1>How Sexy are you?</h1></div></animated.div>,
]

class SlideChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0 
        }
        this.nextPage = this.nextPage.bind(this)
    }
    nextPage () {
        console.log('Next Page')
        if (this.state.page +1<=pages.length -1){
            this.setState({
                page: this.state.page + 1
        
        })
    } else{
        this.setState( { page: 0})
    }
    }
    render () {
        return (
            <div className="contaniner" onClick={this.nextPage}>
            <Transition
                    native
                    from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
                    {pages[this.state.page]}
            </Transition>
        </div>
            )
    }

} 

export default SlideChildComponent;
