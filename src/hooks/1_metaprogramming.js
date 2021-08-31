/*
1.3. 반사형 프로그래밍(Reflective programming)
우리가 알아볼 Proxy와 Reflect는 반영을 구현한 것이고, 여기에는 또다시 세 가지의 종류가 있다.

Type introspection 런타임에서 프로그램이 자신의 구조에 접근하여 타입이나 속성을 알아내는 능력을 뜻한다. 예시로 Object.keys()가 있다.
Self-modification 구조를 스스로 변경할 수 있다는 의미로, 예시로 어떤 속성에 접근하기 위해 [] 표기법을 사용하고, delete 연산자로 제거하는 것 등이 있다.
Intercession 말 그대로 어떤 것을 대신하여 개입하는 행위를 뜻하며, 언어가 수행되는 일부 의미를 재정의하는 것을 말한다. 이를 지원하기 위해 ES2015에서 Proxy가 만들어졌다. (2ality의 운영자인 Axel Rauschmayer의 표현(링크 참조)인데, 사실 Object.defineProperty() 같은 메서드들이 이미 구현이 되어 있어 기존에 없었다고 보기에는 좀 애매하지만, Intercession의 개념이 대상에 변이를 일으키지 않는 것에 초점이 맞춰진다면 맞는 말일 수도 있겠다.)
*/

/**
 * 
 * 7.6 Dynamic Introspection and weaving
 * 
 * JavaScript makes it easy to manipulate and change the shape and structure of objects at runtime. But special APIs allow you to hook into the event of calling a method or accessing a property. To understand the motivation here, it helps to think about the popular, widely used Proxy design pattern (figure 7.2).
 * proxy is a wrapper to another object that is being called by a client to access the real internal object
 * 프록시는 클라이언트에게 실제 내부 객체에 접근하기 위해서 불리어지는 객체를 위한 래퍼이다. 
 */