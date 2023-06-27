// 타입스크립트는 자바스크립트의 변수와 함수에 타입을 설정
console.log("안녕");

// 변수를 지정할때 타입을 지정하여 원하는 자료형만 넣을수 있다
let word: string = "안녕";
word = "반갑습니다";

// word = 1; // 다른 자료형은 들어가지 않는다.

let num: number = 1;
let num1: number = num; // 동일한 자료형은 할당가능

let isTrue: boolean = true;
isTrue = !isTrue; // 동일한 자료형이므로 가능

let stringArray: string[] = ["1","2","3"];
// 배열의요소가 동일한 자료형
// let array: string[] = ["1","2", 3]; 

console.log(stringArray.toString());

console.log("값을 추가 하였습니다")

// 함수는 매개변수와 함수의 반환값에 자료형을 정의
// return 되는 값이 없을 때는 void로 정의한다
// 매개변수의 자료형과, printWord의 자료형을 정의
function printWord(word:string):void {
    console.log(word)
}
printWord(word);

// 인터페이스와 객체
// 자바스크립트에서 리터럴 객체 생성
let person = {
    name : "홍길동",
    age : 30,
    address :"부산"
};

// 객체의 인터페이스 - 이름 작성시 첫글자 대문자
interface Person {
    name : string,
    age? : number
}

// 인터페이스로 만든 속성으로 작성한 객체
let myPerson:Person = {
    name : "green",
    age : 40,
    //Person에서 작성하지 않은 내용을 객체에 쓸수 없다
    // adress : "", 
}
console.log(myPerson.name)

// 함수안의 매개변수의 객체를 인터페이스로 타입 정함
// 매개변수의 객체의 인터페이스 타입은 함수안에서 쓰는 속성O
function printName(person:Person):void {
    console.log(person.name);
    // if문을 사용해서 age값이 있다면 console.log로 출력
    if(person.age !== undefined) {
        console.log(person.age);
    }
}
printName(person);
// printName()을 사용해서 myPerson 출력
printName(myPerson);


// 함수를 작성할때 인터페이스로 먼저 알려주고 작성
interface login {
    (username: string, password: string): boolean;
}
// 화살표함수, 익명함수를 만들어서 변수에 할당해서 쓰는 내용
// 화살표함수나 익명함수의 경우 함수의 이름이 없기때문에,
// 매개변수뒤에 적어줌
let loginUser = (id: string, pw: string):boolean => {
    console.log("로그인했습니다");
    return true;
}

// 동일한 내용 인터페이스로 작성
let loginUserInter: login;
loginUserInter = function(id, pw) {
    // 매개변수의 자료형을 기록했기에 적지않아도 괜찮다
    console.log(id, "로그인했습니다");
    // 미리 반환값을 기록했기에 반환값을 잘못적지않았는지 확인가능
    return true;
}
// 인터페이스로 함수의 타입을 지정해도, 
// 필요에 따라서 매개변수의 내용이 달라진다면 수정할수 있다
// ex) 자료형, 매개변수의 개수

// 인터페이스의 확장
// 위에 작성한 Person을 확장하여 사용
// extends를 통해 확장, Person에 있는 속성을 적어주지않아도
// Developer에 들어가 있다
interface Postion extends Developer{
    // 상속(확장)한 인터페이스를 확장할수 있다.
    // 한번에 여러개 확장할수 있다 
    // interface Developer extends Person, Position
    // 확장할때는 이전의 인터페이스에 추가하면 
    // 작성한 객체에 오류가 생길수 있으니 가능하면
    // 새로 인터페이스를 만들어서 확장한다
    position: string;
}

interface Developer extends Person{
    skill: string;
}

let jhon:Developer = {
    // Developer의 내용
    skill: "typescript",
    // Person의 내용
    name : "jhon"
} 
let green = {} as Developer;
green.name = "green";
green.skill = "javascript";
// green.text = "Developer에 없는 속성은 접근 불가"

console.log(jhon, green);

// 인터페이스 확장을 위한 연습
// Person을 사용해서, Worker 인터페이스 작성
// Worker 인터페이스는 job 속성을 string 자료형으로 가진다
interface Workers extends Person {
    job:string
}

// let blue:Workers 선언 및 값 할당하기
// 다른 Worker의 인터페이스가 있으므로, Workers로 바꿔서 작성
let blue: Workers = {
    name: "blue",
    job : "frontend"
}

let numArray: number[] = [1,2,3,4];
// 객체의 배열을 만들때, 인터페이스를 사용해서 만들수 있다
let objectArray: Person[] = [
    {name: "홍길동"},{name:"성춘향"}
]
console.log(objectArray.map((o)=>o.name))

// 타입스크립트에서 클래스
// 자바스크립트에서 클래스
// : 미리 속성과 메소드를 지정하여 객체를 만들수 있는 형태
class MyClass {
    // 속성의 값
    name = "";
    money = 0;
    //constructor를 통해서 객체를 생성할때 속성의 값 지정
    constructor (name:any) {
        this.name = name;
    }
    // 함수형태로 메소드를 만들어서 사용
    setMoney = (money:any) =>{
        this.money = money;
    }
}

// 타입스크립트로 작성하는 클래스
// Accessor : 접근할수 없는 속성(private)에 get과 set을 이용하여 접근
// get과 set은 .속성이름으로 접근할수 있고 이름은 겹치지 않게 작성
class MyTypeClass {
    // 속성
    private name:string
    money:number = 0

    // set과 get을 통해 접근
    get getname():string {
        return this.name;
    }
    set setname(newValue:string) {
        this.name = newValue;
    }
}
const mytypeclass = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname = "green"
console.log(mytypeclass)

// 추상 클래스 
// 클래스 중에서도 메소드 값이 비어있는 클래스
// abstract : 값이 비어있는 메소드 앞에 붙여준다.
abstract class Developer2 {
    // {}가 없는 메소드 - 실행할 내용을 적지않음
    // 상속받을 클래스에서 내용을 적도록 안내
    abstract coding():void;
    
    // 추상메소드가 아닌 일반메소드는 {}안에 실행값을 적어준다
    drink(): void {
        console.log('drink');
    }
}

// 인터페이스나 추상클래스를 상속받을때,
// 채워야할 메소드를 Quick Fix를 통해 채워서 쓸 수 있다
class FrontEndDeveloper extends Developer2 {
    coding(): void {
        console.log("develop web")
    }
    design(): void {
        console.log("design web")
    }
}
const frontend = new FrontEndDeveloper();
frontend.coding();
frontend.design();
frontend.drink();

// 제네릭 
// 타입(자료형)을 함수의 파라미터처럼 사용하는 것
function getText<T>(text:T): T {
    return text
}
console.log(getText<string>("Hi"));
console.log(getText<number>(10));
// boolean 값을 넣어서 console.log로 확인