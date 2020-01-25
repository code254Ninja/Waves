import React, { PureComponent } from 'react';

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header className= 'bck_b_light'>
                <div className = 'container'>
                    <div className='left'>
                        <div className='logo'>
                            WAVES

                        </div>

                    </div>
                    <div className='right'>
                        <div className = 'top'>
                            LINKS
                        </div>
                        <div className = 'bottom'>
                            LINKS
                        </div>


                    </div>

                </div>
            </header>
            
        );
    }
}

export default Header;