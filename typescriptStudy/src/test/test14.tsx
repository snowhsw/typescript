//narrowing 하는 추가 방법

const Test14 = () =>{

    const testFn = (a: string | undefined) =>{
        //a 가 undefined 면 if 문 실행되지 않음
        // &&는 코드가 참 일때만 실행
        if(a && typeof(a)==="string"){

        }
    }

    type Fish = {swim: string};
    type Bird = {fly: string};

    const testFn2 = (animal: Fish|Bird) =>{
        //서로 가진 속성이 다르면 in사용하면 됨
        if("swim" in animal){
            animal.swim
        }

    }

    // 오브젝트 instanceof 부모class
    let 날짜 = new Date();
    if(날짜 instanceof Date){

    }

    type Car = {
        wheel: "4개",
        color: string
    }
    type Bike = {
        wheel: "2개",
        color: string
    }

    //속성이 다른것이없고 부모가 없을 때는 강제로 literal type을 강제로 만들어두면 된다.
    const testFn3 = (x: Car|Bike) =>{
        if(x.wheel === "4개"){
            console.log("x는 Car타입 입니다.");
        }
    }
    return null;
}

export default Test14;