import './Counter.css'
import React, {useState} from "react";

export default function Counter(){
    const [value, setValue] = useState(0)
    const [range, setRange] = useState(1)

    const handleDecrease = () => {
        setValue(old => old - range)
    }

    const handleIncrease = () => {
        setValue(old => old + range)
    }

    return (
        <React.Fragment>
            <h3 data-testid="title" className='text-center'>My Counter</h3>
            <p data-testid="value" className={value > 100 ? 'green': (value < -100 ? 'red':'')} style={{
                fontWeight:'bold',
                fontSize: 'larger',
                textAlign: 'center'
            }}>{value}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 'auto',
                width: '40%'
            }}>
                <button data-testid="decrease" onClick={handleDecrease}>-</button>
                <input 
                    data-testid="input"
                    type='number' 
                    value={range} 
                    onChange={e => setRange(parseInt(e.target.value))}
                    style={{
                        flexGrow: 1,
                        textAlign: 'center'
                    }}/>
                <button data-testid="increase" onClick={handleIncrease}>+</button>
            </div>
        </React.Fragment>
    )   
}