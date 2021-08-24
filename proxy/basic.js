const counter = {order: '☕️'};
const customer = counter.order;
console.log(customer); // ☕️;

const target = { apple: '🍎' };

/*
- aop 프록시 기반이다
- aop 관점지향
가로채는 작업 자체를 관점으로 본다
조인 포인트 : 이걸 어디다 실행 시킬까
주문끝난 경우 order()
상세 진입 enter()

이게 실행되면
가로채는 행위 자체가 중복되는데 이걸 AOP 로 
after 끝난 후에 실행한다

order 하고나서 AOP 적용시켜야 하는데
order 를 사용해서 주문을 하면,
오더 함수를 전달하는게 아니라 오더를 한번더 감싸서 '보내준다'까지 더해서 감싼다
이게 오더 프록시라는 새로운 함수이다

class Order 를 프록시로 감싸고 다시 재정의를 한다
ProxyOrder 안에 Order 를 가지고 있다
Order.order() 를 하게 되면 진짜 Order 가 호출된다 

*/

class ProxyOrder implements OrderInter {
  constructor(OrderInter orderInter) {
    this.order = orderInter;
  }

  @Override
  order() {
    result = this.order.order();
    send(result);
  };
}

interface OrderInter {
  order();
}

class Order implemnts OrderInter{
  
  @Override
  order() {
    console.log('주문한다');
  }
}

/*
어떤 클래스를 new 를 해야할지 모르는 상황일 때
어떤 클래스든 외부에서 클래스를 넣는 순간 그 클래스와 관련된 인스턴스를 생성할 수 있다
어떻게? Reflect.construct() 를 통해서
주문, 상세 이런거에 대해서 계속 new 를 할 수 없다
만약에 이거에 대한 프록시를 만들고 싶으면 Reflect.class.construct()
주문을 넣던 상세를 넣던 Reflect 해서 넣을 수 있다
new 하는 순간 그 클래스 밖에 못 만든다


*/

const prxy = new Proxy(); // 객체

const reflect = Reflect; // 유틸 클래스

