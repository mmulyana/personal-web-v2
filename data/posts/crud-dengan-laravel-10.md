---
title: 'CRUD dengan laravel 10'
subtitle: ''
date: '2023-08-14'
status: 'draft'
---

### Validation

setelah kita berhasil menyimpan data kedalam database selanjutnya kita bakal buat validasi agar user tidak sembarangan saat mengisi form menggunakan request

<CodeBlock language="sh" title="terminal" code="php artisan make:request StoreProductRequest"/>

jika berhasil laravel akan membuat sebuah file dalam app/http/request dengan nama StroreProductRequest.php, buka file yang dibuatkan tadi kemudian ubah dalam fungsi authorize menjadi true, karena kita tidak akan mengauthorisasi atau user tidak diwajibkan login terlebih dahulu.

<CodeBlock language="php" title="StoreProductRequest.php" code={`public function authorize(): bool
{
    // jika return true maka tidak perlu di authorize begitu sebaliknya
    return true;
}
`}/>
