//타입 미리 지정하기 애매할 때

const Test03 = () => {

    // union타입 
    let 이름: string | number = 'kim';
    let 나이: (string | number) = 100;

    let 어레이: (number | string)[] = [1, '2', 3]
    let 오브젝트: { data: (number | string) } = { data: '123' }

    // any 타입 모든 자료형 허용해줌 
    // 타입실드 해제문법
    let name1: any;
    name1 = 123;
    name1 = [];

    //unknown 타입
    // any보다 안전한 이유는 타입실드 OK
    let name2: unknown;
    name2 = 123;
    name2 = {};
    //쉴드로 걸러줌
    // let name3 : string = name2;

    /*  
        이 코드가 에러나는 이유는 타입 스크립트는 타입이 확실해야 연산이 가능하지만
        유니온타입이라 string인지 number인지 확실하지가 않아서 에러가 나는 것이다.
    */

    try {
        let 나이: string | number;
        나이 + 1;   
    } catch (error) {
        console.log("이거 에러임")
    }


    //내가 조작하는 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 필요

    //예제1
    let user: string = 'kim';
    let age: undefined | number = undefined;
    let married: boolean = false;
    let 철수: (string | number | undefined | boolean)[] = [user, age, married];


    //예제2
    let 학교: {
        score: (number | boolean)[],
        teacher: string,
        friend: string | string[]
    }

        = {
        score: [100, 97, 84],
        teacher: 'Phil',
        friend: 'John'
    }
    학교.score[4] = false;
    학교.friend = ['Lee', 학교.teacher]
    return null
}

export default Test03