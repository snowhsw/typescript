//public, private

const Test16 = () =>{

    class User{
        //public키워드를 붙이면 모든 자식들이 이용가능
        public name: string;

        //private 붙으면 class안에서만 수정 이용가능
        private age:number = 20;

        constructor(a:string){

            this.name = a + this.age
            
        }

        //외부에서 변경하고 싶을 때는 미리 함수를 만들어 둔 후에 이용한다.
        이름변경함수(){
            this.age = 50;
        }
        
    }

    class Person {
        //생성자에 public 사용하면 this. 생략가능
        constructor(public name:string){

        }
    }

    const 유저1 = new User("park")
    유저1.이름변경함수()
    console.log(유저1)
    
    const 유저2 = new Person("하하하하하하하")
    console.log(유저2)
    return null;
}

export default Test16;