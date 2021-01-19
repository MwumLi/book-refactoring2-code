# 戏剧演出团

## 背景

来自 <https://book-refactoring2.ifmicro.com/docs/ch1.html>  

有一个戏剧演出团，演员们经常要去各种场合表演戏剧。通常客户（customer）会指定几出剧目，而剧团则根据观众（audience）人数及剧目类型来向客户收费。该团目前出演两种戏剧：悲剧（tragedy）和喜剧（comedy）。给客户发出账单时，剧团还会根据到场观众的数量给出“观众量积分”（volume credit）优惠，下次客户再请剧团表演时可以使用积分获得折扣——你可以把它看作一种提升客户忠诚度的方式。  

## 文件

```
├── README.md
├── invoices.json        # 用户账单
├── plays.json           # 剧团的剧目数据
├── statement.js         # 根据用户账单以及剧目来返回账单详情
└── statement.test.js    # 测试用例
```