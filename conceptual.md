### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  
  A popular front end framework. When you want to build a modular application or want to make reuseable logic or view components

- What is Babel?  
  A compiler to convert modern js into a version compatible with all browsers

- What is JSX?  
  Javascript XML. It's a way to embed HTML from inside a js file

- How is a Component created in React?  
  By writing a function in a seperate file and exporting it

- What are some difference between state and props?  
  State manages data within a component while props pass that data from parent to child component

- What does "downward data flow" refer to in React?  
  The act of passing data parent to child amongst components

- What is a controlled component?  
  A component that has its state and behavior controlled by a parent component

- What is an uncontrolled component?  
  A component that has its state and behavior controlled by the dom

- What is the purpose of the `key` prop when rendering a list of components?  
  It's used to identify all the child elements in that list

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?  
  If changes are made to the array React will still use the same index for data retrieval

- Describe useEffect.  What use cases is it used for in React components?  
  A built in hook for side effects. Fetching data, starting a timer, and manually changing the dom are among its use cases

- What does useRef do?  Does a change to a ref value cause a rerender of a component?  
  It returns a mutable reference object of the initial passed argument. The imformation passed perisits and doesn't cause a rerender

- When would you use a ref? When wouldn't you use one?  
  Cases like accessing a dom element or setting up a timer. Making changes to the dom

- What is a custom hook in React? When would you want to write one?  
  A reuseable function that the user creates. It's best used for logic that is used in multiple components to slim the code
