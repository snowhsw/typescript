// 타입이 너무 길변 변수에 담아쓰기

const Test06 = () =>{
    
    //대문자 관습 
    //tpye alias(별칭) 이라고 한다 

    type AnimalType1 = string | number | undefined;
    const 동물1 : AnimalType1 = 123;

    type AnimalType2 = {name: string, age: number}
    const 동물2:AnimalType2 = {name: "사자", age: 14}

    // const 변수는 재할당은 안돼지만 내부의 객체 값을 변경하는 것은 가능하다.
    // 하지만 readonly를 사용하면 수정을 못하게 한다.
    type GirlfrinedType = { readonly name: string }

    const 여친:GirlfrinedType = { name: "엠버" }

    여친.name="유라"

    // ?는 옵션이지만 사실상 string or undefined
    type GirlfrinedType2 = { name?: string }

    // alias들을 유니온 타입으로 합치기 가능
    type Name = string;
    type Age = number;
    type Person = Name | Age;

    //&연산자로 object타입 합치기(extend 확장하기)
    type PositonX = { x:number };
    type PositonY = { y:number };
    type PositonType = PositonX & PositonY;

    const posiotn : PositonType = {x:24, y:23}

    //타입 키워드는 재정의가 불가능하다


    //예제1
    //object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
    // 1. 같은 타입일 경우 문제없이 합쳐진다.
    // 2. 타입이 다를 경우 사용할 수 없다.
    // 3. ?옵션과 필수가 합쳐질 경우 필수 타입으로 변경된다.


    //에제2
    type Test02Type = { color?: string, size: number, readonly position: number[]}

    //예제3
    type Test03Type = { name : string, phone : number, email : string }
    const test03 :  Test03Type = { name : 'kim', phone : 123, email : 'abc@naver.com' }

    //예제4
    type Test04Type =  {name : string, phone: number, email?:string|number}
    type Adult = {adult: boolean}
    type NewType = Test04Type & Adult;
    let 회원가입정보 :NewType = {
        name : 'kim',
        adult : false,
        phone : 1234
    }

    
    return null;

}

export default Test06;