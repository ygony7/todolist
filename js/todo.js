// todo 입력 공간 가져오기
const todoInput = document.querySelector('#todoForm #todoInput');

//todo button : click 이벤트로 실행
// button에 아이디를 주지않았기 때문에, 노드로 접근하거나
// querySelector를 이용하여 선택자를 이용하여 접근해서 
const todoButton = todoInput.nextElementSibling;

// todoUl 객체 가져오기
const todoUl = document.querySelector("#todoUl");

// 버튼에 이벤트리스너 : button 이므로 click이벤트
todoButton.addEventListener("click", addTodo);

function addTodo() {
    console.log("확인");
    // todoInput -value 값을 들고옴
    //const addlist = todoInput.value;

    // 새로 요소 생성
    // li, input type="checkbox", textNode, button
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const textNode = document.createTextNode(todoInput.value);
    const button = document.createElement("button");


    // li요소 - input, textNode, button
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    // toddUl - li 추가
    todoUl.append(li);

    // todoInput.value값을 빈 값으로 만들기
    todoInput.value = "";

    // button에 X 문자열 추가
    button.innerHTML = "X";

    // 체크박스를 눌렀을 때 이벤트리스너 실행 : click
    checkbox.addEventListener("click", todoCheck);

    // X버튼을 눌렀을 대 삭제 이벤트리스너 실행 : click
    button.addEventListener("click", todoDelete);

}

// 체크박스 이벤트리스너에 들어가는 함수
function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked) {
        li.style.color = "lightgray";
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
    } else {
        li.style.color = "black";
        li.style.textDecoration = "";
    }
};

// 삭제버튼 이벤트리스너에 들어가는 함수
function todoDelete(e) {
    // li요소 삭제
    const li = e.target.parentNode;
    li.remove();
};