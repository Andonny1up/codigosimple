import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css'

const IconButton = ({ icon, onClick, href, ...props }) => {
    if (href) {
        return (
            <a href={href} className='icon-button' {...props}>
                <FontAwesomeIcon icon={icon} />
            </a>
        );
    }
    return (
        <button onClick={onClick} className='icon-button'>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default IconButton;