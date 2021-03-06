import React from 'react'
import 'animate.css'

const styles = {
    bg: {
        position: 'absolute',
        top: 64,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 64px)',
        background: '#DEF3F4'
    },
    loadingTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -45,
        marginTop: -18,
        color: '#000',
        fontWeight: 500,
        fontSize: 20
    }
}

class LoadingDemo extends React.Component {
    render() {
        return (
            <div style={styles.bg}>
                <h3 style={styles.loadingTitle} className="animated bounceInLeft">
                    加载中......
                </h3>
            </div>
        )
    }
}

export default LoadingDemo
