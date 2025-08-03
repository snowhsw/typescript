//타입스크립트 기본 정리

const Test02 = () =>{

        // 변수에 타입 할당 가능
    let name: string = "안녕";

    // 배열과 안에 오는 타입까지 할당 가능 
    let array: string[] = ["asd", "asd"];

    //객체도 할당가능
    let object: { name: string } = { name: "헬로헬로" }

    //해당 속성이 들어올 수도 안들어올 수도 있다.
    let objectOption: { name?: string } = {}

    // 여러 타입 지정 가능 union 타입
    let number: string | number = "";

    //타입 쓰는게 길면 변수에 넣어서 사용 가능
    // 타입 변수는 보통 대문자로 한다.
    type Types = string | string[];
    let stringArray: Types = [];


    // 함수에도 타입 지정 가능
    const ts = (x: number): number => {
        return (x + 2);
    }

    //배열에 쓸수 있는 tuple 타입
    type Member = [number, boolean]
    let john: Member = [123, true]


    //들어가야 할 속성이 많으면
    type ObjectType = {
        [key: string]: string
    }
    let stringObject: ObjectType = { hello: "" }

    //클래스도 타입 지정 가능
    class User {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    return null;
}
export default Test02