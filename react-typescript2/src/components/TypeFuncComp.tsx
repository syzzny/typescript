import React, { useState } from 'react'

// props의 값을 사용하기 위해서 interface 작성
interface CounterProps{
        startNumber : number;
        name? : string;
        check? : boolean;
    }

// 매개변수로 받아오는 props 타입지정
export default function TypeFuncComp(props:CounterProps) {

    // 안에 있는 속성을 알고있기때문에 ctrl+space를 이용하여 이름찾기
    const {startNumber, name, check} = props;

    // 현재 넣어준 값으로 타입이 고정되어서 사용
    const [text, setText] = useState('텍스트 작성');
    // 만약 count에 들어갈 타입이 두개이상이라면 <>안에 직접적용
    const [count, setCount] = useState<number | undefined>(0);
    const [array, setArray] = useState([1,2,3]);
    return (
        <div>
            <h3>TypeFuncComp</h3>
            <p>{props.startNumber}</p>
            <p>{props.name}</p>
            <p>{count}</p>
            <p>{text}</p>
            {/* props으로 check를 boolean 값으로 받아오기 */}
            <p>{props.check ? "확인" : "미확인"}</p>
            {/* useState로 [1,2,3]만들어서 map으로 출력하기 */}
            <p>{array}</p>
        </div>
    )
}
