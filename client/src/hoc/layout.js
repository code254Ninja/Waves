import React, { PureComponent } from 'react'
import Header from '../components/header_footer/header';
import Footer from '../components/header_footer/footer';

class Layout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='page_container'>
                    {this.props.container}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout