//Literal Types로 만드는 const 변수 유사품

const Test07 = () =>{

    //좀 더 엄격한 타입 지정
    let 이름 : "kim" ;

    //유니온 타입도 가능
    let myInfo : "남자"|"27살";
    myInfo = "남자"

    //파라미터와 리턴값에도 적용 가능
    const testFn1 = ( a: "hello") : 1|0 =>{
        return 0
    }
    const testFn2 = (params: "가위"|"바위"|"보") : ("가위"|"바위"|"보")[] =>{

        return ["가위","바위"]
    }
    testFn2("가위")

    //as const는 object의 value의 값을 그대로 타입으로 지정해준다.
    //as const는 object의 속성들에 모두 readonly로 바꿔준다.
    var 자료 ={
        name: "kim"
    } as const;

    //내용이 kim이 아니라 타입이 kim이어야 함
    const testFn3 = (a: "kim") =>{

    }
    
    //자료.name은 값이 Kim이지 타입은 string이다
    testFn3(자료.name)
    return null;
}

export default Test07;