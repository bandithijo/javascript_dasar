# 12 tipe data

## tipe data string

"tipe data String dalam JavaScript digunakan untuk merepresentasikan data tekstual (plain text."

```javascript
"...", '...', `...`
"Rizqi", 'Nur', `Assyaufi`

"Hari ini adalah hari Jum'at"
'Kami sedang mengadakan kegiatan "Gerakan Pungut Sampah"'
```

### escape character

\"
\'

```javascript
'"Gerakan Pungut Sampah" dilakukan pada hari Jum\'at'
"\"Gerakan Pungut Sampah\" dilakukan pada hari Jum'at"
```

| escape character | hasil     |
|------------------|-----------|
| \0               | NULL      |
| \'               | '         |
| \"               | "         |
| \\               | \         |
| \n               | newline   |
| \t               | tab       |
| \b               | backspace |
| \uXXXX           | unicode   |

| unicode | hasil |
|---------|-------|
| \u00A9  | ©     |
| \u00AE  | ®     |
| \u00B0  | °     |
| \u00B1  | ±     |
| \u00B5  | µ     |
| \u2122  | ™     |
| ...     | ...   |

source: https://en.wikipedia.org/wiki/List_of_Unicode_characters

### string concatenation (konkatenasi)

```javascript
>> "hello" + "world"
<- "helloworld"
```

### membandingkan string

```javascript
>> "Rizqi Nur Assyaufi" == "rizqi nur assyaufi"
<- false
```

### fungsi .length

untuk menghitung panjang string

```javascript
>> "Rizqi Nur Assyaufi".length
<- 18
```

## tipe data boolean

"sebuah tipe data yang digunakan untuk merepresentasikan logika true atau false"

biasanya digunakan pada statement pengkondisian, untuk menentukan aksi yang berbeda dan mengatur alur kendali program.

```javascript
var x = 10;
x < 20
<- true

"Rizqi" == "rizqi"
<- false

Boolean(x < 20)
<- true
Boolean(10)
<- true
Boolean(-10)
<- true

Boolean(null)
<- false
Boolean(0)
<- false
Boolean("")
<- false
```

| truthy          | falsy     |
|-----------------|-----------|
| true            | false     |
| non-zero-number | 0         |
| "string"        | ""        |
| object          | undefined |
| arrays          | null      |
| functions       | NaN       |

undefined adalah sebuah tipe yang dihasilkan ketika kita mendeklarasikan variable namun belum ada nilainya.
```javascript
var x;
<- undefined
```

null adalah nilai kosong yang bisa kita berikan pada sebuah variabel.
```javascript
var x = null;
<- undefined
x;
<- null
```
