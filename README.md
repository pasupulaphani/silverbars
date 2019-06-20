## Problem statement

See file problem.pdf

### Assumptions

1. Order quantity can be only a positive number
2. Price per kg can be only a positive number
3. Anyone can cancel an order.

### USAGE

###### Install

```
    npm install silverbars
```
> Published the lib to npmjs

###### API

**Register an order**

```
    registerOrder(userId, quantityInKg, pricePerKg, orderType)

    Params:
      userId -> type string -> required
      quantityInKg -> type number and >=0 -> required
      pricePerKg -> type number and >=0 -> required
      orderType -> string ("BUY"/"SELL") -> required

    Returns: {id, userId, quantityInKg, pricePerKg, orderType}
      Where id -> type string

    Example: registerOrder("user1", 3.5, 306, "SELL");
```

**Cancel an order**

```
    cancelOrder(id)

    Params:
      id -> type string -> required

    Returns: boolean -> true if success

    Example: cancelOrder("37e91b68-4bee-4e63-b4e3-ac325b0817e1");
```

**Summary of an order type**

```
    getSummary(orderType)

    Params:
      orderType -> string ("BUY"/"SELL") -> required

    Returns: Array of {totalQuantityInKG, priceInGBP}
      totalQuantityInKG -> type number
      priceInGBP -> type number

    Example: getSummary("SELL");
```

### CONTRIBUTION/DEVELOPMENT

###### Run build

```
    npm install
    npm build
```

###### Run tests

```
    npm test
```
