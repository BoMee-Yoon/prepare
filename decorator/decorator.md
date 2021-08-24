# 데코레이터란?

- 데코레이터는 "데코레이터 함수"(또는 메서드)의 약자이다
- 새 함수를 반환하여 전달 된 함수 또는 메서드의 동작을 수정하는 함수이다


## 자바스크립트 데코레이터와 속성 설명자

```js
const oatmeal = {
  viscosity: 20,
  flavor: 'Brown Sugar Cinnamon',
}

console.log(Object.getOwnPropertyDescriptor(oatmeal, 'viscosity'));
// { value: 20, writable: true, enumerable: true, configurable: true }
```

- 구성가능(configurable)은 속성 유형을 변경하거나, 객체에서 속성을 삭제할 수 있는지를 결정
- 열거가능(enumerable)은 `Object.keys(oatmeal)`를 호출하거나 `for` 루프에서 사용할 때처럼 객체의 속성을 열거할 때 속성을 표시할지 여부를 제어
- 쓰기가능(writable)은 할당 연산자 `=`를 통해 속성값을 변경할 수 있는지를 제어
- 값(value)은 접근할 때 표시되는 속성의 정적 값. 함수를 포함한 모든 자바스크립트의 값이 올 수 있으며, 이 속성은 속성을 자신이 속한 객체의 메소드로 만든다

<br />
- `get`: 정적인 `value` 대신 반환 값을 전달하는 함수
- `set`: 속성에 값을 할당할 때, 등호 오른쪽에 넣는 모든 것을 인자로 전달하는 특수 함수


## 데코레이터 작성하는 법
- `target` 은 현재 인스턴스 객체의 클래스
- `key` 는 데코레이터를 적용할 속성 이름(문자열)
- `descriptor` 는 해당 속성의 설명자 객체

