# 10 operator

"operator adalah sebuah simbol yang digunakan untuk melakukan operasi matematika."

operator:
1. aritmatika   ─┐
2. penugasan     │
3. perbandingan  ├─ binary
4. logika        │
5. string       ─┘
6. kondisional  ─── ternary
7. typeof       ─── unary

operator binary: operator yang membutuhkan 2 operand.
=> operand1 operator operand2
      1        +        2

operator unary: operator yang membutuhkan 1 operand.
=> operator operand
=> operand operator

operator ternary: operator yang membutuhkan 2 operand.

## operator aritmatika

+, -, *, /, %

operator precedence (urutan operasi matematika)
=> KuKaBaTaKu () * / + -

## operator penugasan (assignment)

=, +=, -=, *=, /=, %=

| operator penugasan | sama saja dengan |
|--------------------|------------------|
| x += y             | x = x + y        |
| x -= y             | x = x - y        |
| x *= y             | x = x * y        |
| x /= y             | x = x / y        |
| x %= y             | x = x % y        |

## operator perbandingan (comparison)

| operator perbandingan | keterangan               |
|-----------------------|--------------------------|
| ==                    | sama dengan              |
| !=                    | tidak sama dengan        |
| ===                   | strict sama dengan       |
| !==                   | strict tidak sama dengan |
| >                     | lebih besar dari         |
| <                     | lebih kecil dari         |
| >=                    | lebih besar sama dengan  |
| <=                    | lebih kecil sama dengan  |

akan menghasilkan nilai boolean
=> true or false

untuk mengecek nilai dan tipe data yang sama, gunakan === (operator identitas)
```javascript
10 == "10"
=> true
10 === "10"
=> false
```

## operator logika (logical)

digunakan untuk menentukan logika dari beberapa ekspresi yang nanti kalian gabungkan.

&&, ||, !

| operator | keterangan |
|----------|------------|
| &&       | AND        |
| ||       | OR         |
| !        | NOT        |

## operator string

```javascript
var a
var b
a = "apple"
b = "pen"
a + b
=> "applepen"

10 + "10"
=> "1010"
"10" + 10
=> "1010"
10 + 10 + "10"
=> "2010"
"10" + 10 + 10
=> "101010"
```

## operator typeof

```javascript
typeof(10)
=> "number"

typeof("10")
=> "string"

typeof(true)
=> "boolean"
```

## operator kondisional (conditional)

(kondisi) ? benar : salah

```javascript
(x % 2 == 0) ? "genap" : "ganjil"
```
