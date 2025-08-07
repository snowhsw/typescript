//객체 타입 만드는법에는 interface도 있다.


const Test12 = () =>{

    //타입으로 객체 타입 만들기
    type SquareType1 = { color: string, width: number}

    //interface로 타입 만들기
    interface SquareType2 { 
        color: string; 
        width: number
    }

    let 네모:SquareType1 = { color: "red", width: 100}


    //예제
    //interface의 장점은 extends로 복사가능
    interface StudentType {name: string;}
    interface TeacherType extends StudentType {age:number;}


    let 학생:StudentType = {name: "kim"}
    let 선생:TeacherType = {name: "kim", age:20}

    //& 기호를 이용해서 비슷한 효과 만들기도 가능
    //차이점은 속성을 받는것이 아니라 두 속성 다 만족하라는 의미이다.
    // 또한 interface는 중복선언이 가능하지만 type은 중복선언이 불가능하다.
    type Animal = {name: string};
    type Cat = { age: number} & Animal;


    // extends쓸때 중복 속성 있으면 에러가 난다.
    // &기호를 이용했을 때 중복이 발생하면 미리 에러가 나지 않기 때문에 주의
    interface Test01 { name: string};
    interface Test01 { score: number};


    interface ProductType { brand : string, serialNumber : number, model : string[] };
    let 상품: ProductType = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] };

    interface CartType {product: string; price: number};
    let 장바구니:CartType[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] ;

    interface CardType extends CartType {card: boolean};
    let 상품1:CardType = {product: "청소기", price: 7000, card: false};


    interface CalcType {
        plus: (num1:number, num2:number) => number,
        minus: (num1:number, num2:number) => number,
    }

    let testObject:CalcType = {
        plus : (num1, num2) => num1 + num2,
        minus : (num1, num2) => num1 - num2,
    }

    return null;
}

export default Test12;