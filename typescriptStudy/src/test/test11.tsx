const Test11 = () =>{

    class person{
        //클래스의 필드값은 생성자와 같은 역할
        data:number= 0;

        name: string;

        constructor(a: string){
            this.name = a
        }

        함수(b:string){
            console.log("안녕")
        }
    }

    let 사람1 = new person("바보");
    사람1.함수
    return null;
}

export default Test11;