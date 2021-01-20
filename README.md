# book-refactoring2-code

存储 《重构: 改善既有代码的设计第二版》的一些示例代码  


## 单元测试

使用 [mochajs](https://mochajs.org/) 作为我们单元测试套件  

运行所有单元测试:  
```
npm run test
```  

运行某个单元测试:   
```
npx mocha ./src/chapter1/*.test.js
```

## 变化

1. 提炼函数 `amountFor`  
   > 提炼成内联函数的意义不需要再把外部作用域中的数据传给新提炼的函数, 少了一件操心的事情, 尽管当前实例意义不大
2. 变量改名: `thisAmount` to `result`  
   > 永远将函数的返回值命名为 “result”  
3. 变量改名: `perf` to `aPerformance`  
   > 动态类型语言中变量命名带上类型很有意义, 这里使用不定冠词 `a` 修饰它强调一个场表演  
4. 提炼函数: `playFor`  
   > play 变量可以由 performance 变量计算得到, 以查询取代临时变量  
5. 内联变量: 使用 `playFor(perf)` 替换 `statement` 函数中的 `play` 变量  
