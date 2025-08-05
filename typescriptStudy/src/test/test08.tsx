//함수 타입 alias 해서 쓰는 법


const Test08 = () => {

    //매개변수는 String 리턴값은 number이다.
    type FnType = (a: string) => number;

    const testFn1: FnType = (a) => {
        return 1
    }

    const testFn2: FnType = function (a) {
        return 2;
    }

    testFn1("바보")
    testFn2("헤헤")

    //바로 함수 선언하면 함수 선언식
    // 함수를 변수에 담으면 함수 표현식

    //object안에 함수 만들 수 있음

    //예제1
    let 회원정보 = {
        name: 'kim',
        age: 30,
        plusOne : (x:number):number => x+1,
        changeName: ():void => {}
    }
    회원정보.plusOne(1);
    회원정보.changeName();

    //예제2
    type CutZeroType = (x :string) => string
    type RemoveDashType = (x :string) => number

    let cutZero :CutZeroType = (x) => {
        let result = x.replace(/^0+/, "");
        return result
    }
    let remove:RemoveDashType = (x :string):number =>{
        let result = x.replace(/-/g, "");
        return parseFloat(result)
    }
    
    cutZero("0asd")

    //예제3

    type Test03Type = (phone:string ,fn1: CutZeroType, fn2: RemoveDashType) => void;
    const test03:Test03Type = (phone, fn1, fn2) =>{

        const filter1 = fn1(phone);
        const filter2 = fn2(filter1);
    
        console.log(filter2)

    }

    test03('010-1111-2222', cutZero, remove)
    return null;
}

export default Test08;