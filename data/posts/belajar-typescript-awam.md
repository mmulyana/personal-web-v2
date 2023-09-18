---
title: 'Belajar typescript untuk awam'
subtitle: ''
date: '2023-07-16'
status: 'draft'
tag: ['frontend', 'typescript']
---

typescript bukan cuma nambah kerjaan karena kita sekarang harus memikirkan typenya namun bayangkan kamu bekerja dengan banyak orang membuat product yang sudah sangat besar dan perusahaan mu ingin melakukan scale saat kamu ingin melakukan perubahan tanpa sengaja malah membuat error karena kamu tidak tahu apa yang terjadi, dengan typescript kamu akan langsung `dimarahi` sama linternya sehingga kamu tahu bakal tahu jika terjadi error dan sekaligus bisa menjadi dokumentasi dibandingkan menggunakan jsdoc

#### Primitive Types
type ini yang sering kita gunakan sebelumnya misalnya number

### Function
selanjutnya kita akan membuat sebuah function yang type safe, kita akan memberikan type untuk argumen dan returnnya, sebelumnya kita akan membuat function yang belum typesafe dengan nama isPassed, fungsi ini akan mengembalikan boolean dimana jika score lebih dari 90 akan mengembalikan nilai true
<CodeBlock language="javascript" title="index.ts" code={`function isPassed(score) {
    if(score >= 90) {
        return true
    } else {
        return false
    }
}
`}/>

kemudian kita terapkan typesafe dengan mendefinisikan type pada parameter dan function, maka function isPassed sekarang di return harus mengembalikan boolean dan parameter score harus bertipe number lalu bagaimana jika kita masukan string tentu linter langsung marah😠
<CodeBlock language="typescript" title="index.ts" code={`function isPassed(score: number): boolean {
    if(score >= 90) {
        return true
    } else {
        return false
    }
}
`}/>

dibawah ini menerapkan typesafe dengan type alliases pada arrow function
<CodeBlock language="typescript" title="index.ts" code={`type TypeIsPassed = (score: number) => boolean;

// arrow function
const isPassed: TypeIsPassed = (score) => {
    if(score >= 90) {
        return true
    } else {
        return false
    }
}
`}/>