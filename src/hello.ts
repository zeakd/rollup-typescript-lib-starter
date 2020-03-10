interface Hello {
  (name: string): void;
}

const hello: Hello = (name) => {
  console.log('hello ' + name)
}

export default hello;