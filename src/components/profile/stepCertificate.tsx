'use client'

import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

type Certificate = {
  'certificate-name': string
  'certificate-num': string
  'certificate-grade'?: string
  'certificate-year'?: string
}

type CertificateData = {
  certificates: Certificate[]
}

export default function StepCertificate() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CertificateData>()

  const certificatesFromForm = watch('certificates') || []

  const [certificates, setCertificates] = useState<{ id: number }[]>(() =>
    certificatesFromForm.length > 0
      ? certificatesFromForm.map((_, index) => ({ id: index + 1 }))
      : [{ id: 1 }],
  )

  const [authStatus, setAuthStatus] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    if (certificates.length === certificatesFromForm.length) return
    setCertificates(certificatesFromForm.map((_, index) => ({ id: index + 1 })))
  }, [certificatesFromForm])

  const addCertificate = () => {
    if (certificates.length < 3) {
      const newId = certificates.length + 1
      setCertificates([...certificates, { id: newId }])
      setAuthStatus((prevState) => ({
        ...prevState,
        [newId]: '',
      }))
    }
  }

  const removeCertificate = (index: number) => {
    const updatedCertificates = [...certificatesFromForm]
    updatedCertificates.splice(index, 1)

    setValue('certificates', updatedCertificates)

    updatedCertificates.forEach((_, i) => {
      register(`certificates.${i}.certificate-name`)
      register(`certificates.${i}.certificate-num`)
      register(`certificates.${i}.certificate-grade`)
      register(`certificates.${i}.certificate-year`)
    })

    const newAuthStatus = { ...authStatus }
    delete newAuthStatus[index + 1]
    setAuthStatus(newAuthStatus)
  }

  const handleCertificateNumChange = (index: number) => {
    const certIndex = index + 1
    setAuthStatus((prevState) => ({ ...prevState, [certIndex]: '인증 중' }))

    setTimeout(() => {
      setAuthStatus((prevState) => ({ ...prevState, [certIndex]: '완료' }))
    }, 3000)
  }

  return (
    <main>
      <h2 className='mb-4 text-xl font-bold'>
        <span className='text-customGreen'>Q. </span>자격증을 입력해 주세요.
        <span className='text-sm text-customGreen'> (필수) </span>
      </h2>

      {certificates.map((cert, index) => {
        const selectedCertificate = watch(`certificates.${index}.certificate-name`)

        return (
          <div key={cert.id} className='mb-6 border-b pb-4'>
            <div className='flex justify-between gap-4'>
              <div className='flex w-full rounded-xl border border-buttonGray bg-left px-2'>
                <Image src='/icon/arrow.svg' alt='arrow' width={20} height={20} />
                <select
                  {...register(`certificates.${index}.certificate-name`, {
                    required: '자격증 종류를 선택해주세요.',
                  })}
                  defaultValue=''
                  className='w-full cursor-pointer appearance-none rounded-xl bg-left py-2 pr-4'
                >
                  <option value='' disabled>
                    자격증 종류
                  </option>
                  <option value='사회복지사'>사회복지사</option>
                  <option value='요양보호사'>요양보호사</option>
                  <option value='간호조무사'>간호조무사</option>
                  <option value='기타'>기타</option>
                </select>
                {authStatus[index + 1] === '인증 중' && (
                  <Image
                    src='/icon/loading.svg'
                    alt='loading'
                    width={30}
                    height={30}
                    className='animate-spin'
                  />
                )}
                {authStatus[index + 1] === '완료' && (
                  <Image src='/icon/check.svg' alt='completed' width={30} height={30} />
                )}
              </div>

              {certificates.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeCertificate(index)}
                  className='w-10 text-sm'
                >
                  삭제
                </button>
              )}
            </div>

            {selectedCertificate === '사회복지사' && (
              <div className='mt-4 flex items-center gap-4'>
                <div className='flex w-[30%] rounded-xl border border-buttonGray bg-left px-2'>
                  <Image src='/icon/arrow.svg' alt='arrow' width={20} height={20} />
                  <select
                    {...register(`certificates.${index}.certificate-grade`, {
                      required: '자격증 등급을 선택해주세요.',
                    })}
                    defaultValue=''
                    className='w-full cursor-pointer appearance-none rounded-xl p-2'
                  >
                    <option value='' disabled>
                      등급
                    </option>
                    <option value='1급'>1급</option>
                    <option value='2급'>2급</option>
                    <option value='3급'>3급</option>
                    <option value='기타'>기타</option>
                  </select>
                </div>
                <span>-</span>
                <input
                  {...register(`certificates.${index}.certificate-num`, {
                    required: '자격증 번호를 입력하세요',
                    pattern: {
                      value: /^\d{6}$/,
                      message: '올바른 자격증 번호를 입력해주세요.',
                    },
                  })}
                  type='text'
                  placeholder='숫자 6자리'
                  className='flex w-full rounded-xl border border-buttonGray p-2 px-4'
                  onChange={() => handleCertificateNumChange(index)}
                />
              </div>
            )}

            {selectedCertificate === '요양보호사' && (
              <div className='mt-4 flex items-center gap-4'>
                <input
                  {...register(`certificates.${index}.certificate-year`, {
                    required: '발급 연도를 입력해주세요.',
                    pattern: {
                      value: /^20\d{2}$/,
                      message: '올바른 발급 연도를 입력해주세요.',
                    },
                  })}
                  type='text'
                  placeholder='20XX'
                  className='w-[30%] rounded-xl border border-buttonGray p-2 px-4'
                />
                <span className='flex items-center'>-</span>
                <input
                  {...register(`certificates.${index}.certificate-num`, {
                    required: '자격증 번호를 입력하세요.',
                    pattern: {
                      value: /^\d{6}$/,
                      message: '올바른 자격증 번호를 입력해주세요.',
                    },
                  })}
                  type='text'
                  placeholder='숫자 6자리'
                  className='flex w-full rounded-xl border border-buttonGray p-2 px-4'
                  onChange={() => handleCertificateNumChange(index)}
                />
              </div>
            )}

            {selectedCertificate === '간호조무사' && (
              <div className='mt-4 flex items-center justify-center gap-4'>
                <div className='flex w-[40%] rounded-xl border border-buttonGray bg-left px-2'>
                  <Image src='/icon/arrow.svg' alt='arrow' width={20} height={20} />
                  <select
                    {...register(`certificates.${index}.certificate-year`, {
                      required: '발급 연도를 선택해주세요.',
                    })}
                    defaultValue=''
                    className='w-full cursor-pointer appearance-none rounded-xl p-2 px-4'
                  >
                    <option value='' disabled>
                      20XX
                    </option>
                    {Array.from({ length: 2025 - 2000 + 1 }, (_, i) => (
                      <option key={i} value={2000 + i}>
                        {2000 + i}
                      </option>
                    ))}

                    <option value='no'>없음</option>
                  </select>
                </div>
                <span>-</span>
                <input
                  {...register(`certificates.${index}.certificate-num`, {
                    required: '자격증 번호를 입력하세요',
                    pattern: {
                      value: /^\d{6}$/,
                      message: '올바른 자격증 번호를 입력해주세요.',
                    },
                  })}
                  type='text'
                  placeholder='숫자 6자리 입력'
                  className='flex w-full rounded-xl border border-buttonGray p-2 px-4'
                  onChange={() => handleCertificateNumChange(index)}
                />
              </div>
            )}

            {errors?.certificates?.[index]?.['certificate-name']?.message && (
              <p className='p-2 text-sm text-red-500'>{`* ${errors.certificates[index]['certificate-name'].message}`}</p>
            )}

            {errors?.certificates?.[index]?.['certificate-grade'] &&
              selectedCertificate === '사회복지사' && (
                <p className='p-2 text-sm text-red-500'>
                  {`* ${errors.certificates[index]['certificate-grade'].message}`}
                </p>
              )}

            {errors?.certificates?.[index]?.['certificate-year'] &&
              selectedCertificate === '요양보호사' && (
                <p className='p-2 text-sm text-red-500'>
                  {`* ${errors.certificates[index]['certificate-year'].message}`}
                </p>
              )}

            {errors?.certificates?.[index]?.['certificate-num'] && (
              <p className='p-2 text-sm text-red-500'>
                {`* ${errors.certificates[index]['certificate-num'].message}`}
              </p>
            )}
          </div>
        )
      })}

      {certificates.length < 3 && (
        <button
          type='button'
          onClick={addCertificate}
          className='mx-auto mt-4 block rounded-full border bg-[#b7dab0b4] px-2 text-lg font-bold text-customGreen hover:bg-[#ccf1c5b4]'
        >
          +
        </button>
      )}
    </main>
  )
}
