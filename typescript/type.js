var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 타입스크립트는 자바스크립트의 변수와 함수에 타입을 설정
console.log("안녕");
// 변수를 지정할때 타입을 지정하여 원하는 자료형만 넣을수 있다
var word = "안녕";
word = "반갑습니다";
// word = 1; // 다른 자료형은 들어가지 않는다.
var num = 1;
var num1 = num; // 동일한 자료형은 할당가능
var isTrue = true;
isTrue = !isTrue; // 동일한 자료형이므로 가능
var stringArray = ["1", "2", "3"];
// 배열의요소가 동일한 자료형
// let array: string[] = ["1","2", 3]; 
console.log(stringArray.toString());
console.log("값을 추가 하였습니다");
// 함수는 매개변수와 함수의 반환값에 자료형을 정의
// return 되는 값이 없을 때는 void로 정의한다
// 매개변수의 자료형과, printWord의 자료형을 정의
function printWord(word) {
    console.log(word);
}
printWord(word);
// 인터페이스와 객체
// 자바스크립트에서 리터럴 객체 생성
var person = {
    name: "홍길동",
    age: 30,
    address: "부산"
};
// 인터페이스로 만든 속성으로 작성한 객체
var myPerson = {
    name: "green",
    age: 40,
    //Person에서 작성하지 않은 내용을 객체에 쓸수 없다
    // adress : "", 
};
console.log(myPerson.name);
// 함수안의 매개변수의 객체를 인터페이스로 타입 정함
// 매개변수의 객체의 인터페이스 타입은 함수안에서 쓰는 속성O
function printName(person) {
    console.log(person.name);
    // if문을 사용해서 age값이 있다면 console.log로 출력
    if (person.age !== undefined) {
        console.log(person.age);
    }
}
printName(person);
// printName()을 사용해서 myPerson 출력
printName(myPerson);
// 화살표함수, 익명함수를 만들어서 변수에 할당해서 쓰는 내용
// 화살표함수나 익명함수의 경우 함수의 이름이 없기때문에,
// 매개변수뒤에 적어줌
var loginUser = function (id, pw) {
    console.log("로그인했습니다");
    return true;
};
// 동일한 내용 인터페이스로 작성
var loginUserInter;
loginUserInter = function (id, pw) {
    // 매개변수의 자료형을 기록했기에 적지않아도 괜찮다
    console.log(id, "로그인했습니다");
    // 미리 반환값을 기록했기에 반환값을 잘못적지않았는지 확인가능
    return true;
};
var jhon = {
    // Developer의 내용
    skill: "typescript",
    // Person의 내용
    name: "jhon"
};
var green = {};
green.name = "green";
green.skill = "javascript";
// green.text = "Developer에 없는 속성은 접근 불가"
console.log(jhon, green);
// let blue:Workers 선언 및 값 할당하기
// 다른 Worker의 인터페이스가 있으므로, Workers로 바꿔서 작성
var blue = {
    name: "blue",
    job: "frontend"
};
var numArray = [1, 2, 3, 4];
// 객체의 배열을 만들때, 인터페이스를 사용해서 만들수 있다
var objectArray = [
    { name: "홍길동" }, { name: "성춘향" }
];
console.log(objectArray.map(function (o) { return o.name; }));
// 타입스크립트에서 클래스
// 자바스크립트에서 클래스
// : 미리 속성과 메소드를 지정하여 객체를 만들수 있는 형태
var MyClass = /** @class */ (function () {
    //constructor를 통해서 객체를 생성할때 속성의 값 지정
    function MyClass(name) {
        var _this = this;
        // 속성의 값
        this.name = "";
        this.money = 0;
        // 함수형태로 메소드를 만들어서 사용
        this.setMoney = function (money) {
            _this.money = money;
        };
        this.name = name;
    }
    return MyClass;
}());
// 타입스크립트로 작성하는 클래스
// Accessor : 접근할수 없는 속성(private)에 get과 set을 이용하여 접근
// get과 set은 .속성이름으로 접근할수 있고 이름은 겹치지 않게 작성
var MyTypeClass = /** @class */ (function () {
    function MyTypeClass() {
        this.money = 0;
    }
    Object.defineProperty(MyTypeClass.prototype, "getname", {
        // set과 get을 통해 접근
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTypeClass.prototype, "setname", {
        set: function (newValue) {
            this.name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return MyTypeClass;
}());
var mytypeclass = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname = "green";
console.log(mytypeclass);
// 추상 클래스 
// 클래스 중에서도 메소드 값이 비어있는 클래스
// abstract : 값이 비어있는 메소드 앞에 붙여준다.
var Developer2 = /** @class */ (function () {
    function Developer2() {
    }
    // 추상메소드가 아닌 일반메소드는 {}안에 실행값을 적어준다
    Developer2.prototype.drink = function () {
        console.log('drink');
    };
    return Developer2;
}());
// 인터페이스나 추상클래스를 상속받을때,
// 채워야할 메소드를 Quick Fix를 통해 채워서 쓸 수 있다
var FrontEndDeveloper = /** @class */ (function (_super) {
    __extends(FrontEndDeveloper, _super);
    function FrontEndDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontEndDeveloper.prototype.coding = function () {
        console.log("develop web");
    };
    FrontEndDeveloper.prototype.design = function () {
        console.log("design web");
    };
    return FrontEndDeveloper;
}(Developer2));
var frontend = new FrontEndDeveloper();
frontend.coding();
frontend.design();
frontend.drink();
// 제네릭 
// 타입(자료형)을 함수의 파라미터처럼 사용하는 것
function getText(text) {
    return text;
}
console.log(getText("Hi"));
console.log(getText(10));
// boolean 값을 넣어서 console.log로 확인