# 01.Mongodb操作符
##### **比较运算符**
```javascript
$eq 等于=

#gt 大于>

$gte 大于等于 >=

$in 匹配数组中指定的任何值

$lt 小于<

$lte 小于等于 <=

$ne 不等于

$nin 不在数组中的值
```
##### **逻辑运算符**
```javascript
$and 逻辑与

#not 反转查询表达式。返回与查询表达式不匹配的文档

$nor 使用逻辑NOR连接查询子句。返回无法匹配两个子句的所有文档

$or 使用逻辑OR连接查询子句。返回与任一子句的条件匹配的所有文档
```
##### **元素操作符**
```javascript
$exists 匹配具有指定字段的文档

$type 如果字段是指定类型，则选择文档
```
##### **更新运算符**
```javascript
$currentDate 将字段的值设置为当前日期

$inc 按指定的数量增加字段的值

$min 仅当指定的值小于现有字段值时才更新字段

$max 仅当指定的值大于现有字段值时才更新字段。

$mul 将字段的值乘以指定的量

$rename 重命名字段

$set 设置文档中字段的值

$setOnInsert 如果更新导致文档插入，则设置字段的值。对修改现有文档的更新操作没有影响

$unset 从文档中删除指定的字段
```

# 02.查询语句
##### 查询所有文档
```javascript
db.集合名称.find();
```
---
##### 指定条件查询
```javascript
db.集合名称.find({ <field>: <value>, ... });

例: db.users.find({ status: 'A' });
```
---
##### 使用查询操作符指定条件
```javascript
db.集合名称.find({ <field>: { <operator>: <value> }, ... });

例: db.users.find({ status: { $in: ['P', 'D'] }, });
```
---
##### 指定and条件
```javascript
db.集合名称.find({ <field1>: <value1>, <field2>: <value2> })

例: db.users.find({ status: 'A', age: { $lt: 30 } });
```
---
##### 指定or条件
```javascript
db.集合名称.find({ $or: [{ <field1>: <value1> }, { <field2>: <value2> }] });

例: db.users.find({ $or: { status: 'A' }, { age: { $lt: 30 } } });
```
---
##### 指定and和or条件
```javascript
db.集合名称.find({ <field1>: <value1> }, $or: [{ <field2>: <value2> }, { <field3>: <value3> }]);

db.users.find(
  {
    status: 'A',
    $or: [{ age: { $lt: 30 } }, { type: 1 }]
  }
);
```
---
##### 指定对象中的字段1
```javascript
db.集合名称.find({ obj: { <field1>: <value1>, <field2>: <value2> } });

例: db.users.find({ favorites: { artist: 'Picasso', food: 'pizza' } });
```
---
##### 指定对象中的字段2
```javascript
db.集合名称.find({ 'obj.<field>': <value> });

例: db.users.find({ 'favorites.artist': 'Picasso' });
```
---
##### 数组中的精确匹配
```javascript
数组的相等匹配要求数组字段与指定的匹配数组 <value> 完全 相符，包括数组元素的顺序。
db.集合名称.find({ <field>: <value> });

下面的例子查询所有字段 badges 是一个正好有两个元素: "blue" 和 "black" (以这种顺序)的数组的文档
例: db.users.find({ badges: ['blue', 'black'] });
```
---
##### 匹配一个数组元素
```javascript
等于匹配可以指定匹配数组中的单一元素。如果数组中至少 一个 元素包含特定的值，就可以匹配这些声明。
db.集合名称.find({ <field>: <value> });

下面的示例查询 badges 是一个数组字段并且包含 ``“black”``作为其数组元素的所有文档。
db.users.find({ badges: 'blcak' });
```
---
##### 匹配数组中的指定元素
```javascript
等于匹配可以指定匹配数组某一特定所有或位置的元素
db.集合名称.find({ <field>.index: <value> });

在下面的例子中,查询使用匹配所有 dadges 数组的第一个元素为``”black”`` 的文档:
db.users.find({ 'badges.0': 'black' });
```
---
##### 指定数组元素的多个查询条件
```javascript
1.单个元素满足查询条件
使用 $elemMatch 操作符为数组元素指定复合条件，以查询数组中至少一个元素满足所有指定条件的文档。
db.集合名称.find({ <field>: { $elemMatch: <value> } });

下面的例子查询 finished 数组至少包含一个大于 ($gt) 15 并且小于 ($lt) 20 的元素的文档：
db.users.find({ finished: { $elemMatch: { $gt: 15, $lt: 20 } } });
```
---
##### 元素组合满足查询条件
```javascript
db.集合名称.find({ <field>: <value> });

下面的例子查询 finished 数组包含以某种组合满足查询条件的元素的文档;例如,一个元素满足大于 15 的条件并且有另一个元素满足小于 20 的条件,或者有一个元素满足了这两个条件：
db.users.find({ finished: { $gt: 15, $lt: 20 } });
```
---
##### 数组对象的匹配
```javascript
使用数组索引匹配数组对象中的字段
db.集合名称.find({ <filed>.index.<field>: <value> });

下面的例子查询匹配所有points的第一个元素对象中字段points的值小于或等于55的数组的文档
db.users.find({ 'points.0.points': { $lte: 55 } });
```
---
##### 不指定数组索引匹配字段
```javascript
db.集合名称.find({ <field>.<field>: <value> });

如果你不知道文档在数组中的索引位置，用点号 (.) 将包含数组的字段的名字和内嵌文档的字段的名字连起来。
下面的例子选择出所有 points``数组中至少有一个嵌入文档包含值小于或等于 ``55 的字段 points 的文档:
db.users.find({ 'points.points': { $lte: 55 } });
```
---
##### 指定素组文档的多个查询条件
```javascript
单个元素满足查询条件
使用 $elemMatch 操作符为数组元素指定复合条件，以查询数组中至少一个元素满足所有指定条件的文档。
db.集合名称.find({ <field>: { $elemMatch: { <field>: <value> } } });

下面的例子查询 points 数组有至少一个包含 points 小于等于 70 并且字段 bonus 等于 20 的内嵌文档的文档：
db.users.find({ points: { $elemMatch: { points: { $lte: 70 }, bonus: 20 } } });
```
---
##### 元素组合满足查询条件
```javascript
db.集合名称.find({ <field>.<filed1>: <value1>, <field><field2>: <value2> });

下面的例子查询了 points 数组包含了以某种组合满足查询条件的元素的文档；例如，一个元素满足 points 小于等于 70 的条件并且有另一个元素满足 bonus 等于 20 的条件，或者一个元素同时满足两个条件：
db.users.find({ 'points.points': { $lte: 70 }, 'points.bouns': 20 });
```
---
##### 映射文档
```javascript
映射文档限制了返回所有匹配文档的字段。映射文档可以指明包括哪些字段或者排除哪些字段，有以下形式：
{ <field1>: <value>, <field2>: <value> }

<value>的值有如下:
  * 1或true在返回的文档中包含字段。
  * 0或者false排除该字段

注解
对于 _id 字段，您不用显式指明 _id: 1 以返回 _id 字段。 db.collection.find() 方法返回 _id 字段，除非您指明 _id: 0 排除该字段。
```
---
##### 只返回指定的字段及\_id字段
```javascript
db.集合名称.find({ <field>: <value> }, { <field1>: 1, <field2>: 1 });

一个映射可以显式地包含几个字段，在下面的操作中， db.collection.find() 方法返回满足查询的所有文档。在结果集中，只返回了匹配文档的 name ， status 以及默认的 _id 字段。
db.users.find({ status: 'A' }, { name: 1, status: 1 });

若不需要_id字段 只需在查询语句中写 {..., _id: 0} 即可
```
---
##### 返回除了排除字段之外的所有字段
```javascript
db.集合名称.find({ <field>: <value> }, { <field1>: 0, <field2>: 0 });

为了排除一个或多个字段，而不是列出在匹配文档中列出的字段，您可以像下列示例中一样，使用一个映射来排除特定的字段：
db.users.find({ status: 'A' }, { favorites: 0, points: 0 });
```
---
##### 返回对象类型文档中的指定字段
```javascript
db.集合名称.find({ <field>: <value> }, { <field>.<field>: 0 });

下面的示例指明了排除 favorites 文档中 food 字段的映射。所有其他字段都会在匹配的文档中返回：
db.users.find({ status: 'A' }, { 'favorites.food': 0 });
```
---
##### 映射数组对象的文档
```javascript
db.集合名称.find({ <field>: <value> }, { <field>: 1, <field>.<field>: 1 });

下面的示例指明映射返回 name 字段、 status 字段，以及 points 数组的文档中包含 bonus 字段的文档。 默认返回 _id 。
db.users.find({ status: "A" }, { name: 1, status: 1, "points.bonus": 1 });
```
---
##### 映射返回数组中特定的数组元素
```javascript
db.集合名称.find({ <field>: <value> }, { <field>: 1, <field>: { $slice: -1 } });

下面的示例使用 $slice 映射操作符来返回 scores 数组中最后的元素。
db.users.find({ status: "A" }, { name: 1, status: 1, points: { $slice: -1 } })
```
---
##### 类型查询
```javascript
{ <field>: { $type: 10 } } 查询 仅仅 匹配那些包含值是 null 的 <field>字段的文档,亦即 条目 字段的值是BSON类型中的 Null (即 10 ):
db.集合名称.find({ <field>: { $type: 10 } });

该查询只返回文 条目 字段是 null 值的文档:
db.users.find({ name: { $type: 10 } });
```
---
##### 存在性查询
```javascript
db.集合名称.find({ <field>: { $exists: false } });
```

# 03.更新语句
##### 更新一条数据
```javascript
db.集合名称.updateOne(
  { _id: '1' },
  {
    $set: {
      '<field>': '<value>'
    }
  }
)
```
---
##### 更新多条数据
```javascript
db.集合名称.updateMany(
  { _id: { $in: ['1', '2'] } },
  {
    $set: {
      '<field>': '<value>'
    }
  }
)

```
---


# 04.增加语句
##### 增加一条数据
```javascript
db.集合名称.insertOne(
  {
    '<field>': '<value>',
    ...
  }
)
```
---
##### 增加多条数据
```javascript
db.集合名称.insertMany([
  { '<field>': '<value>', ... },
  { '<field>': '<value>', ... },
  { '<field>': '<value>', ... },
])
```

# 05.删除语句
##### 删除一条数据
```javascript
db.集合名称.deleteOne({<filter>});
```
---
##### 删除多条数据
```javascript
db.collection.deleteMany(<filter>);
```
---
