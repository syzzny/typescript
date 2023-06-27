import React, {Component} from 'react'


// props 값 가져오기
interface CounterProps {
    startNumber : number;
}

// state 사용하기
interface CounterState {
    number : number;
    array : string[];
}

export default class TypeClassComp extends Component<CounterProps, CounterState>{

    // state를 사용하기 위해 construnctor 생성
    // props의 자료형은 위에서 작성한 interface로 작성
    constructor(props:CounterProps){
        super(props)
        this.state = {
            number : 0,
            array:["text","one","two"]
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        this.setState({number:value})
    }
render(){ 
        return (  
        <div>
            <h2>TypeClassComp</h2>
            <p>props 값으로 전달된 값: {this.props.startNumber}</p>
            <p>바뀌는 값: {this.state.number}</p>
            <label>수정할 숫자: </label>
            <input type="number" onChange={this.handleChange}/>
            {
                this.state.array.map((string, index)=>(
                    <li key={index}>
                        {index == 0 ? `id: ${string}`:`${index}: ${string}`}
                    </li>
                ))
            }
        </div>
    )
    }
}

    
    
