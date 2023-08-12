'use client'

import { getInTouch } from '@/models'
import { db } from '@/service/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import { toast, ToastContainer } from 'react-toastify'
import CustomToast from './CustomToast'
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup'

const initialValues: getInTouch = {
  name: '',
  email: '',
  message: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('*name is required'),
  email: Yup.string().email('*invalid email').required('*email is required'),
  message: Yup.string().required('*message is required'),
})

export default function GetInTouch() {
  async function handleSubmit(values: getInTouch, actions: any) {
    actions.setSubmitting(true)
    await setDoc(doc(db, 'messages', nanoid()), {
      name: values.name,
      email: values.email,
      message: values.message,
    })
    actions.setSubmitting(false)
    actions.resetForm({
      values: {
        name: '',
        email: '',
        message: '',
      },
    })
    toast.dark(<CustomToast />, {
      progressStyle: {
        background: '#4E4EE9',
      },
    })
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='relative'>
                <Field
                  type='text'
                  placeholder='Name'
                  name='name'
                  autoComplete='off'
                  className={[
                    'w-full rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C]',
                    values.name !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
                    errors.name && touched.name ? 'border-red-500' : '',
                  ].join(' ')}
                />
                <ErrorMessage
                  name='name'
                  component='p'
                  className='absolute -bottom-4 text-red-500 text-xs'
                />
              </div>
              <div className='relative'>
                <Field
                  type='email'
                  placeholder='Email'
                  name='email'
                  autoComplete='off'
                  className={[
                    'w-full rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C]',
                    values.email !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
                    errors.email && touched.email ? 'border-red-500' : '',
                  ].join(' ')}
                />
                <ErrorMessage
                  name='email'
                  component='p'
                  className='absolute -bottom-4 text-red-500 text-xs'
                />
              </div>
            </div>
            <div className='mt-6 relative'>
              <Field
                as='textarea'
                placeholder='message'
                name='message'
                className={[
                  'w-full rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C] h-24',
                  values.message !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
                  errors.message && touched.message ? 'border-red-500' : '',
                ].join(' ')}
              />
              <ErrorMessage
                name='message'
                component='p'
                className='absolute -bottom-3 text-red-500 text-xs'
              />
            </div>
            <button
              type='submit'
              className='mt-6 bg-white text-[#191921] w-full rounded-lg py-3 font-semibold'
              disabled={isSubmitting}
            >
              <div className='flex gap-3 justify-center items-center'>
                {isSubmitting ? (
                  <div role='status'>
                    <svg
                      aria-hidden='true'
                      className='inline h-4 w-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                    <span className='sr-only'>Loading..</span>
                  </div>
                ) : null}
                <p className='mt-1'>Send</p>
              </div>
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  )
}
