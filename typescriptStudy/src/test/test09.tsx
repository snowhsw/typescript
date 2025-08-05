//ts에서 html조작하는 방법

const Test09 = () =>{

    //요소애도 alias가능 단 확실할 때만 사용
    let 제목 = document.getElementById("#title") as Element;
    // instanceof 왼쪽 요소가 오른쪽 요소의 자식이냐 맞으면 true 아니면 false
    if( 제목 instanceof Element){
        제목.innerHTML="헬로"
    }

    let link = document.getElementsByClassName("link")[0];
    //a링크는 HTMLAnchorElement 속성
    if( link instanceof HTMLAnchorElement){
        link.href="http://naver.com"
    }

    let btn = document.getElementById("btn");
    // ?이것도 narrowing 가능
    // 의미는 왼쪽에 있는 요소에 오른쪽에 있는게 들어있으면 부착 없으면 undefined로 해주세요.
    
    btn?.addEventListener("click",() => console.log(111))
    return (
        <>
            <h4 id="title">
                안녕하세요
            </h4>
            <a href="http://kakap.com" className="link">
                링크
            </a>
            <button id="button">
                버튼
            </button>
        </>
    );
}

export default Test09;