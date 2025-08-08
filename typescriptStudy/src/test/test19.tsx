//Generic함수 만들기

const Test19 = () =>{

    //Generic 함수 만들기
    const testFn =<MyType,>(x:MyType[]):MyType =>{
        return x[0]
    }

    let a = testFn<number>([4,2])

    console.log(a + 1)


    interface LengthCheck {
        length: number;
    }
    //Generic에 오는 타입 제한하기
    const testFn2 = <MyType2 extends LengthCheck>(x:<MyType2>) =>{
        return x.length;
    }

    testFn2<string>("100")
    return null;
}

export default Test19;