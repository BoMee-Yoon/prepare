/*
객체를 트리구조로 구성하여 전체 계층구조를 구성할 수 있다
개별 객체를 동일한 방법으로 구성하고 처리할 수 있는 구조 설계 패턴
*/

class Component {
  constructor(name) {
    this._name = name;
  }
  getNodeName() {
    return this._name;
  }
  getType() { }
  addChild(component) { }
  removeChildByName(componentName) { }
  removeChildByIndex(index) { }
  getChildByName(componentName) { }
  getChildByIndex(index) { }
  noOfChildren() { }
  
  static logTreeStructure(root) {
    let treeStructure = '';
  }
}