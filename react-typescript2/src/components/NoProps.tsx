import React from 'react'

// props나 state를 쓰지않고 화면만 구성하는 컴포넌트는 자료형을
// 적지 않아도 된다.
// * 함수형일 경우는 hook을 쓰지않는 경우
export default function NoProps() {
    return (
        <div>
            <h3>No Props</h3>
            <p>props, state, hook을 사용하지 않는 컴포넌트</p>
        </div>
    )
}
