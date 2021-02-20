import './input.css';
import history from '../history'
export default () => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') history.push('/card');
    };
    return (
        <div>
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
