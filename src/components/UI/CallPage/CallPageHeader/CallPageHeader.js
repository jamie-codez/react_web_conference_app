import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentAlt, faUserCircle, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import './CallPageHeader.scss';

const CallPageHeader = () => {
    return (
        <div className="frame-header">
            <div className="header-items icon-block">
                <FontAwesomeIcon classname="icon" icon={faUserFriends}/>
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon classname="icon" icon={faCommentAlt}/>
                <span className="alert-circle-icon"></span>
            </div>
            <div className="header-item date-block">1:00 PM</div>
            <div className="header-items icon-block">
                <FontAwesomeIcon classname="icon profile" icon={faUserCircle}/>
            </div>
        </div>
    );
}
export default CallPageHeader;