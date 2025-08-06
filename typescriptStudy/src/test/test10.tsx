//constructor 생성자

const Test10 = () =>{
    

    function 기계(a){
        this.name = a
        this.age = 15
        this.sayHi = function(){
            console.log("안녕하세요." + this.name)
        }
    }
    //constructir에서 생성된 object는 instance라고 한다.
    const 학생1 = new 기계("하하하하")


    //prototype
    //프로토타입은 자식 오브잭트에 복사되진않음
    기계.prototype.gender = "남자";

    /* 
        프로토타입을 자식에서도 사용가능한 이유는
        학생1.gender을 했을때 학생1에 gender이라는 속성이
        있는지 확인한 뒤에 없으면 부모 요소에는 있는지
        부모가 없을 때까지 계속 반복한다. 
    */
    console.log(학생1.gender)
    
    return null;
}

export default Test10;