'use client'

import { getInTouch } from '@/models'
import { Formik, Form, Field } from 'formik'

const initialValues: getInTouch = {
  name: '',
  email: '',
  message: '',
}

export default function GetInTouch() {
  async function handleSubmit(values: getInTouch) {
    console.log(values)
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values }) => (
        <Form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Field
              type='text'
              placeholder='Name'
              name='name'
              className={[
                'rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C]',
                values.name !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
              ].join(' ')}
            />
            <Field
              type='email'
              placeholder='Email'
              name='email'
              className={[
                'rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C]',
                values.email !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
              ].join(' ')}
            />
          </div>
          <Field
            as='textarea'
            placeholder='message'
            name='message'
            className={[
              'mt-6 w-full rounded-lg text-white border-[#2a2a37] focus:bg-[#21212C] h-24',
              values.message !== '' ? 'bg-[#21212C]' : 'bg-[#191921]',
            ].join(' ')}
          />
          <button
            type='submit'
            className='mt-4 bg-white text-[#191921] w-full rounded-lg py-3 font-semibold'
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  )
}
