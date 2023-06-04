---
title: 'membuat form dengan formik'
subtitle: 'Formik adalah library populer untuk mengelola state dan validasi formik'
date: '2023-06-04'
status: 'draft'
---

Dulu jika ingin membuat sebuah controlled form, kita dapat menggunakan hook `useState`. Masalah muncul saat sebuah form membutuhkan banyak banyak field maka perlu dibuat beberapa state sekaligus, untuk menghandle state yang kompleks dapat diselesaikan dengan `useReducer` tapi perlu diingat untuk menggunakan hook ini perlu inisial state dan fungsi reducernya, disinilah `formik` dapat membantu pekerjaan kita

### Output setelah membaca ini

- Membangun form menggunakan formik
- Menghandle submit dengan formik
- Menambahkan validasi dengan yup
- Menambahkan fitur error message


### Persiapan Proyek

pertama mari kita buat proyek react dengan vite menggunakan terminal, nama proyek bebas namun dalam tutorial saya buat nama form-with-formik

```bash
npm create vite form-with-formik -- --template react
```

lalu kita masuk kedalam direktori **form-with-formik**

```bash
cd form-with-formik
```

kemudian kita install dependency yang dibutuhkan 

```bash
npm install
```

### Install Fomrik

untuk menginstall library formik, sama seperti saat mengintall dependency sebelumnya di terminal

```bash
npm install formik
```

 
 
...udah malem lanjut besok😴