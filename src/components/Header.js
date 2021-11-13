import PropTypes from 'prop-types'
import Button from './Button'


// was made with arrow function component shortcut --> rafce 
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = 'green' text='Add' onClick={onClick}/>
        </header>
    )
}


//  Default Props:
//  can be used to set default props for when those fields aren't
//  specified in the component use.
//  -----Enforce WARNING if type doesn't match 
//     -->  title: PropTypes.string, 
//  -----Enforce ERROR if type doesn't match 
//     -->  title: PropTypes.string.isRequired, 

Header.defaultProps = {
    title: 'Task Tracker',
}

//  Prop Types:
//  can be used to enforce types in the fields of props
//  ** Requires that you import PropTypes at the top **
//  -----Enforce WARNING if type doesn't match 
//     -->  title: PropTypes.string, 
//  -----Enforce ERROR if type doesn't match 
//     -->  title: PropTypes.string.isRequired, 

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}


export default Header
