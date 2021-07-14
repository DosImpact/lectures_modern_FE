# 1

- 구구단
- useState 사용, useRef 사용하여 input에 포커스

## useRef 타이핑

- useRef를 이용해서, 랜더링에 걸리지 안도록 객체를 참조한다.
- JSX 오브젝트를 참조할 것이다. ( 제너릭 이용)
- HTMLElement
- ! 으로 null 값이 추론되어도 단언을 할 수 있다.

```ts
  const InputRef = useRef<HTMLInputElement>(null);
  ...

interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }

```

## FB

- class컴포넌트에서, 맴버함수와 화살표 맴버 함수의 차이

```js

  mySubmit3(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state);
  }// 안먹힘
  mySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };// 먹힘

<form onSubmit={this.onSubmit}>
```