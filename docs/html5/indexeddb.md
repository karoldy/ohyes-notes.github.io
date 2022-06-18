[首页](/) / [html5](/html5/) / [IndexDB](/html5/indexeddb)

# IndexedDB

IndexedDB，非关系型数据库，W3C标准推荐

IndexedDB 是一种轻量级 NOSQL 数据库，是由浏览器自带。相比Web Sql更加高效，包括索引、事务处理和查询功能

在HTML5本地存储中，IndexedDB存储的数据是最多的，不像webStorage的4M，IndexedDB存储空间是无上限且永久的

## 兼容性

![兼容性](https://cdn.jsdelivr.net/gh/karoldy/public-bed/image/html5/indexdb_compatibility.png)

## 特点

1. 键值对存储

IndexedDB内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以`键值对`的形式保存，每一个数据都有对应的键名，键名是独一无二的，不能有重复，否则会抛出一个错误

2. 异步

IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作，这与localStorage形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现

3. 支持事务

IndexedDB支持事务(transaction)，这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回到事务发生之前的状态，不存在只改写一部分数据的情况

4. 同域限制

受到同域限制，每一个数据库对应创建该数据库的域名。来自不同域名的网页，只能访问自身域名下的数据库，而不能访问其他域名下的数据库

5. 储存空间大

IndexedDB的储存空间比localStorage大得多，一般来说不少于250MB。IE的储存上限是250MB，Chrome和Opera是剩余空间的某个百分比，Firefox则没有上限

6. 支持二进制储存

IndexedDB不仅可以储存字符串，还可以储存二进制数据

!> 在使用时切记只有当修改新增数据库表单时才需要增加版本号，如果只是修改数据库表单里面的数据是不需要改变版本号的

## IndexedDB中的对象

|Object|描述|
|:---|:---|
|[IDBOpenDBRequest](#idbopendbrequest)|表示一个打开数据库的请求|
|[IDBDatabase](#idbdatabase)|表示一个数据库连接。这是在数据库中获取事务的唯一方式|
|[IDBTransaction](#transaction)|表示一个事务。在数据库上创建一个事务，指定作用域(例如要访问的存储对象)，并确定所需的访问类型(只读或读写)|
|[IDBRequest](#idbrequest)|处理数据库请求并提供对结果访问的通用接口|
|[IDBObjectStore](#objectstore)|表示允许访问通过主键查找的 IndexedDB 数据库中的一组数据的对象仓库区|
|[IDBIndex](#idbindex)|也是为了允许访问 IndexedDB 数据库中的数据子集，但使用索引来检索记录而不是主键。这有时比使用 IDBObjectStore 更快|
|[IDBCursor](#cursor)|迭代对象仓库和索引|
|[IDBCursorWithValue](#cursorwithvalue)|迭代对象仓库和索引并返回游标的当前值|
|[IDBKeyRange](#idbkeyrange)|定义可用于从特定范围内的数据库检索数据的键范围|

## IDBOpenDBRequest :id=idbopendbrequest

IndexedDB API 的 IDBOpenDBRequest 接口提供了访问打开或删除数据库的请求的结果（通过调用 [IDBFactory.open()](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory/open) and [IDBFactory.deleteDatabase()](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/deleteDatabase)，途径就是使用特殊的事件处理器属性

**创建数据库**

```typescript
let db;

// 兼容性处理
let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

let request: IDBOpenDBRequest = indexedDB.open(dbName, version);

request.onerror = function (e) {
	console.log('创建数据库失败')
}

request.onsuccess = function (e) {
	db = e.target.result;
	console.log('创建数据库成功');
}

request.onupgradeneeded = function (e) {
	console.log('打开成功 or 更新版本成功');
}
```

(1)第一次打开数据库或者版本更新时，会先触发onupgradeneeded事件，然后触发onsuccess事件

(2)open方法返回的是一个对象(IDBOpenDBRequest)，回调函数定义在这个对象上面

(3)回调函数接受一个事件对象event作为参数，它的target.result属性就指向打开的IDBDatabase数据库连接对象

---

## IDBDatabase :id=idbdatabase

?> 对象仓库 可以理解成数据表

IndexedDB 中的 IDBDatabase 接口提供一个到 数据库的连接; 你可以使用 IDBDatabase 对象在数据库中打开一个transaction , 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBDatabase.name`|String|Y|IDBDatabase接口的名称只读属性是一个字符串，其中包含所连接数据库的名称|
|`IDBDatabase.objectStoreNames`|Array\<string>|Y|一个字符串数组，其中包含连接数据库中当前对象仓库的名称列表|
|`IDBDatabase.version`|Number|Y|IDBDatabase接口的version属性是一个64位整数，其中包含所连接数据库的版本。首次创建数据库时，此属性为空字符串|

---

### 方法

#### `IDBDatabase.close()`

IDBDatabase接口的close()方法立即返回并在单独的线程中关闭连接，返回值None(undefined)

**语法**

```js
IDBDatabase.close();
```

---

#### `IDBDatabase.createObjectStore()`

IDBDatabase接口的createObjectStore()方法创建并返回一个新的IDBObjectStore对象

!> createObjectStore() 只能在 版本升级的回调中执行，其他地方调用会报错

**语法**

```ts
const store: IDBObjectStore = IDBDatabase.createObjectStore(name);
const store: IDBObjectStore = IDBDatabase.createObjectStore(name, options);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|name|String|Y|要创建的新对象仓库的名称。请注意，可以使用空名称创建对象仓库|
|options|Object|N|一个选项对象，其属性是该方法的可选参数|

**options属性说明**

|属性|值|描述|
|:---|:---|:---|
|keyPath|String \| Array\<string>|新对象仓库要使用的密钥路径。如果为空或未指定，则创建对象仓库时不使用键路径，并使用脱机键。还可以将数组作为键路径传入|
|autoIncrement|Boolean<true\|false>|如果为true，则对象仓库具有密钥生成器。默认为false|

?> 注: 一般keyPath和autoIncrement只需要一个，两个都存在的话，自动生成一个自增主键，并且keyPath设置的字段必须要存在, 且对象不得缺少指定属性

---

#### `IDBDatabase.deleteObjectStore()`

IDBDatabase接口的deleteObjectStore()方法销毁连接数据库中具有给定名称的对象仓库以及引用它的任何索引，返回值None(undefined)

**语法**

```js
IDBDatabase.deleteObjectStore(name);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|name|String|Y|要删除的对象仓库的名称。名称区分大小写|

---

#### `IDBDatabase.transaction()`

IDBDatabase接口的transaction方法立即返回包含IDBTransation的事务对象(IDBTransation)。objectStore方法，可用于访问对象仓库

**语法**

```ts
const t: IDBTransation = IDBDatabase.transaction(storeNames);
const t: IDBTransation = IDBDatabase.transaction(storeNames, mode);
const t: IDBTransation = IDBDatabase.transaction(storeNames, mode, options);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|storeNames|String \| Array\<string>|Y|新事务范围内的对象仓库的名称，声明为字符串数组。仅指定需要访问的对象仓库。如果只需要访问一个对象仓库，可以将其名称指定为字符串|
|mode|String<readonly \| readwrite \| readwriteflush>|Y|可以在事务中执行的访问类型。事务以三种模式之一打开：`readonly`、`readwrite`和`readwriteflush`(非标准，仅限Firefox)此处无法指定versionchange模式。如果不提供参数，则默认访问模式为只读。为了避免减慢速度，除非确实需要写入数据库，否则不要打开读写事务，(默认`readonly`)|
|options|Object|N|其他参数|

**options属性说明**

|属性|值|描述|
|:---|:---|:---|
|durability|String<default\| strict \| relaxed>|默认、严格或放松。默认值为`default`。使用`relaxed`可以提供更好的性能，但保证较少。鼓励Web应用程序对短暂的数据（如缓存或快速更改的记录）使用`relaxed`，在降低数据丢失风险超过对性能和功耗影响的情况下使用`strict`|

以下几行是等效的：

```ts
const t: IDBTransation = IDBDatabase.transaction([storeName]);
const t: IDBTransation = IDBDatabase.transaction(storeName);
```

获取全部数据表

```js
const t: IDBTransation = IDBDatabase.transaction(db.objectStoreNames);
```

---

### 事件

#### `IDBDatabase.close`

当数据库连接意外关闭时，将在IDBDatabase上激发close事件。例如，如果删除了基础存储，或者用户在浏览器的历史记录首选项中清除了数据库，则可能会发生这种情况

**语法**

```js
IDBDatabase.addEventListener('close', function (event) {
	// do something
});
```

or

```js
IDBDatabase.onclose = function (event) {
	// do something
};
```

---

#### `IDBDatabase.versionchange`

当在其他地方(很可能是在同一台计算机上的另一个窗口/选项卡中) 请求数据库结构更改(在IDOpenDBRequest或IDBFactory.deleteDatabase上发送upgradeneeded事件)时，会触发versionchange事件

**语法**

```js
IDBDatabase.addEventListener('versionchange', function (event) {
	// do something
});
```

or

```js
IDBDatabase.onversionchange = function (event) {
	// do something
};
```

---

## IDBTransaction :id=transaction

IDBTransacation接口由IndexedDB API提供，异步事务使用数据库中的事件对象属性。所有的读取和写入数据均在事务中完成。由IDBDatabase发起事务，通过IDBTransaction 来设置事务的模式（例如：是否只读readonly或读写readwrite），以及通过IDBObjectStore来发起一个请求。同时你也可以使用它来中止事务

**创建事务**

```ts
const transaction: IDBTransaction = IDBDatabase.transaction(storeName, mode);
```

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBTransaction.db`|Object\<IDBDatabase>|Y|返回该事务所属的数据库连接|
|`IDBTransaction.durability`|String|Y|IDBTransation接口的耐久性只读属性返回创建事务时使用的耐久性提示。这是向用户代理提示在提交事务时是优先考虑性能还是持久性|
|`IDBTransaction.error`|Object<DomeException \| null>|Y|IDBTransation接口的error属性返回存在不成功事务时的错误类型|
|`IDBTransaction.mode`|String|Y|IDBTransation接口的mode属性返回访问事务范围内对象仓库中数据的当前模式(即，该模式是只读模式，还是要写入对象仓库？)默认值为只读|
|`IDBTransaction.objectStoreNames`|Array\<string>|Y|IDBTransation接口的objectStoreNames属性返回IDBObjectStore对象名称的字符串数组|

---

### 方法

#### `IDBTransaction.abort()`

IDBTransation接口的abort()方法回滚对数据库中与此事务关联的对象的所有更改，返回值None(undefined)

**语法**

```js
IDBTransaction.abort();
```

示例

```ts
const transaction: IDBTransaction = IDBDatabase.transaction(storeName, 'readwrite');
const store: IDBObjectStore = transaction.objectStore(storeName);
const request: IDBRequest = store.add({ ... });

transaction.onerror = function (event) {
	// 新增失败回滚
	transaction.abort();
};
```

!> 显式的调用会报错

---

#### `IDBTransaction.commit()`

IDBTransation接口的commit()方法在激活的事务上调用该事务时提交该事务，返回值None(undefined)


?> 请注意，通常不必调用commit() ——当所有未完成的请求都得到满足且没有发出新请求时，事务将自动提交。commit()可用于启动提交过程，而无需等待来自未完成请求的事件被调度。如果在非活动事务上调用它，它将抛出InvalidStateError DomeException

**语法**

```js
IDBTransaction.commit();
```

示例

```ts
const transaction: IDBTransaction = IDBDatabase.transaction(storeName, 'readwrite');
const store: IDBObjectStore = transaction.objectStore(storeName);
const request: IDBRequest = store.add({ ... });

transaction.commit();
```

---

#### `IDBTransaction.objectStore()`

IDBTransation接口的objectStore()方法返回已添加到此事务范围的对象仓库，返回值IDBObjectStore对象

?> 对相同名称的相同事务对象调用此方法时，都会返回相同的IDBObjectStore实例。如果在不同的事务对象上调用此方法，则返回不同的IDBObjectStore实例

**语法**

```ts
const store: IDBObjectStore = IDBTransaction.objectStore(name);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|name|String|Y|请求的对象仓库的名称|

---

### 事件

#### `IDBTransaction.abort`

中止IndexedDB事务时会触发中止事件(回滚)


发生这种情况的原因如下：

- 错误的请求(例如，尝试添加相同的键两次，或者在键具有唯一性约束时放置相同的索引键)

- 显式abort()调用

- 请求的成功/错误处理程序中存在未捕获的异常

- 输入/输出错误(写入磁盘的实际故障，例如磁盘分离或其他操作系统/硬件故障)

- 超出配额

此不可取消的事件冒泡到关联的IDBDatabase对象

**语法**

```js
IDBTransaction.addEventListener('abort', function (event) {
	console.log('发生事务回滚');
});
```
or

```js
IDBTransaction.onabort= function (event) {
	console.log('发生事务回滚');
};
```

---

#### `IDBTransaction.complete`

事务成功完成时，将触发IndexedDB API的complete事件

**语法**

```js
IDBTransaction.addEventListener('complete', function (event) {
	console.log('事务完成');
});
```
or

```js
IDBTransaction.oncomplete = function (event) {
	console.log('事务完成');
};
```

---

#### `IDBTransaction.error`

当请求返回错误并且事件冒泡到事务对象时，将在IDBTransation上触发错误事件

**语法**

```js
IDBTransaction.addEventListener('error', function (event) {
	console.log('事务错误');
});
```
or

```js
IDBTransaction.onerror = function (event) {
	console.log('事务错误');
};
```

---

## IDBRequest :id=idbrequest

IndexedDB api中的IDBRequest接口提供了根据绑定事件处理函数访问结果集的方法。其中结果集来自对数据库和数据库对象发起的异步查询。对数据库的读写操作都是通过request的方式来实现。

该request对象初始时不包括任何关于操作结果的信息，当request上的事件触发时，可以通过IDBRequest实例上的事件处理函数访问相关信息。

### 基础概念

所有异步操作立即返回一个IDBRequest实例。每一个请求都有一个readyState属性，初始时为pending，当请求完成或失败的时候，readyState会变为done。当状态值变为done时，每一个请求都会返回result和error属性，并且会触发一个事件。当状态保持为pending时，任何尝试访问result或error属性的行为会触发一个InvalidStateError异常。

用直白的话来说就是：所有的异步方法返回一个request对象。如果request对象成功执行了，结果可以通过result属性访问到，并且该request对象上会触发success事件。如果操作中有错误发生，一个error事件会触发，并且会通过result属性抛出一个异常。

---

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBRequest.error`|Object<DOMException \| null>|Y|IDBRequest接口的error只读属性在请求失败时返回错误|
|`IDBRequest.readyState`|String<pending \| done>|Y|请求的状态。每个请求都以挂起状态(pending)启动。当请求成功完成或发生错误时，状态变为"done"|
|`IDBRequest.result`|Any|Y|IDBRequest接口的result属性返回请求的结果。如果请求失败且结果不可用，则引发InvalidStateError异常|
|`IDBRequest.source`|Object<IDBIndex \| IDBObjectStore \| IDBCursor \| null>|Y|请求的源，例如索引或对象仓库。如果不存在源(例如调用indexedDB.open()时)，它将返回null|
|`IDBRequest.transaction`|Object<IDBTransaction \| null>|Y|IDBRequest接口的事务属性返回请求的事务，即请求在其中进行的事务|

---

### 事件

#### `IDBRequest.onerror`

当错误导致请求失败时，将执行错误处理程序，此事件不可取消且不冒泡。

**语法**

```js
IDBRequest.addEventListener('error', function (event) {
	console.log('请求错误');
});
```
or

```js
IDBRequest.onerror = function (event) {
	console.log('请求错误');
};
```

#### `IDBRequest.onsuccess`

请求成功

**语法**

```js
IDBRequest.addEventListener('success', function (event) {
	console.log('请求成功');
  const result = event.target.result;
});
```
or

```js
IDBRequest.onsuccess = function (event) {
	console.log('请求成功');
  const result = event.target.result;
};
```

---

## IDBObjectStore :id=objectstore

 IndexedDB API  的 IDBObjectStore 接口表示数据库中的 一个 对象库(object store) 。对象库中的记录根据其键值进行排序。这种排序可以实现快速插入，查找和有序检索

**创建对象仓库**

```ts
const store: IDBObjectStore = IDBDataBase.transaction(storeName, 'readonly').objectStore(storeName);
```

---

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBObjectStore.autoIncrement`|Boolean|Y|IDBObjectStore的属性autoIncrement接口返回当前objectStore的自增标记值|
|`IDBObjectStore.indexNames`|Array<string>|Y|IDBObjectStore的属性indexNames 返回此对象仓库中对象的 indexes(索引) 名称(name)列表|
|`IDBObjectStore.keyPath`|Any|Y|IDBObjectStore的属性keyPath接口返回当前objectStore的key path|
|`IDBObjectStore.name`|String|Y|IDBObjectStore接口的name属性指示此对象仓库的名称|
|`IDBObjectStore.transaction`|Object\<IDBTransaction>|Y|IDBObjectStore接口的事务属性返回此对象仓库所属的事务对象|

?> 什么是keyPath呢？在indexedDB中，一条记录就是一个object，object里面有一个属性作为这条记录的主要依据用来进行查询，而这个属性的属性名就是keyPath，属性值就是key。在用indexedDB的get方法时，提供key，而不需要指定keyPath，因为get方法把参数作为这个最主要的属性的值，在数据库中进行查询

---

### 方法

#### `IDBObjectStore.count(query)`

IDBObjectStore接口的count()方法返回IDBRequest对象，并在单独的线程中返回与提供的键或IDBKeyRange匹配的记录总数。如果未提供参数，则返回存储区中的记录总数

**语法**

```js
const request: IDBRequest = IDBObjectStore.count();
const request: IDBRequest = IDBObjectStore.count(query);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|一个key或IDBKeyRange对象，指定要计数的记录范围|

示例

```ts
const request: IDBRequest = IDBObjectStore.count();
request.onsuccess = (event) => {
  const count = event.target.result;
};
```

---

#### `IDBObjectStore.clear()`

IDBObjectStore接口的clear()方法创建并立即返回IDBRequest对象，并在单独的线程中清除此对象仓库。用于从对象仓库中删除所有当前数据

**语法**

```ts
const request: IDBRequest = IDBObjectStore.clear();
```

---

#### `IDBObjectStore.get()`

IDBObjectStore 的接口 get()方法 返回 IDBRequest 对象，并在单独的线程(separate thread)中返回由指定键选择的 对象储存(object store) 。这用于从对象储存检索特定记录

**语法**

```ts
const request: IDBRequest = IDBObjectStore.get(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|Y|标识要检索的记录的键或键范围|

示例

```ts
const request: IDBRequest = IDBObjectStore.count();
request.onsuccess = (event) => {
  const result = event.target.result;
};
```

---

#### `IDBObjectStore.add()`

IDBObjectStore 接口中的 add() 方法返回一个 IDBRequest 对象，在单独的线程中创建一个结构(structured clone)化克隆值，并且在对象仓库中存储这个克隆值。这个方法用作在一个对象仓库中添加一条新的记录

**语法**

```ts
const request: IDBRequest = IDBObjectStore.add(value);
const request: IDBRequest = IDBObjectStore.add(value, key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|value|Object|Y|需要存储的值|
|key|String|N|关键字用于识别记录。如果未指明，即为空|

?> 如果key 是自增主键，可以不传

---

#### `IDBObjectStore.put()`

IDBObjectStore 接口的  put() 方法更新一条给定的数据库记录,如果给出的值不存在,则插入一个新的记录，返回 IDBRequest 对象

!> 谨记,如果你有一条 IDBCursor记录想要更新, 使用IDBCursor.update()方法更新,比 IDBObjectStore.put() 方法更合适. 这样做可以清楚地表明将更新现有记录，而不是插入新记录

语法

```ts
const request: IDBRequest = IDBObjectStore.put(value);
const request: IDBRequest = IDBObjectStore.put(value, key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|value|Object|Y|你想要更新 (或插入)的记录|
|key|String|N|你想要更新记录的主键|

?> 如果key 是自增主键，可以不传

---

#### `IDBObjectStore.delete()`

IDBObjectStore接口的delete()方法返回IDBRequest对象，并在单独的线程中删除指定的一条或多条记录

**语法**

```ts
const request: IDBRequest = IDBObjectStore.delete(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|Y|要删除的记录的键，或用于删除键在范围内的所有记录的IDBKeyRange|

---

#### `IDBObjectStore.getAll()`

IDBObjectStore接口的getAll()方法返回一个IDBRequest对象，该对象包含与指定参数匹配的对象仓库中的所有对象，或者如果没有给定参数，则返回存储中的所有对象

**语法**

```ts
const request: IDBRequest = IDBObjectStore.getAll();
const request: IDBRequest = IDBObjectStore.getAll(query);
const request: IDBRequest = IDBObjectStore.getAll(query, count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|count|Number|N|指定找到多个值时要返回的值数。如果小于0或大于2^32-1，将引发TypeError异常|

示例

```ts
const request: IDBRequest = IDBObjectStore.getAll();
request.onsuccess = (event) => {
  const result = event.target.result;
};
```

---

#### `IDBObjectStore.getAllKeys()`

IDBObjectStore接口的getAllKeys()方法返回一个IDBRequest对象，该对象检索对象仓库中与指定参数匹配的所有对象的记录键，如果未给定参数，则检索存储中的所有对象的记录键

**语法**

```ts
const request: IDBRequest = IDBObjectStore.getAllKeys();
const request: IDBRequest = IDBObjectStore.getAllKeys(query);
const request: IDBRequest = IDBObjectStore.getAllKeys(query, count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|count|Number|N|指定找到多个值时要返回的值数。如果小于0或大于2^32-1，将引发TypeError异常|

示例

```ts
const request: IDBRequest = IDBObjectStore.getAll();
request.onsuccess = (event) => {
  const result = event.target.result;
};
```

---

#### `IDBObjectStore.getKey()`

IDBObjectStore接口的getKey()方法返回IDBRequest对象，并在单独的线程中返回指定查询选择的键。这用于从对象仓库中检索特定记录

**语法**

```ts
const request: IDBRequest = IDBObjectStore.getKey(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|Y|标识要检索的记录的键或键范围|

示例

```ts
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const request: IDBRequest = IDBObjectStore.getKey(IDBKeyRange(yesterday, today));
request.onsuccess = (event) => {
  const result = event.target.result;
  alert("The 1st activity in last 24 hours was occurred at " + result);
};
```

---

#### `IDBObjectStore.index()`

IDBObjectStore接口的index()方法在当前对象仓库中打开一个命名索引，然后可以使用该索引返回一系列记录，例如，使用游标按该索引排序，返回 IDBIndex 对象

**语法**

```ts
const index: IDBIndex = IDBObjectStore.index(name);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|name|String|Y|索引的名称|

示例

```ts
const index: IDBIndex = IDBObjectStore.index(name);
index.openCursor().onsuccess = function (event) {
  const cursor = event.target.result;
	// do something
};
```

---

#### `IDBObjectStore.createIndex()`

IDBObjectStore接口的createIndex()方法在连接的数据库中创建并返回一个新的IDBIndex对象。它创建一个新字段/列，为每个要包含的数据库记录定义一个新的数据点

!> 注： createIndex() 只能在版本更新或者创始创建数据库是执行，否则会报错

**语法**

```ts
const index: IDBIndex = IDBObjectStore.createIndex(name, keyPath);
const index: IDBIndex = IDBObjectStore.createIndex(name, keyPath, options);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|name|String|Y|要创建的索引的名称。请注意，可以使用空名称创建索引|
|keyPath|String \| [String]|Y|要使用的索引的键路径。请注意，可以使用空键路径创建索引，也可以将序列（数组）作为键路径传递|
|options|Object|N|可以包括以下属性的对象|

**options属性说明**

|属性|类型|描述|
|:---|:---|:---|
|unique|boolean|如果为true，索引将不允许单个键的值重复|
|multiEntry|boolean|如果为true，则当keyPath解析为数组时，索引将在索引中为每个数组元素添加一个条目。如果为false，它将添加一个包含数组的条目|

---

#### `IDBObjectStore.deleteIndex()`

IDBObjectStore接口的deleteIndex()方法将销毁在版本升级期间使用的连接数据库中具有指定名称的索引，返回值None

**语法**

```js
IDBObjectStore.deleteIndex(indexName);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|indexName|String|Y|要删除的现有索引的名称|

---

#### `IDBObjectStore.openCursor()`

IDBObjectStore接口的openCursor()方法返回IDBRequest对象，并在单独的线程中返回新的IDBCursorWithValue对象。用于使用光标遍历对象仓库

**语法**

```ts
const reqeust: IDBRequest = IDBObjectStore.openCursor();
const reqeust: IDBRequest = IDBObjectStore.openCursor(query);
const reqeust: IDBRequest = IDBObjectStore.openCursor(query, direction);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果传递了单个有效密钥，则默认为仅包含该密钥的范围。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|direction|String<next \| nextunique \| prev \| prevunique>|N|告诉光标移动的方向, 有效值为next、nextunique、prev和prevunique。默认值为next|

示例

```ts
const reqeust: IDBRequest = IDBObjectStore.openCursor();

request.onsuccess = function (event) {
  const result = [];
  const cursor: IDBCursorWithValue = event.target.result;
  if (cursor) {
    result.push(cursor.value);
    cursor.continue();
  } else {
    // no more results
  }
};
```

---

#### `IDBObjectStore.openKeyCursor()`

IDBObjectStore接口的openKeyCursor()方法返回一个IDBRequest对象，其结果将设置为IDBCursor，可用于迭代匹配结果。用于使用光标遍历对象仓库区的键

**语法**

```ts
const reqeust: IDBRequest = IDBObjectStore.openKeyCursor();
const reqeust: IDBRequest = IDBObjectStore.openKeyCursor(query);
const reqeust: IDBRequest = IDBObjectStore.openKeyCursor(query, direction);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果传递了单个有效密钥，则默认为仅包含该密钥的范围。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|direction|String<next \| nextunique \| prev \| prevunique>|N|告诉光标移动的方向, 有效值为"next"、"nextunique"、"prev"和"prevunique"。默认值为"next"|

示例

```ts
const reqeust: IDBRequest = IDBObjectStore.openKeyCursor();

request.onsuccess = function (event) {
  const result = [];
  const cursor: IDBCursor = event.target.result;
  if (cursor) {
    result.push(cursor);
    cursor.continue();
  } else {
    // no more results
  }
};
```

---

## IDBIndex :id=idbindex

IndexedDB API 中的IDBIndex接口提供了异步获取数据库中一个index的功能。index是一种用于在另一个object store中查找记录的object store，其被称为被引用的object store。你可以通过使用该接口来取回数据。也是为了允许访问 IndexedDB 数据库中的数据子集，但使用索引来检索记录而不是主键。这有时比使用 IDBObjectStore 更快

**创建索引**

```ts
const index: IDBIndex = IDBObjectStore.createIndex(name, keyPath, options);
```

**获取索引**

```ts
const index: IDBIndex = IDBObjectStore.index(name);
```

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBIndex.keyPath`|Any|Y|IDBIndex接口的keyPath属性返回当前索引的键路径。如果为null，则此索引不会自动填充|
|`IDBIndex.multiEntry`|Boolean|Y|IDBDINDEX接口的multiEntry属性返回一个布尔值，当计算索引键路径的结果生成一个数组时，该布尔值会影响索引的行为|
|`IDBIndex.name`|String|Y|IDBIndex接口的name属性包含一个为索引命名的字符串|
|`IDBIndex.objectStore`|Object\<IDBObjectStore>|Y|IDBIndex接口的objectStore属性返回当前索引引用的对象仓库的名称|
|`IDBIndex.unique`|Boolean|Y|唯一只读属性返回一个布尔值，该布尔值表示索引是否允许重复键|

---

### 方法

#### `IDBIndex.count()`

IDBIndex接口的count()方法返回IDBRequest对象，并在单独的线程中返回键范围内的记录数

**语法**

```ts
const request: IDBRequest = IDBIndex.count();
const request: IDBRequest = IDBIndex.count(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|N|标识要计数的记录的键或键范围|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.count();
request.onsuccess = function (event) {
  const result = event.target.result;
};
```

---

#### `IDBIndex.get()`

IDBIndex接口的get()方法返回IDBRequest对象，并在单独的线程中查找与给定键对应的引用对象仓库中的值，或者如果键设置为IDBKeyRange，则查找第一个对应的值

**语法**

```js
const request: IDBRequest = IDBIndex.get();
const request: IDBRequest = IDBIndex.get(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|N|标识要检索的记录的键或IDBKeyRange。如果此值为null或缺失，浏览器将使用未绑定的键范围|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.get();
request.onsuccess = function (event) {
  const result = event.target.result;
};
```

---

#### `IDBIndex.getAll()`

IDBIndex接口的getAll()方法检索索引中的所有对象，返回IDBRequest对象

**语法**

```js
const request: IDBRequest = IDBIndex.getAll();
const request: IDBRequest = IDBIndex.getAll(query);
const request: IDBRequest = IDBIndex.getAll(query, count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|count|Number|N|指定找到多个值时要返回的值数。如果小于0或大于2^32-1，将引发TypeError异常|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.getAll();
request.onsuccess = function (event) {
  const result = event.target.result;
};
```

---

#### `IDBIndex.getAllKeys()`

IDBIndex接口的getAllKeys()方法异步检索索引中所有对象的主键，并将它们设置为请求对象的结果，返回IDBRequest对象

**语法**

```ts
const request: IDBRequest = IDBIndex.getAllKeys();
const request: IDBRequest = IDBIndex.getAllKeys(query);
const request: IDBRequest = IDBIndex.getAllKeys(query, count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|query|String \| IDBKeyRange|N|要查询的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|count|Number|N|指定找到多个值时要返回的值数。如果小于0或大于2^32-1，将引发TypeError异常|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.getAllKeys();
request.onsuccess = function (event) {
  const result = event.target.result;
};
```

---

#### `IDBIndex.getKey()`

IDBIndex接口的getKey()方法返回一个IDBRequest对象，并在单独的线程中查找与该索引中给定键相对应的主键，或者如果键设置为IDBKeyRange，则查找第一个对应的主键

**语法**

```js
const request: IDBRequest = IDBIndex.getKey();
const request: IDBRequest = IDBIndex.getKey(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|String \| IDBKeyRange|N|标识要检索的记录的键或IDBKeyRange。如果此值为null或缺失，浏览器将使用未绑定的键范围|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.getKey();
request.onsuccess = function (event) {
  const result = event.target.result;
};
```

---

#### `IDBIndex.openCursor()`

IDBIndex接口的openCursor()方法返回IDBRequest对象，并在单独的线程中在指定的键范围上创建一个游标

**语法**

```js
const request: IDBRequest = IDBIndex.openCursor();
const request: IDBRequest = IDBIndex.openCursor(range);
const request: IDBRequest = IDBIndex.openCursor(range, direction);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|range|String \| IDBKeyRange|N|要用作光标范围的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|direction|String<next \| nextunique \| prev \| prevunique>|N|光标的方向, 有效值为next、nextunique、prev和prevunique。默认值为next|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.openCursor();
request.onsuccess = function (event) {
  const cursor = event.target.result;
};
```

---

#### `IDBIndex.openKeyCursor()`

IDBIndex接口的openKeyCursor()方法返回一个IDBRequest对象，并在一个单独的线程中，按照此索引的安排，在指定的键范围上创建一个游标

**语法**

```js
const request: IDBRequest = IDBIndex.openKeyCursor();
const request: IDBRequest = IDBIndex.openKeyCursor(range);
const request: IDBRequest = IDBIndex.openKeyCursor(range, direction);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|range|String \| IDBKeyRange|N|要用作光标范围的键或IDBKeyRange。如果未传递任何内容，则默认为选择此对象仓库中所有记录的键范围|
|direction|String<next \| nextunique \| prev \| prevunique>|N|光标的方向, 有效值为next、nextunique、prev和prevunique。默认值为next|

示例

```js
const index: IDBIndex = IDBObjectStore.index(name);
const request: IDBRequest = index.openKeyCursor();
request.onsuccess = function (event) {
  const cursor = event.target.result;
};
```

---

## IDBCursor :id=cursor

IndexedDB API 中的 IDBCursor 接口表示一个游标，用于遍历或迭代数据库中的多条记录。
游标有一个源，指示需要遍历哪一个索引或者对象仓库区。它在所属区间范围内有一个位置，根据记录健（存储字段）的顺序递增或递减方向移动。游标使应用程序能够异步处理在游标范围内的所有记录

**创建游标**

```js
const request: IDBRequst = IDBDataBase.transaction(name, 'readonly').objectStore(name).openCursor();

request.onsuccess = function (e) {
	const cursor: IDBCursor = e.target.result;
}
```

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBCursor.key`|Any|Y|返回在游标中的位置。如果游标在范围之外，这个值会被置为undefined。游标的key可以是任何数据类型|
|`IDBCursor.direction`|String|Y|IDBCursor接口的direction属性表示游标遍历的方向|
|`IDBCursor.primaryKey`|Any|Y|IDBCursor接口的primaryKey属性返回光标的当前有效键。如果光标当前正在迭代或已在其范围外迭代，则将其设置为未定义。光标的主键可以是任何数据类型|
|`IDBCursor.request`|Object\<IDBRequest>|Y|IDBCursor接口的request属性返回用于获取光标的IDBRequest|
|`IDBCursor.source`|Object<IDBObjectStore \| IDBIndex>|Y|IDBCursor接口的源只读属性返回游标正在迭代的IDBObjectStore或IDBIndex。此函数从不返回null或引发异常，即使光标当前正在迭代、已迭代过终点或其事务未处于活动状态|

---

### 方法

#### `IDBCursor.advance()`

IDBCursor接口的advance()方法设置光标向前移动位置的次数，返回值None(undefined)

**语法**

```js
IDBCursor.advance(count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|count|Number|Y|向前移动光标的次数|

---

#### `IDBCursor.continue()`

IDBCursor接口的continue()方法将光标前进到沿其方向的下一个位置，即其键与可选键参数匹配的项。如果未指定键，光标将根据其方向前进到下一个位置，返回值None(undefined)

**语法**

```js
IDBCursor.continue();
IDBCursor.continue(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Any|Y|用于定位光标的键|

---

#### `IDBCursor.continuePrimaryKey()`

IDBCursor接口的continuePrimaryKey()方法将光标前进到其键与key参数匹配以及主键与主键参数匹配的项，返回值None(undefined)

!> 此方法仅对来自索引的游标有效。将其用于来自对象仓库的游标将引发错误

**语法**

```js
IDBCursor.continuePrimaryKey(key, primaryKey);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Any|Y|用于定位光标的键|
|primaryKey|Any|Y|用于定位光标的主键|

---

#### `IDBCursor.delete()`

IDBCursor接口的delete()方法返回IDBRequest对象，并在单独的线程中删除光标位置处的记录，而不更改光标位置。删除记录后，光标的值将设置为null

!> 不能对从IDBIndex获取的游标调用delete()

**语法**

```js
IDBCursor.delete();
```

---

#### `IDBCursor.update()`

IDBCursor接口的update()方法返回IDBRequest对象，并在单独的线程中更新对象仓库中光标当前位置的值。如果光标指向刚刚删除的记录，则会创建一条新记录

!> 不能对从IDBIndex获取的游标调用update()

**语法**

```js
IDBCursor.update(value);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|value|Object|Y|需要修改的对象|

---

## IDBCursorWithValue :id=cursorwithvalue

IndexedDB API的IDBCursorWithValue接口表示用于遍历或迭代数据库中多个记录的游标。它与IDBCursor相同，只是它包含value属性

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBCursor.key`|Any|Y|返回在游标中的位置。如果游标在范围之外，这个值会被置为undefined。游标的key可以是任何数据类型|
|`IDBCursor.direction`|String|Y|IDBCursor接口的direction属性表示游标遍历的方向|
|`IDBCursor.primaryKey`|Any|Y|IDBCursor接口的primaryKey属性返回光标的当前有效键。如果光标当前正在迭代或已在其范围外迭代，则将其设置为未定义。光标的主键可以是任何数据类型|
|`IDBCursor.request`|Object\<IDBRequest>|Y|IDBCursor接口的request属性返回用于获取光标的IDBRequest|
|`IDBCursor.source`|Object<IDBObjectStore \| IDBIndex>|Y|IDBCursor接口的源只读属性返回游标正在迭代的IDBObjectStore或IDBIndex。此函数从不返回null或引发异常，即使光标当前正在迭代、已迭代过终点或其事务未处于活动状态|
|`IDBCursorWithValue.value`|Object|Y|IDBCursorWithValue接口的value属性返回当前游标的值，无论是什么|

---

### 方法

#### `IDBCursorWithValue.advance()`

IDBCursorWithValue接口的advance()方法设置光标向前移动位置的次数，返回值None(undefined)

**语法**

```js
.IDBCursorWithValue.advance(count);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|count|Number|Y|向前移动光标的次数|

---

#### `IDBCursorWithValue.continue()`

IDBCursorWithValue接口的continue()方法将光标前进到沿其方向的下一个位置，即其键与可选键参数匹配的项。如果未指定键，光标将根据其方向前进到下一个位置，返回值None(undefined)

**语法**

```js
IDBCursorWithValue.continue();
IDBCursorWithValue.continue(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Any|Y|用于定位光标的键|

---

#### `IDBCursorWithValue.continuePrimaryKey()`

IDBCursorWithValue接口的continuePrimaryKey()方法将光标前进到其键与key参数匹配以及主键与主键参数匹配的项，返回值None(undefined)

!> 此方法仅对来自索引的游标有效。将其用于来自对象仓库的游标将引发错误

**语法**

```js
IDBCursorWithValue.continuePrimaryKey(key, primaryKey);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Any|Y|用于定位光标的键|
|primaryKey|Any|Y|用于定位光标的主键|

---

#### `IDBCursorWithValue.delete()`

IDBCursorWithValue接口的delete()方法返回IDBRequest对象，并在单独的线程中删除光标位置处的记录，而不更改光标位置。删除记录后，光标的值将设置为null

!> 不能对从IDBIndex获取的游标调用delete()

**语法**

```js
IDBCursorWithValue.delete();
```

---

#### `IDBCursorWithValue.update()`

IDBCursorWithValue接口的update()方法返回IDBRequest对象，并在单独的线程中更新对象仓库中光标当前位置的值。如果光标指向刚刚删除的记录，则会创建一条新记录

!> 不能对从IDBIndex获取的游标调用update()

**语法**

```js
IDBCursorWithValue.update(value);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|value|Object|Y|需要修改的对象|

---

## IDBKeyRange :id=idbkeyrange

IndexedDB API 的IDBKeyRange接口表示一些数据类型上的键的连续间隔。可以使用一个键或某个范围的键从IDBObjectStore 和IDBIndex 对象中检索记录。您也可以指定键的上界和下界来限制范围。例如，您可以遍历值范围a - z中的键的所有值。

键范围可以是单个值，也可以是具有上界、下界或端点的范围。如果键范围同时有上界或下界，那么它是有界的，否则是无界的。有界键范围可以是开放的（不包含端点）或闭合的（包含了端点）。要检索一定范围内的所有键值，可以使用以下的代码结构:

|范围|代码|
|:---|:---|
|All keys ≤ x|IDBKeyRange.upperBound(x)|
|All keys < x|IDBKeyRange.upperBound(x, true)|
|All keys ≥ y|IDBKeyRange.lowerBound(y)|
|All keys > y|IDBKeyRange.lowerBound(y, true)|
|All keys ≥ x && ≤ y|IDBKeyRange.bound(x, y)|
|All keys > x && < y|IDBKeyRange.bound(x, y, true, true)|
|All keys > x && ≤ y|IDBKeyRange.bound(x, y, true, false)|
|All keys ≥ x && < y|IDBKeyRange.bound(x, y, false, true)|
|The key = z|IDBKeyRange.only(z)|

**创建游标范围**

```js
const range: IDBKeyRange = IDBKeyRange();
const request: IDBRequest = IDBObjectStore.openCursor(range);
```

### 属性

|属性|返回类型|只读|描述|
|:---|:---|:---|:---|
|`IDBKeyRange.lower`|Any|Y|IDBKeyRange接口的lower属性返回键范围的下限|
|`IDBKeyRange.lowerOpen`|Boolean|Y|IDBKeyRange接口的lowerOpen只读属性返回一个布尔值，指示下限值是否包含在键范围中|
|`IDBKeyRange.upper`|Any|Y|IDBKeyRange接口的上限属性返回键范围的上限|
|`IDBKeyRange.upperOpen`|Boolean|Y|IDBKeyRange接口的upperOpen只读属性返回一个布尔值，指示上界值是否包含在键范围中|

---

### 方法

#### `IDBKeyRange.bound()`

IDBKeyRange接口的bound()方法创建具有指定上限和下限的IDBKeyRange。边界可以是开放的（即，边界排除端点值）或闭合的（即，边界包括端点值）。默认情况下，边界是闭合的

**语法**

```js
IDBKeyRange.bound(lower, upper);
IDBKeyRange.bound(lower, upper, lowerOpen);
IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|lower|Any|Y|指定IDBKeyRange范围的下限|
|upper|Any|Y|指定IDBKeyRange范围的上限|
|lowerOpen|Boolean|N|指示下限是否闭合。默认值为false|
|upperOpen|Boolean|N|指示上限是否闭合。默认值为false|

---

#### `IDBKeyRange.includes()`

IDBKeyRange接口的includes()方法返回一个布尔值，指示指定的键是否在键范围内

**语法**

```js
IDBKeyRange.includes(key);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|key|Any|Y|要在IDBKeyRange范围内检查的键|

---

#### `IDBKeyRange.lowerBound()`

IDBKeyRange接口的lowerBound()方法创建一个仅具有下限的IDBKeyRange对象。默认情况下，它包括较低的端点值，并且是闭合的

**语法**

```js
IDBKeyRange.lowerBound(lower);
IDBKeyRange.lowerBound(lower, open);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|lower|Any|Y|指定IDBKeyRange范围的下限|
|open|Boolean|N|指示下限是否闭合。默认值为false|

---

#### `IDBKeyRange.only()`

IDBKeyRange接口的only()方法创建一个包含单个值的IDBKeyRange对象

**语法**

```js
IDBKeyRange.only(value);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|value|Any|Y|IDBKeyRange范围的值|

---

#### `IDBKeyRange.upperBound()`

IDBKeyRange接口的upperBound()方法创建一个IDBKeyRange对象。默认情况下，它包括上端点值，并且是闭合的

**语法**

```js
IDBKeyRange.upperBound(upper);
IDBKeyRange.upperBound(upper, open);
```

|参数|类型|必传|描述|
|:---|:---|:---|:---|
|upper|Any|Y|指定IDBKeyRange范围的上限|
|open|Boolean|N|指示上限是否闭合。默认值为false|

## 封装的IndexedDB

### 使用

```js
const db = new KaCache.IndexedDB({
  name: 'local',
  version: 1,
  stores: {
    log: {
      keyPath: 'id',
      autoIncrement: false,
      fields: {
        id: 'string',
        name: 'string',
        code: 'string',
        time: 'number'
      },
      indexs: {
        time: {
          keyPath: 'time',
          unique: false
        }
      }
    }
  }
});

db.open()
db.getStore('log', 'readwrite', (store) => {
  store.add({ ... });
});
```

### 配置项

|参数|类型|必传|默认值|描述|
|:---|:---|:---|:---|:---|
|name|String|Y|-|数据库名|
|version|Number|Y|-|数据库版本号，新的版本号不能比当前版本号低|
|stores|Object|Y|-|数据表模型|

**数据表模型属性说明**

`key值表示数据表名`

|属性|类型|必传|描述|
|:---|:---|:---|:---|
|keyPath|String \| Number \| undefined|Y|数据表主键名称|
|autoIncrement|Boolean|N|是否自增主键|
|indexs|Object|N|索引模型(indexedDB是非关系型数据库，建立索引，可以根据索引查找数据，否则只能根据主键查找)|

`注: 一般keyPath和autoIncrement只需要一个，两个都存在并且autoIncrement为true的话，自动生成一个自增主键，并且keyPath设置的字段必须要存在, 且对象不得缺少指定属性`

**索引模型属性说明**

`key值表示索引名`

属性|类型|必传|描述
:---|:---|:---|:---
keyPath|String \| Array\<string>|Y|建立索引的键
unique|Boolean|N|索引是否允许重复键值

使用IndexedDB 注意点

> 当数据库结构发生变化(新增数据表，增删数据表索引)，版本需要更新(否则不起作用)，且新版本号不能比旧版本号低，否则会报错
> 版本更新时，因为IndexedDB的限制，只能在版本更新的事务中增删数据表和数据表索引，但版本更新的事务，无法获取旧表对象，所以无法操作旧表，只能删除旧表，重新建立索引，这个操作会导致原本的数据丢失

### 方法

### IndexedDB

#### `IndexedDB.open()`

建立IndexedDB连接，返回promise对象

```js
IndexedDB.open();
```

---

#### `IndexedDB.close()`

关闭IndexedDB连接，返回值undefined

```js
IndexedDB.close();
```

---

#### `IndexedDB.getStore()`

获取数据表对象，返回值 IDBObjectStore

|参数|类型|必传|描述|
|:---|:---|:---|---|
|name|String|Y|数据表名|
|mode|String<readwrite \| readonly>|Y|事务执行方式|
|callback|Function|N|回调函数|

```js
const store = IndexedDB.getStore('log', 'readonly', (objectStore) => {
  objectStore.add({ ... });
});
```

---

#### Store

> 以log表为例

```js
await db.open();
db.stores.log.add({ ... });
```

---

#### `Store.add()`

新增数据 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|value|Object \| Array\<Object>|Y|新增的数据|

```js
db.stores.log.add([{ name: '测试', id: '1', time: new Date() }])
  .then((res) => {
    console.log(res.data):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

---

#### `Store.delete()`

删除数据 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|id|String \| Number \| Array<string \| number>|Y|删除的数据的主键|

```js
db.stores.log.delete(['1'])
  .then((res) => {
    console.log(res.data):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

---

#### `Store.update()`

修改数据 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|value|Object \| Array\<Object>|Y|修改的数据|

```js
db.stores.log.update([{ id: '1', code: 'log' }])
  .then((res) => {
    console.log(res.data):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

---

#### `Store.findOne()`

查找一条数据 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|value|any|Y|有索引则打开索引来查找，无索引则当作主键查找|
|index|String|N|索引的名称|

```js
db.stores.log.findOne('1')
  .then((res) => {
    console.log(res.data):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

---

#### `Store.find()`

查找多条数据 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|index|String|N|索引的名称, 为空则查询主键|
|range|[IDBKeyRange](https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange)|N|IDBKeyRange范围, 为空则查询全部|

```js
db.stores.log.find()
  .then((res) => {
    console.log(res.data):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

#### `Store.count()`

查询数据量 返回Promise对象

|参数|类型|必传|描述|
|:---|:---|:---|---|
|range|[IDBKeyRange](https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange)|N|IDBKeyRange范围, 为空则查询全部|

```js
db.stores.log.count()
  .then((res) => {
    console.log(res):
    // do something
  })
  .catch((err) => {
    console.log(err.error);
  });
```

### 代码

`index.d.ts`

```ts
interface Window {
  readonly mozIndexedDB: any
  readonly webkitIndexedDB: any
  readonly msIndexedDB: any
}

declare namespace KaCache {

  interface Extra {
    [key: string]: any
  }

  interface Indexs {
    keyPath: string | Array<string>,
    unique?: boolean
    multiEntry?: boolean
  }

  interface StoreOptions {
    keyPath: string,
    autoIncrement?: boolean,
    indexs?: {
      [key: string]: Indexs
    }
  }

  interface IndexedDBDriveProps {
    name: string,
    version: number,
    stores: {
      [key: string]: StoreOptions
    }
  }

  interface Store {
    add (value: Extra): Promise<any>

    find (index?: string, range?: IDBKeyRange): Promise<any>

    count(range?: IDBKeyRange): Promise<any>

    delete (id: string | number | Array<string | number>): Promise<any>

    update (valeu: Extra | Array<Extra>): Promise<any>

    findOne (value: any, index?: string): Promise<any>
  }

  interface IndexedDBDrive {
    open (): Promise<IDBDatabase>

    close (): void

    getStore(name: string, mode: 'readwrite' | 'readonly', cb: () => void): IDBObjectStore
  }
}
```

`store.ts`

```ts
function getKeyPath (id: string, isAuto = false, callback: any) {
  let _id = id;
  // 主键兼容
  if (!isAuto) {
    if (!getTypeOfKeyPath(_id)) {
      callback({ error: 'data in wrong format of keyPath' });
    }
    if (!_id) {
      _id = `${new Date().getTime()}`;
    }
  } else {
    _id = undefined;
  }

  return _id;
}

function getTypeOfKeyPath (keyPath: any): boolean {
  return typeof keyPath == 'number'
    || typeof keyPath === 'string'
    || typeof keyPath === 'undefined';
}

class Store implements KaCache.Store {
  db: IDBDatabase
  name: string

  constructor (db: IDBDatabase, name: string, options: KaCache.StoreOptions) {
    this.db = db;
    this.name = name;

    if (this.db.objectStoreNames.contains(this.name)) {
      this.db.deleteObjectStore(this.name);
    }

    const store: IDBObjectStore = this.db.createObjectStore(this.name, {
      keyPath: options.keyPath || 'id',
      autoIncrement: options.autoIncrement || false
    });

    if (options.indexs) {
      Object.keys(options.indexs).forEach((indexName) => {
        const index = options.indexs[indexName];
        store.createIndex(indexName, index.keyPath, { unique: index.unique || false });
      });
    }
  }

  add (value: KaCache.Extra | [KaCache.Extra]): Promise<any> {
    return new Promise((resolve, reject) => {
      const _value = Array.isArray(value) ? value : [value];
      const transaction: IDBTransaction = this.db.transaction(this.name, 'readwrite');
      const store: IDBObjectStore = transaction.objectStore(this.name);
      const autoIncrement = store.autoIncrement;

      const result = [];

      _value.forEach((item: KaCache.Extra, index: number) => {
        const _id = getKeyPath(item[`${store.keyPath}`], autoIncrement, reject);
        store.add({ ...item, [`${store.keyPath}`]: _id });
        result.push(_id || index + 1);
      });

      transaction.onabort = (e: any) => reject({ error: e.target.error });
      transaction.oncomplete = () => resolve({ data: result });
    });
  }

  find (index?: string, range?: IDBKeyRange): Promise<any> {
    return new Promise((resolve, reject) => {
      const store: IDBObjectStore = this.db.transaction(this.name, 'readonly').objectStore(this.name);

      let request: IDBRequest;
      if (index) {
        const _index: IDBIndex = store.index(index);
        request = _index.openCursor(range);
      } else {
        request = store.openCursor(range);
      }

      const result = [];

      request.onerror = (e: any) => reject({ error: e.target.error });
      request.onsuccess = (e: any) => {
        let cursor: IDBCursorWithValue = e.target.result;
        if (cursor) {
          result.push({ ...cursor.value });
          cursor.continue();
        } else {
          cursor = null;
          resolve({ data: result });
        }
      }
    });
  }

  count (range?: IDBKeyRange): Promise<any> {
    return new Promise((resolve, reject) => {
      const store = this.db.transaction(this.name, 'readonly').objectStore(this.name);
      const request: IDBRequest = store.count(range);
      request.onerror = (e: any) => reject({ error: e.target.error });
      request.onsuccess = (e: any) => resolve(e.target.result);
    });
  }

  delete (id: Array<string | number> |string | number): Promise<any> {
    return new Promise((resolve, reject) => {
      const _value = Array.isArray(id) ? id : [id];
      const transaction: IDBTransaction = this.db.transaction(this.name, 'readwrite');
      const store: IDBObjectStore = transaction.objectStore(this.name);

      const result = [];
      _value.forEach((_id: string | number) => {
        if (typeof _id === 'number' || typeof _id === 'string') {
          store.delete(_id);
          result.push(_id);
        } else {
          reject({ error: 'data in wrong format of keyPath' });
        }
      });

      transaction.onabort = (e: any) => reject({ error: e.target.error });
      transaction.oncomplete = () => resolve({ data: result });
    });
  }

  update (value: KaCache.Extra | [KaCache.Extra]) {
    return new Promise((resolve, reject) => {
      const _value = Array.isArray(value) ? value : [value];
      const transaction: IDBTransaction = this.db.transaction(this.name, 'readwrite');
      const store: IDBObjectStore = transaction.objectStore(this.name);

      const result = [];

      _value.forEach((item: KaCache.Extra) => {
        store.put({ ...item });
        result.push(item[`${store.keyPath}`]);
      });

      transaction.onabort = (e: any) => reject({ error: e.target.error });
      transaction.oncomplete = () => resolve({ data: result });
    });
  }

  findOne (value: any, index?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const store: IDBObjectStore = this.db.transaction(this.name, 'readonly').objectStore(this.name);

      let request: IDBRequest;

      if (index) {
        const _index: IDBIndex = store.index(index);
        request = _index.get(value);
      } else {
        request = store.get(value);
      }

      request.onerror = (e: any) => reject({ error: e.target.error });
      request.onsuccess = (e: any) => resolve({ data: e.target.result || null });
    });
  }

  // 分页查询 TODO
  // findByIndex (indexName: string, keyRange: IDBKeyRange, offset = 0, limit = 100) {

  // }
}
```

`indexeddb.ts`

```ts
class IndexedDBDrive implements KaCache.IndexedDBDrive {
  private name: string
  private version: number
  private Stores: { [key: string]: KaCache.StoreOptions }

  db: IDBDatabase
  stores: { [key: string]: Store }

  constructor (props: KaCache.IndexedDBDriveProps) {
    this.db = null;
    this.name = props.name;
    this.version = props.version;
    this.Stores = props.stores;
    this.stores = {};
  }

  open (): Promise<IDBDatabase> {
    const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!idb) {
      throw new Error('错误: 浏览器不支持IndexedDB');
    }

    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = idb.open(this.name, this.version);

      request.onerror = (e: any) => reject(e);

      request.onsuccess = (e: any) => {
        this.db = e.target.result;
        resolve(e.target.result);
      }

      request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        Object.keys(this.Stores).forEach((key) => {
          this.stores[key] = new Store(db, key, this.Stores[key]);
        });
      }
    });
  }

  close (): void {
    this.db.close();
  }

  getStore (name: string, mode: 'readwrite' | 'readonly', callback: (store: IDBObjectStore) => void): IDBObjectStore {
    const store = this.db.transaction(name, mode).objectStore(name);
    callback && callback(store);

    return store;
  }
}
```
