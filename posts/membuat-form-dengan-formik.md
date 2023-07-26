---
title: 'membuat form dengan formik'
subtitle: 'Formik adalah library populer untuk mengelola state dan validasi formik'
date: '2023-06-04'
status: 'published'
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

### Instalasi Formik

untuk menginstall library formik, sama seperti saat mengintall dependency sebelumnya di terminal

```bash
npm install formik --save
```

### Implementasi formik

kita import terlebih dahulu `Formik` di dalam komponen yang membutuhkan form

```javascript
import { Formik, Form, Field } from 'formik'
```

kemudian kita terapkan di dalam komponennya, disini kita akan menerapkan formik ke dalam komponen `<App/>`

```javascript
export default function App() {
    function handleSubmit(values) {
        console.log(values)
    }
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}>
            <Form>
                <Field type="email" name="email" />
                <Field type="password" name="password" />
                <button type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    )
}
```

dalam komponen Formik kemudian kita inisialiasi data yang akan kita kirim saat menekan tombol submit dengan props bernama `initialValues` props ini menerima object dan untuk saat ini kita akan mengirim data berupa email dan password saja.  kemudian props kedua yang kita butuhkan yaitu `onSubmit` pada props ini kita akan isi dengan fungsi bernama `handleSubmit` dimana fungsi ini menerima parameter berupa values, values ini kita dapatkan dari Formik

dalam fungsi `handleSubmit` sudah kita sebutkan diatas fungsi ini akan menerima values kemudian kita akan cetak kedalam `console` untuk melihat hasilnya. selamat kamu udah berhasil membuat form dengan bantuan formik🥳

berikutnya kita akan membuat form dinamis menggunakan formik