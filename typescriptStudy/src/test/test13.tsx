//rest parameter 타입 지정가능

const Test13 = () =>{

    //rest parameter는 파라미터가 몇개인지 모를 떄 사용
    // 여러개가 들어올 때를 대비해서 배열로 감싸서 들어옴
    const testFn = (...a:(number|string|{})[]) =>{
        // console.log(a)
    }
    testFn(1,2,3,4,5,6,7,8)

    // ...용도 1  spread operator
    // 배열이나 객체 옆에 붙으면 벗겨달라는 의미임

    // ...용도 2  rest parameter
    // 파라미터가 몇개인지 모를 때 사용
    

    // destructuring 구조분해할당 배열과 객체에 사용 가능 
    let {student, age} = {student : true, age : 20};
    let 오브젝트  ={ student: true, age : 20}

    
    const testFn2 = (오브젝트:{student: boolean, age : number}) =>{
        console.log(student, age)
    }

    testFn2(오브젝트)

    return null;
}

export default Test13;
