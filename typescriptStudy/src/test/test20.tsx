import type { JSX } from "react";
import { useState } from "react";
//리액트에서 ts 쓰는법
const Test20 = () => {

    // jsx 문법은 JSX.Element
    let 박스: JSX.Element = <div></div>;

    //초기값을 넣어주면 알아서 타입지정을 해준다.
    const [user, setUser] = useState("");

    //어떤 타입이 들어올지 모른다면
    const [user1, setUser1] = useState<string | number>("");

    return (
        <div>
            <TestComponent name="철수" age={20} > 
            </TestComponent>
        </div>
    )
}

//컴포넌트 만들 떄 타입 지정
//props 타입 지정
const TestComponent = (props: { name: string, age: number }): JSX.Element => {
    return <h1>{props.name}컴포넌트입니다. {props.age}</h1>
}

//구조분해할당으로 사용하면
const TestComponent2 = ({ name, age}:{name:string, age:number}): JSX.Element => {
    return <h1>{name}컴포넌트입니다. {age}</h1>
}

//미리 타입 alias해서 사용하기
type  TestCom3Type = {name:string, age:number}
const TestComponent3 = ({ name, age}:TestCom3Type): JSX.Element => {
    return <h1>{name}컴포넌트입니다. {age}</h1>
}

export default Test20;