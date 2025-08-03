//함수에 타입지정하는법 Void
const Test04 = () =>{

    const testFn1 = ():void =>{
        //void는 리턴값이 없어야함
    }

    const testFn2 = (x:number) =>{
        //매개변수에도 타입지정 가능
        //하지만 타입이 지정된 매개변수는 반드시 들어와야함
    }

    const testFn3 = (x?:number) =>{
        //?를 사용하면 매개변수는 옵션 들어와도 안들어와도 괜찮음
        //? 이거는 사실 ??? | undefined 와 같은 문법(유니온) 이라고 생각하자.
    }

    //예제1
    const test01 = (name?: string): void =>{
        console.log(name?`${name}님 안녕하세요.`:"이름이 없습니다.")
    }
    test01("케로로")

    //예제2
    const test02 = (text: string|number) =>{
        console.log(String(text).length)
    }

    //예제3
    const test03 = (pay:number, house:boolean, appeal:string) =>{

        const payScore: number = pay
        const houseScroe:number = house?500:0;
        const appealScore:number = appeal==="상"?100:0;
        
        const total:number = payScore + houseScroe + appealScore
        return total >= 600? console.log("결혼 쌉가능"):console.log("결혼 불가능")
    }
    test02("1asdasdsa11")

    test03(700, false, "중")
    test03(100, false, "중")
    return(
        <>
            
        </>
    )
}

export default Test04