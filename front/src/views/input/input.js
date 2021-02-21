import './input.css';
import history from '../../history';
export default () => {
    const handleKeyDown = ({ key }) => {
        if (key === 'Enter') history.push('/card');
    };
    return (
        <div>
            <h3>weather buddy</h3>
            <hr className="Hr" />
            <h4>
                <b>how is the weather in </b>
                <b>
                    <input
                        onKeyPress={handleKeyDown}
                        type="text"
                        className="Input"
                        autoFocus
                    />
                </b>
                <b> ? </b>
            </h4>
        </div>
    );
};
