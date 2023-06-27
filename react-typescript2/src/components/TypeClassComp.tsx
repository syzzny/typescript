import React, { Component } from 'react'

// props 값을 가져오기 위해 interface로 사용
interface CounterProps {
    startNumber : number;
    name? : string;
    check? : boolean;
}
// state를 사용하기 위해서 interface를 지정해서 ㄴ허야한다.
interface CounterState {
    number : number;
    text : string;
    array : number[];
}

// 클래스형의 제너릭의 자료형(타입)을 지정
// 자료형을 지정해주면 들어오는 props의 자료형을 알고 메소드를 쓸수있다.
// 이름을 미리 지정을 했기 때문에 props의 이름을 자동완성으로 가져올 수 있다.
export default class TypeClassComp extends Component<CounterProps,CounterState> {

    // state를 사용하기 위해 constructor 생성
    // props의 자료형은 위에서 작성한 interface로 작성
    constructor(props: CounterProps){
        super(props)
        this.state = {
            number : props.startNumber,
            text : "hi",
            array : [1,2,3]
        }
    }

    // 이벤트 함수안에 들어가있으면 e객체의 자료형을 지정할 필요가 없지만 
    // 밖으로 꺼내서 쓰면 관련이벤트의 자료형으로 작성
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({text: e.target.value})
    }

    handleNum = () => {
        
    }

    render(){
        return (
            <div>
                <h3>TypeClassComp</h3>
                {/** render에서 화면에 출력되는 방식은 동일 */}
                <p>{this.props.startNumber}</p>
                <p>{this.props.name}</p>
                <p>{this.state.number}</p>
                <p>{this.props.check ? "확인" : "미확인"}</p>
                {
                    this.state.array.map((num)=>(
                        <li>{num}</li>
                    ))
                }

                <h3>바뀌는 숫자 : {this.state.number}</h3>
                <button onClick={()=>{this.setState({number:this.state.number+1})}}>
                    +1
                </button>
                {/** 이벤트 객체의 값을 가져오는 이벤트 함수 */}
                <h3>글자작성 : {this.state.text}</h3>
                <input type="text" onChange={this.handleChange}/>
                {/** input 태그에 숫자값을 넣으면 state의 num이 바뀜 */}
                <input type="number" onChange={this.handleNum} />
            </div>
        )
    }
}
