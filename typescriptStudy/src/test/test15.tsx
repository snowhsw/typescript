//함수에 사용할수 있는 never타입
const Test15 = () =>{

    //조건1 return값이 업어야힘
    //조건2 endpoint가 없어야함(함수가 끝나지 않아야함)

    const testFn = ():never =>{
        // 에러 낸다
        throw new Error()

        //while문 사용
        while(true){
        }
    }
    
    //never타입은 코드 이상하게 짜면 등장함
    //예시1 
    const testFn2 = (parameter: string) =>{
        if(typeof(parameter) == "string"){

        }
        else{
            //이런 경우는 있을 수 없다.
            console.log(parameter)
        }
    }


    //어떤 함수표현식은 return 타입이 자동으로 never
    //예시2
    const testFn3 = function(){
        throw new Error()
    }


    return null;
}

export default Test15;