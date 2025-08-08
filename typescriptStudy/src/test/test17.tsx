const Test17 = () =>{

    class User {
        //private가 붙은것은 상속해서 사용이 불가능
        // private x=10;

        //protexted는 상속해서 사용이 가능
        protected y= 10;

        //static키워드 붙이면 부모 클래스에 직접 부여됨
        static z= 20

        //private, protexted public와 static와 사용 가능;
        static skill = "js";
        intro = User.skill + "전문가 입니다.";
    }


    class NewUser extends User {
        doThis(){
            this.y;
        }
    }

    let 자식 = new User();
    console.log(자식)

    let 철수 = new User();
    console.log(철수)

    class test1{
        private static x = 10;
        public static y = 20;
        protected z= 30;
    }





    return null;


}

export default Test17;