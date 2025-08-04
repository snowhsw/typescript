//narrowing assertion

const Test05 = () =>{


    const testFn = (x: number|string) =>{

        //타입이 하나로 확정되지 않았을 경우 Type Narrowing 사용해야함
        typeof(x)==="number"?console.log("숫자입니다."):console.log("문자입니다.")

        //assertion문법의 용도
        //Narrowing 할 떄 쓴다.
        //무슨 타입이 들어올지 확실할 떄
        let array : number[] = [];
        array[0] = x as number
    }
    testFn("asd")

    //예제 1
    const test01 = (data : (number|string)[]) =>{
        

        let numberArray :number[] = data.map(arr => Number(arr) )
        console.log(numberArray)
    }

    test01(["1",2,"3"])


    //에제2

    let 철수쌤 = { subject : 'math' }
    let 영희쌤 = { subject : ['science', 'english'] }
    let 민수쌤 = { subject : ['science', 'art', 'korean'] }

    const test02 = (teach : {subject: string} | {subject: string[]}) =>{
        
        if(typeof(teach.subject)==="string"){
            console.log(teach.subject)
        }
        else if(typeof(teach.subject)==="object"){
            console.log(teach.subject[teach.subject.length - 1])
        }
        else{
            console.log("에러")
        }
        
    }


    test02(민수쌤)
    return null
    
}

export default Test05; 